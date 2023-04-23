import React, { useState, useEffect } from 'react';
import { getPortfolioStaticProps } from './api/staticProps';
import Date from '../components/date'
import styles from '../components/layout.module.css'
import Layout, { siteTitle } from '../components/layout'

const Cv = ({ portfolio }) => {

  function formatSummary(summary) {
    return summary.replace(/\n/g, '\n - ');
  }

  return (
    <div className={styles.container}>
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
