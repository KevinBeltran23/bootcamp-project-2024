import React from 'react';
import type Portfolio from '@/database/portfolioSchema';
import Image from 'next/image';
import style from '@styles/portfolio.module.css';
import Link from "next/link";

export default function PortfolioPreview(props: Portfolio) {
  console.log(props); 

  // convert string to date and make sure its valid
  const dateObject = new Date(props.date);

  const formattedDate = !isNaN(dateObject.getTime()) 
    ? dateObject.toLocaleDateString()
    : "Date not available"; 
  
  return (
    <div className={style.portfolioPreview}>
      <h1>{props.title}</h1>
      <div>

      <Image src={props.image || "/genericImage.png"} alt={props.imageAlt} width={500} height={500} />
        <p>{props.description}</p>
        <p>{formattedDate}</p>
        <p>
          <Link href={props.slug}>Read More</Link>
        </p>
      </div>
    </div>
  );
}
