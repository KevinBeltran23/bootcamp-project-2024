'use client'

import React, {useEffect, useState} from 'react';
import type Blog from "@/database/blogSchema.ts";
import style from '@styles/blog.module.css'
import BlogPreview from '@/components/blogPreview';

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // State to hold any error messages
  const [blogsJson, setBlogsJson] = useState<string | null>(null); // State to hold the JSON string

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No blogs found in the database');
          } else {
            throw new Error('Network response was not ok');
          }
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data); // Set the blogs data
        console.log('Fetched Blogs:', data); // Log the fetched data
        setBlogsJson(JSON.stringify(data, null, 2)); // Convert data to JSON string and set it to state
        setLoading(false); // Set loading to false when done
      })
      .catch(err => {
        setError(err.message); // Handle any errors
        console.error('Fetch error:', err.message); // Log the error message
        setLoading(false); // Set loading to false when done
      });
  }, []);
  
  if (error) return (
    <div>
      <main>
        <h1 className={style.blogTitle}>Blog</h1>
        <div id={style.blogContainer} className={style.blogContainer}>
          <p>Error Loading Blogs: {error}</p>
        </div>
      </main>
    </div>
  );

  if (loading) return (
    <div>
      <main>
        <h1 className={style.blogTitle}>Blog</h1>
        <div id={style.blogContainer} className={style.blogContainer}>
          <p>Loading :)</p>
        </div>
      </main>
    </div>
  );
  
  return (
    <div>
      <main>
        <h1 className={style.blogTitle}>Blog</h1>
        <div id={style.blogContainer} className={style.blogContainer}>
          <p>Welcome to My Blog! This is a work in progress :)</p>

          <div>
            {blogs && blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogPreview key={index} {...blog} />
              ))
            ) : (
              <p>No blogs available.</p> 
            )}
          </div>
        </div>
      </main>
    </div>
  );
}



