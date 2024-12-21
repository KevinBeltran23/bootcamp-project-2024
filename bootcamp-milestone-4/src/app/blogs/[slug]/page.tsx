'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import type Blog from "@/database/blogSchema.ts";
import style from '@styles/blog.module.css'; // Ensure the styling is applied here
import BlogPreview from '@/components/blogPreview';
import Comment from '@/components/Comment';
import FormSubmission from '@/components/formSubmission';

export default function BlogPage() {
  const params = useParams(); 
  const { slug } = params; 
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the blog post on initial render
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
        setLoading(false); 
      })
      .catch(err => {
        setError(err.message); 
        console.error('Fetch error:', err.message); 
        setLoading(false); 
      });
  }, [slug]);

  const handleCommentSubmit = async (formData: { user: string; comment: string }) => {
    const newComment = { user: formData.user, comment: formData.comment };

    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
      });

      const data = await response.json();

      if (response.ok) {
        setBlog((prevBlog) => ({
          ...prevBlog!,
          comments: [...prevBlog!.comments, data.comments[data.comments.length - 1]],
        }));
      } else {
        console.error('Error submitting comment:', data.error);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

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
          <div className={style.blogPost}>
            <h1 className={style.commentsTitle}>Comments</h1>
            {blog?.comments && blog.comments.length > 0 ? (
              <div className={style.commentsList}>
                {blog.comments.map((comment, index) => (
                  <div key={index} className={style.comment}>
                    <Comment comment={comment} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          <div className={style.blogPost}>
            {/* Add 'Leave a Comment' header */}
            <h1 className={style.leaveCommentTitle}>Leave a Comment</h1>

            {/* FormSubmission with styles */}
            <FormSubmission
              onSubmit={handleCommentSubmit}
              buttonText="Submit Comment"
              fields={[
                { label: 'Your Name', name: 'user', type: 'text' },
                { label: 'Your Comment', name: 'comment', type: 'textarea' },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
