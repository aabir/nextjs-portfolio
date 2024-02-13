import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getPortfolioStaticProps } from './api/staticProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import brand icons from free-brands-svg-icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Keep faGift from free-solid-svg-icons for non-brand icons
import { faGift } from '@fortawesome/free-solid-svg-icons';

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
        <ul className="socialConnect">
          {portfolio.basics.profiles.map((profile, index) => {
            if (index === 0) return null; // Assuming you want to skip the first profile for some reason
            const icon = getIconForNetwork(profile.network);
            return (
              <li key={index}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  {icon && <FontAwesomeIcon icon={icon} />} <span className="sr-only">{profile.network}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <Link href="/cv"> CV </Link>
    </Layout>
  )
}

export const getStaticProps = getPortfolioStaticProps;
