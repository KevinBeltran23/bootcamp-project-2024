import style from "@styles/resume.module.css";
import Link from "next/link";
import React from 'react';
import Section from '@components/resumeSection';
import Entry from '@components/resumeEntry';
import resumeData from "@static/resumeData";

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className={style.resumeTitle}>Resume</h1>
        <Link href="KevinBeltran_Resume.pdf" download className={style.downloadButton}>
          Download Resume
        </Link>
        <div className={style.resume}>
          {resumeData.sections.map((section, index) => (
            <Section key={index} name={section.name}>
              {Array.isArray(section.children) && section.children.length > 0 ? (
                section.children.map((entry, entryIndex) => (
                  <Entry 
                    key={entryIndex}
                    name={entry.name}
                    info={entry.info}
                    description={entry.description}
                    type={entry.type}
                  />
                ))
              ) : (
                <p>No entries available</p> // Fallback if there are no entries
              )}
            </Section>
          ))}
        </div>
      </main>
    </div>
  );
}
