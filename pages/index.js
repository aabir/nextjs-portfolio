import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getPortfolioStaticProps } from './api/staticProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGift } from '@fortawesome/free-solid-svg-icons'

export default function Home({portfolio}) {

  function getIconForNetwork(network) {
    switch (network.toLowerCase()) {
      case "GitHub":
        return faGithub;
      case "LinkedIn":
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
            if(index === 0 ) return null;
            const icon = getIconForNetwork(profile.network);
            return (
              <li key={index}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  {icon && <FontAwesomeIcon icon={icon} />} {profile.network}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <FontAwesomeIcon icon={faLinkedin} />
      <Link href="/cv"> CV </Link>
    </Layout>
  )
}

export const getStaticProps = getPortfolioStaticProps;
