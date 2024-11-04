import React from 'react';
import style from '@styles/contact.module.css';

export default function Contact() {
  return (
    <div>
      <main>
        <h1 className={style.contactTitle}>Contact</h1>
        <p className={style.contactParagraph}>kevinbeltran2437@gmail.com | 805-416-9229</p>
        <form className={style.contactForm}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" placeholder="Name" />
          
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" placeholder="Email" />
          
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" placeholder="Your message here"></textarea>
          
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
