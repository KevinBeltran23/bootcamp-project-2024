// FormSubmission.tsx
import React, { useState } from 'react';
import styles from '@/styles/form.module.css';

interface IFormSubmissionProps {
  onSubmit: (data: any) => void;
  fields: { label: string; name: string; type: string }[];
  buttonText: string;
  initialData?: { [key: string]: string }; // Optional prefilled data
}

const FormSubmission: React.FC<IFormSubmissionProps> = ({ onSubmit, fields, buttonText, initialData = {} }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>(initialData);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value.trim() === '')) {
      setMessage('Please fill in all fields.');
      return;
    }
    onSubmit(formData);
    setMessage('Submission successful!');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              id={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <input type="submit" value={buttonText} />
      {message && <p>{message}</p>}
    </form>
  );
};

export default FormSubmission;
