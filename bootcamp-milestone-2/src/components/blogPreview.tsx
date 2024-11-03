import React from 'react';
import type { Blog } from "@/typings/blog.ts"
import Image from 'next/image'
import style from '@styles/blogPreview.module.css'

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3> {props.name} </h3>
      <div>
        <Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
        <p>{props.description}</p>
		  <p>{props.posted}</p>
    </div>
	</div>
  );
}
