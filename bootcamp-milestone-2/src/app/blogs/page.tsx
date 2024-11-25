'use client'

import React, {useEffect, useState} from 'react';
import blogs from '@/static/blogData';
import style from '@styles/blog.module.css'
import BlogPreview from '@/components/blogPreview';

export default function Blogs() {
  //const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // State to hold any error messages
  const [blogsJson, setBlogsJson] = useState<string | null>(null); // State to hold the JSON string

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        //setBlogs(data); // Set the blogs data
        console.log('Fetched Blogs:', data); // Log the fetched data
        setBlogsJson(JSON.stringify(data, null, 2)); // Convert data to JSON string and set it to state
        setLoading(false); // Set loading to false when done
      })
      .catch(err => {
        setError(err.message); // Handle any errors
        console.error('Fetch error:', err.message); // Log the error message
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>; // Loading state
  if (error) return <p>Error loading blogs: {error}</p>; // Error handling
  
  return (
    <div>
      <main>
        <h1 className={style.blogTitle}>Blog</h1>
        <div id={style.blogContainer} className={style.blogContainer}>
          <pre>{blogsJson}</pre>
          <p> Welcome to My Blog! This is a work in progress :) </p>

          <div>
          {blogs.map((blog, index) => 
            <BlogPreview key={index} {...blog} />
          )}
          </div>

        </div>
      </main>
    </div>
  );
}



