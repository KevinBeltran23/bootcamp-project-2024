'use client'

import React, {useEffect, useState} from 'react';
import type Portfolio from "@/database/portfolioSchema.ts";
import style from '@styles/portfolio.module.css'
import PortfolioPreview from '@/components/portfolioPreview';

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState<Portfolio[] | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // State to hold any error messages
  const [portfoliosJson, setPortfoliosJson] = useState<string | null>(null); // State to hold the JSON string

  useEffect(() => {
    fetch('/api/portfolios')
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No items found in the database');
          } else {
            throw new Error('Network response was not ok');
          }
        }
        return response.json();
      })
      .then(data => {
        setPortfolios(data); // Set the portfolios data
        console.log('Fetched Portfolios:', data); // Log the fetched data
        setPortfoliosJson(JSON.stringify(data, null, 2)); // Convert data to JSON string and set it to state
        setLoading(false); // Set loading to false when done
      })
      .catch(err => {
        setError(err.message); // Handle any errors
        console.error('Fetch error:', err.message); // Log the error message
      });
  }, []);

  if (error) return (
    <div>
      <main>
        <h1 className={style.portfolioTitle}>Portfolio</h1>
        <div id={style.portfolioContainer} className={style.portfolioContainer}>
          <p>Error Loading Portfolio: {error}</p>
        </div>
      </main>
    </div>
  );
  
  if (loading) return (
    <div>
      <main>
        <h1 className={style.portfolioTitle}>Portfolio</h1>
        <div id={style.portfolioContainer} className={style.portfolioContainer}>
          <p>Loading :)</p>
        </div>
      </main>
    </div>
  );
  
  return (
    <div>
      <main>
        <h1 className={style.portfolioTitle}>Portfolio</h1>
        <div id={style.portfolioContainer} className={style.portfolioContainer}>
          <p>Welcome to My Portfolio! This is a work in progress :)</p>
          <p> It currently only contains my blogs but later I will add my projects </p>

          <div>
            {portfolios && portfolios.length > 0 ? (
              portfolios.map((item, index) => (
                <PortfolioPreview key={index} {...item} />
              ))
            ) : (
              <p>No portfolio items available.</p> 
            )}
          </div>
        </div>
      </main>
    </div>
  );
}






