import React from 'react';
import blogs from '@/static/blogData';
import style from '@styles/blog.module.css'
import BlogPreview from '@/components/blogPreview';

export default function Blogs() {
  return (
    <div>
      <main>
        <h1 className={style.blogTitle}>Blog</h1>
        <div id={style.blogContainer} className={style.blogContainer}>
          <p> Welcome to My Blog! This is a work in progress :) </p>

          <div>
          {blogs.map(blog => 
            <BlogPreview {...blog} />
          )}
          </div>

        </div>
      </main>
    </div>
  );
}



