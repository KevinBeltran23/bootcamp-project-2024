import React from 'react';
import type { Section } from "@/typings/resume.ts"
import style from '@styles/resume.module.css'

export default function resumeSection(props: Section) {
  return (
    <section className={style.resumeSection}>
      <h2 className={style.sectionTitle}> {props.name} </h2>
      {props.children}
    </section>
  );
}

