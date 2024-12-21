import React from 'react';
//import type { Blog } from "@/typings/blog.ts";
import type Blog from "@/database/blogSchema.ts";
import Image from 'next/image';
import style from '@styles/blog.module.css';
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  console.log(props);

  // Convert string to date and make sure it's valid
  const dateObject = new Date(props.date);

  const formattedDate = !isNaN(dateObject.getTime()) 
    ? dateObject.toLocaleDateString()
    : "Date not available"; 
  
  return (
    <div className={style.blogPost}>
      <h1>{props.title}</h1>
      <div>
        <p>{props.description}</p>
        <p>{formattedDate}</p>
        <p>
          <Link href={`/blogs/${props.slug}`}>Read More</Link>
        </p>
      </div>
    </div>
  );
}
