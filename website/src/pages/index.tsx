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
      description="Maqueen Plus V2-Bibliothek für Micro:Bit: Programmieren Sie den EV3 dfrobot-Roboter mit Python. Einfach & gut dokumentiert für Anfänger & Fortgeschrittene."
    >
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
              <small>
                Die Maqueen Plus V2 Bibliothek ermöglicht es, den <b>Maqueen Plus V2 </b>Roboter von <i>EV3 dfrobot </i> 
                mit dem Micro:Bit über <b>Python </b>zu programmieren. Sie bietet Funktionen zur Steuerung der 
                Motoren, Sensoren und LEDs. Die Bibliothek ist benutzerfreundlich und gut dokumentiert, 
                was sowohl Anfängern als auch Fortgeschrittenen schnelle Erfolge und flexible 
                Steuerungsmöglichkeiten bietet.
              </small>
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
