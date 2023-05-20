import React, { useState, useEffect } from 'react'
import { getPortfolioStaticProps } from './api/staticProps'
import Date from '../components/date'
import styles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

const Cv = ({ portfolio }) => {

  function formatSummary(summary) {
    return summary.replace(/\n/g, '\n');
  }

  return (
    <div className={styles.container}>
      <head>
        <title>Shible Noman's CV</title>
      </head>
      <h2>
        <Link href="/">SNA</Link>
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
        <div className='headerName'>{portfolio.basics.name}</div>
        <div className='headerPosition'>{portfolio.basics.label}</div>
      </div>
      <h4>Work Experience</h4>
        <ul>
          {portfolio.work.map((job, index) => (
            <li key={index}>
              <div className={`${styles.column} ${styles.left}`}>
                <p><Date dateString={job.startDate} /> - <Date dateString={job.endDate || 'Present'} /></p>
              </div>

              <div className={styles.column}>
                <p>{job.position} <a href={job.url} target='_blank'>{job.company}</a> </p>
                <p className={styles.summary}>{formatSummary(job.summary)}</p>
              </div>

            </li>
          ))}
        </ul>      
    </div>
  );
};

export default Cv;

export const getStaticProps = getPortfolioStaticProps;
