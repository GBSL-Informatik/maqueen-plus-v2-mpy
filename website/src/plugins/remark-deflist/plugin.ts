import { visit, CONTINUE, SKIP, EXIT } from 'unist-util-visit';
import type { Plugin, Processor, Transformer } from 'unified';
import type { MdxJsxFlowElement } from 'mdast-util-mdx';
import { Content, Parent, PhrasingContent, RootContent, Text } from 'mdast';

// match to determine if the line is an opening tag
const DD_REGEX = /(^|\r?\n):[ \t]+(.*?)/;
const DD_CONSECUTIVE_REGEX = /^(\r?\n)?:[ \t]+(.*?)/;
type ActionStates = 'SEEK_DD_START' | 'SEEK_CONSECUTIVE_DD_START' | 'COLLECT_DT_BODY' | 'COLLECT_DD_BODY' | 'ADD_TO_DL';

const createMdxJsxFlowElementNode = (name: string, children: Content[] = [], className?: string) => {
    const attributes = className ? [{ type: 'mdxJsxAttribute', name: 'className', value: className }] : [];
    return {
        type: 'mdxJsxFlowElement',
        name: name,
        attributes: attributes,
        children: children,
        data: {
            "_mdxExplicitJsx": true
        }
    } as MdxJsxFlowElement;
}

