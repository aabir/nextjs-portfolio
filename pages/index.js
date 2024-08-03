import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPortfolioStaticProps } from './api/staticProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGift, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Blog from '../components/blog';

export default function Home({ portfolio }) {
  function getIconForNetwork(network) {
    switch (network.toLowerCase()) {
      case "github":
        return faGithub;
      case "linkedin":
        return faLinkedin;
      case "gitconnected":
        return faGift;
      default:
        return null;
    }
  }

  return (
    <Layout home portfolio={portfolio}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {portfolio.basics.summary}
        </p>

        <ul className={utilStyles.socialConnect}>
          {portfolio.basics.profiles.map((profile, index) => {
            if (index === 0) return null;
            const icon = getIconForNetwork(profile.network);
            if (!icon) return null;
            return (
              <li key={index}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            );
          })}
          <li>
            <a href="mailto: shblnmn@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </section>
      <Blog />
    </Layout>
  );
}
export const getStaticProps = getPortfolioStaticProps;
