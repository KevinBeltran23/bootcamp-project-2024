// components/resumeSection.tsx
import React from 'react';
import type { Section } from "@/typings/resume";
import style from '@styles/resume.module.css';

export default function ResumeSection(props: Section) {
  return (
    <section className={style.resumeSection}>
      <h2 className={style.sectionTitle}>{props.name}</h2>
      <div>{props.children}</div>
    </section>
  );
}
