'use client';

import React, { useState } from 'react';
import style from '@styles/contact.module.css';
import FormSubmission from '@/components/formSubmission'; 

export default function Contact() {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (formData: { name: string; email: string; message: string }) => {
    console.log('Form submitted:', formData);
    // api call will go here
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div>
      <main>
        <h1 className={style.contactTitle}>Contact</h1>
        <p className={style.contactParagraph}>kevinbeltran2437@gmail.com | 805-416-9229</p>

        <div className={style.contactForm}>
          <h1>Reach out to me here!</h1>

          <FormSubmission
          onSubmit={handleSubmit} 
          buttonText="Submit" 
          fields={[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Message', name: 'message', type: 'textarea' },
          ]}
          initialData={formData} 
          />

        </div>
      </main>
    </div>
  );
}
