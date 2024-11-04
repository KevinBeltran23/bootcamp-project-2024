import React from 'react';
import type { Blog } from "@/typings/blog.ts";
import Image from 'next/image';
import style from '@styles/blogPreview.module.css';
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPost}>
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
