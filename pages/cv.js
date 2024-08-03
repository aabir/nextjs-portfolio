import React, { useState, useEffect } from 'react'
import { getPortfolioStaticProps } from './api/staticProps'
import Date from '../components/date'
import styles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '../components/footer'

const Cv = ({ portfolio }) => {

  function formatSummary(summary) {
    return summary.replace(/\n/g, '\n');
  }

  return (
    <div className={utilStyles.wrapper}>
      <div className={styles.container}>
        <Head>
          <title>Shible Noman's CV</title>
        </Head>
        <h2 className={utilStyles.blogTitle}>
          <Link href="/">←SNA</Link>
        </h2>
        <div className='avater'>
          <Image
                priority
                src={portfolio?.basics?.image || "/images/profile.jpg"}
                className={utilStyles.borderCircle}
                height={75}
                width={75}
                alt={portfolio.basics.name}
          /> 
          <div className='headerInfo'>
            <div className={utilStyles.headerName}>{portfolio.basics.name}</div>
            <div className={utilStyles.headerPosition}>{portfolio.basics.label}</div>
          </div>
        </div>

        <h4 className='headerExp'>Work Experience</h4>
          <ul>
            {portfolio.work.map((job, index) => (
              <li key={index}>

                <div className={styles.column}>
                  <p>
                    {job.position} <a href={job.url} target='_blank'>{job.company}</a> <span className={styles.timeline}><Date dateString={job.startDate} /> - <Date dateString={job.endDate || 'Present'} /></span> 
                  </p>

                  <p className={styles.summary}>{formatSummary(job.summary)}</p>

                </div>


              </li>
            ))}
          </ul>    
      </div>
      <Footer />  
    </div>
  );
};


export default Cv;

export const getStaticProps = getPortfolioStaticProps;
