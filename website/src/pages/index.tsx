import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Micropython library for micro:bit and the Maqueen Plus v2">
      <HomepageHeader />
      <main>
        <div className={clsx('feature-container')}>
          <div className="card">
            <div className="card__image">
              <img 
                src={require('./images/maqueen-plus-v2.jpg').default}
                alt="Maqueen Plus v2"
              />
            </div>
            <div className='card__body'>
              <h4>Micropython: Micro:Bit + Maqueen Plus V2</h4>
            </div>
            <div className="card__footer">
              <Link 
                className="button button--primary button--block"
                href='/docs'
              >
                Docs
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
