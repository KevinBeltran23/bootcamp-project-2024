import React from 'react';
import type { Portfolio } from "@/typings/portfolio.ts";
import Image from 'next/image';
import style from '@styles/portfolio.module.css';
import Link from "next/link";

export default function PortfolioEntry(props: Portfolio) {
  return (
    <div className={style.portfolioEntry}>
      <h1>{props.name}</h1>
      <div>
        <Image src={props.image} alt={props.imageAlt} width={500} height={500} />
        <p>{props.description}</p>
        <p>{props.posted}</p>
        <p>
          <Link href={props.slug}>Read More</Link>
        </p>
      </div>
    </div>
  );
}
