'use client'

import React, {useEffect, useState} from 'react';
import { useParams } from 'next/navigation'; 
import type Blog from "@/database/blogSchema.ts";
import style from '@styles/blog.module.css'
import BlogPreview from '@/components/blogPreview';


export default function BlogPage() {
    const params = useParams(); 
    const { slug } = params; 
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {        
        if (!slug) return; 

        fetch(`/api/blogs/${slug}`)
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
            setBlog(data); 
            console.log('Fetched Blog:', data); 
            setLoading(false); 
          })
          .catch(err => {
            setError(err.message); 
            console.error('Fetch error:', err.message); 
            setLoading(false); 
          });
      }, [slug]);
      
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
            {blog ? (<BlogPreview {...blog} />) : (<p>No blog found</p>)}
          </div>

          {/* Comments Section */}
          {blog?.comments && blog.comments.length > 0 ? (
            <div className={style.commentsSection}>
              <h2>Comments:</h2>
              {blog.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}