const plugin: Plugin = function plugin(
    this: Processor,
    optionsInput?: {
        classNames?: {
            dl?: string;
            dt?: string;
            dd?: string;
        },
        tagNames?: {
            dl?: string;
            dt?: string;
            dd?: string;
        }
    }
): Transformer {
    const { classNames, tagNames } = { tagNames: {}, classNames: {}, ...(optionsInput || {})};
    const DL = tagNames.dl || 'dl';
    const DT = tagNames.dt || 'dt';
    const DD = tagNames.dd || 'dd';
    const getDLNode = (children: Content[] = []) => {
        return createMdxJsxFlowElementNode(DL, children, classNames.dl);
    }

    const getDTNode = (children: Content[]) => {
        return createMdxJsxFlowElementNode(DT, [{ type: 'paragraph', children: children} as Content], classNames.dt);
    }

    const getDDNode = (children: Content[]) => {
        return createMdxJsxFlowElementNode(DD, [{ type: 'paragraph', children: children} as Content], classNames.dd);
    }
    return async (ast, vfile) => {
        visit(ast, (node, idx, parent: Parent) => {
            if (node.type === 'paragraph') {
                let action: ActionStates = 'SEEK_DD_START';
                visit(node, (cNode, cIdx, cParent: Parent) => {
                    /**
                     * RULE: only visit the direct children of the paragraph
                     *       --> only "SKIP" or "EXIT" are returned (except on the first visit)
                     */
                    if (!cParent) {
                        /** continue to it's children if cParent is not present */
                        return CONTINUE;
                    }
                    switch (action) {
                        case 'SEEK_DD_START':
                            if (cNode.type === 'text') {
                                const text = cNode as unknown as Text;
                                const ddMatch = text.value.match(DD_REGEX);
                                if (ddMatch) {
                                    const pre = text.value.slice(0, ddMatch.index);
                                    const dd = text.value.slice(ddMatch.index);
                                    if (pre.trim()) {
                                        cParent.children.splice(cIdx, 0, {
                                            type: 'text',
                                            value: pre
                                        });
                                        cIdx++;
                                    }
                                    cParent.children.splice(cIdx, 1, {
                                        type: 'text',
                                        value: dd.trimStart().slice(1).trimStart() // remove leading colon
                                    });
                                    action = 'COLLECT_DT_BODY';
                                    return [SKIP, cIdx];
                                }
                            }
                            return SKIP;
                        case 'COLLECT_DT_BODY':
                            if (cIdx === 0) {
                                /** the dd has no dt */
                                action = 'COLLECT_DD_BODY';
                                return [SKIP, cIdx];
                            }
                            visit(cParent, (dtNode, dtIdx, dtParent: Parent) => {
                                const correctNested = dtParent && dtParent === cParent;
                                if (!correctNested || dtIdx >= cIdx) {
                                    if (correctNested) {
                                        return SKIP;
                                    }
                                    return CONTINUE;
                                }
                                if (dtNode.type === 'text') {
                                    const text = dtNode as Text;
                                    const newLineMatch = text.value.match(/\r?\n/);
                                    if (newLineMatch) {
                                        const pre = text.value.slice(0, newLineMatch.index);
                                        const post = text.value.slice(newLineMatch.index + newLineMatch[0].length);
                                        const newChildren: RootContent[] = [];
                                        const dtNodes = dtParent.children.splice(dtIdx + 1, cIdx - (dtIdx + 1));
                                        if (pre.trim()) {
                                            newChildren.push({
                                                type: 'text',
                                                value: pre
                                            });
                                        }
                                        if (post.trim()) {
                                            dtNodes.splice(0, 0, {
                                                type: 'text',
                                                value: post
                                            });
                                        };
                                        newChildren.push(getDTNode(dtNodes));
                                        dtParent.children.splice(dtIdx, 1, ...newChildren);
                                        action = 'ADD_TO_DL';
                                        return EXIT;
                                    }
                                }
                                if (dtIdx === 0) {
                                    const dtNodes = dtParent.children.splice(0, cIdx);
                                    dtParent.children.splice(0, 0, getDTNode(dtNodes));
                                    action = 'ADD_TO_DL';
                                    cIdx = 0;
                                    return EXIT;
                                }
                                return SKIP;
                            }, true);
                            return [SKIP, cIdx];
                        case 'ADD_TO_DL':
                            /** if cIdx != 0, it means the paragraph did not start with 
                             * the deflist. The current paragraph mus be splitted. */
                            if (cIdx !== 0) {
                                const pre = cParent.children.splice(0, cIdx) as PhrasingContent[];
                                parent.children.splice(idx, 0, {
                                    type: 'paragraph',
                                    children: pre
                                });
                                idx++;
                                cIdx = 0;
                            }
                            const hasDL = idx > 0
                                && parent.children[idx - 1].type === 'mdxJsxFlowElement'
                                && (parent.children[idx - 1] as MdxJsxFlowElement).name === DL;
                            const node2move = cParent.children.splice(cIdx, 1)[0] as MdxJsxFlowElement;
                            if (node2move.name === DT) {
                                action = 'COLLECT_DD_BODY';
                            } else {
                                action = 'SEEK_CONSECUTIVE_DD_START';
                            }

                            if (hasDL) {
                                const dl = parent.children[idx - 1] as MdxJsxFlowElement;
                                dl.children.push(node2move);
                            } else {
                                const dl = getDLNode([node2move]);
                                parent.children.splice(idx, 0, dl);
                                idx++;
                            }
                            if (cParent.children.length === 0) {
                                parent.children.splice(idx, 1);
                                return EXIT;
                            }
                            return [SKIP, cIdx];
                        case 'COLLECT_DD_BODY':
                            visit(cParent, (ddNode, ddIdx, ddParent: Parent) => {
                                const correctNested = ddParent && ddParent === cParent;
                                if (!correctNested || ddIdx < cIdx) {
                                    if (correctNested) {
                                        return SKIP;
                                    }
                                    return CONTINUE;
                                }
                                if (ddNode.type === 'text') {
                                    const text = ddNode as Text;
                                    const newLineMatch = text.value.match(/\r?\n/);
                                    if (newLineMatch) {
                                        const dd = text.value.slice(0, newLineMatch.index);
                                        const post = text.value.slice(newLineMatch.index + newLineMatch[0].length);
                                        text.value = dd;
                                        const ddNodes = ddParent.children.splice(cIdx, ddIdx - cIdx + 1);
                                        ddParent.children.splice(cIdx, 0, getDDNode(ddNodes));
                                        if (post.trim()) {
                                            ddParent.children.splice(cIdx + 1, 0, {
                                                type: 'text',
                                                value: post
                                            });
                                        };
                                        action = 'ADD_TO_DL';
                                        return EXIT;
                                    }
                                }
                                if (ddIdx === cParent.children.length - 1) {
                                    const ddNodes = ddParent.children.splice(cIdx, ddIdx - cIdx + 1);
                                    ddParent.children.splice(cIdx, 0, getDDNode(ddNodes));
                                    action = 'ADD_TO_DL';
                                    return EXIT;
                                }
                            });
                            return [SKIP, cIdx];
                        case 'SEEK_CONSECUTIVE_DD_START':
                            if (cNode.type === 'text') {
                                const text = cNode as unknown as Text;
                                const ddMatch = text.value.match(DD_CONSECUTIVE_REGEX);
                                if (ddMatch) {
                                    const dd = text.value.slice(ddMatch.index);
                                    cParent.children.splice(cIdx, 1, {
                                        type: 'text',
                                        value: dd.trimStart().slice(1).trimStart() // remove leading colon
                                    });
                                    action = 'COLLECT_DD_BODY';
                                    return [SKIP, cIdx];
                                }
                            }
                            action = 'SEEK_DD_START';
                            return [SKIP, cIdx];
                    }
                    return SKIP;
                });
            }
        });
    }
}

export default plugin;