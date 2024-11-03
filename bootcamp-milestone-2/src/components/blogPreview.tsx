import React from 'react';
import type { Blog } from "@/static/blogData"
import Image from 'next/image'
import style from './blogPreview.module.css'

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
