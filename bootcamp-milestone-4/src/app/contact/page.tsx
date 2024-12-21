'use client';

import React, { useState } from 'react';
import style from '@styles/contact.module.css';
import FormSubmission from '@/components/formSubmission'; 
import emailjs from 'emailjs-com';  

export default function Contact() {

  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);  
  const [success, setSuccess] = useState<string | null>(null); 

  const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
    setError(null); 
    setSuccess(null);

    emailjs.init('GYUI5AISakmtsV-dw');

    const emailData = {
      from_name: formData.name,  
      from_email: formData.email, 
      message: formData.message,  
    };

    // EmailJS service call
    try {
      const response = await emailjs.send(
        'service_dv5tb26', 
        'template_j2ota24',  
        emailData,
      );
      console.log('Email sent successfully:', response);
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });  

    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Oops! Something went wrong. Please try again later.');
    }
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

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </main>
    </div>
  );
}
