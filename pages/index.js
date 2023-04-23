import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getPortfolioStaticProps } from './api/staticProps'

export default function Home({portfolio}) {
  return (
    <Layout home portfolio={portfolio}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
         {portfolio.basics.summary}
        </p>
        <ul className='socialConnect'>
        {portfolio.basics.profiles.map((profile, index) => (
          <li key={index}>{profile.network}</li>
        ))}
        </ul>
      </section>
      <Link href="/cv"> CV </Link>
    </Layout>

  )
}

export const getStaticProps = getPortfolioStaticProps;
