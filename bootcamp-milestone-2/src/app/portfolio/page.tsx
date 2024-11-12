import React from 'react';
import portfolioEntries from '@/static/portfolioData';
import style from '@styles/portfolio.module.css'
import PortfolioEntry from '@/components/portfolioEntry';

export default function Portfolio() {
  return (
    <div>
      <main>
        <h1 className={style.portfolioTitle}>Portfolio</h1>
        <div id={style.portfolioContainer} className={style.portfolioContainer}>
          <p> Welcome to My Portfolio! This is a work in progress :) </p>
          <p> It currently only contains my blogs but later I will add my projects </p>

          <div>
          {portfolioEntries.map((portfolio, index) => 
            <PortfolioEntry key={index} {...portfolio} />
          )}
          </div>

        </div>
      </main>
    </div>
  );
}



