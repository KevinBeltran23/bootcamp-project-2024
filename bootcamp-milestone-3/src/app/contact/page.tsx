"use client"; 

import React, { useState } from 'react';
import style from '@styles/contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log('Name:', event.target.value); // Log the current input value
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log('Email:', event.target.value); // Log the current input value
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    console.log('Message:', event.target.value); // Log the current input value
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form submitted:', { name, email, message });
    event.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <main>
        <h1 className={style.contactTitle}>Contact</h1>
        <p className={style.contactParagraph}>kevinbeltran2437@gmail.com | 805-416-9229</p>
        <form className={style.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
