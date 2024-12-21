import React from 'react';
import type { Entry } from "@/typings/resume";
import style from '@styles/resume.module.css';

export default function ResumeEntry(props: Entry) {
  const descriptionClass =
    props.type === "coursework" || props.type === "skill"
      ? style.entryDescriptionWithBullet
      : style.entryDescriptionWithoutBullet;

  return (
    <div className={style.resumeSection}>
      <h3 className={style.entryTitle}>{props.name}</h3>
      <p className={style.entryInfo}><em>{props.info}</em></p>
      <div className={descriptionClass}>
        <ul>
          {(props.description || []).map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
