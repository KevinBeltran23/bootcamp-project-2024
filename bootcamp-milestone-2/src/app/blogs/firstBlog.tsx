import React from 'react';
import style from '@styles/blog.module.css'

export default function FirstBlog() {
  return (
    <div>
      <main>
      <h1>My First Blog</h1>
      <h3>10/21/2024</h3>
        <div className={style.blogContainer}>
            <div className={style.blogImage}>
            {/*image here*/}
            </div>
            <div className={style.blogText}>
            <p>
                I am a third year 
                <strong>Computer Science</strong> student also pursuing a minor in 
                <strong>Mathematics</strong>. I am from 
                <em>Santa Maria, CA</em> and currently studying at 
                <em>Cal Poly SLO</em>.
            </p>
            <p>
                I love running in my free time, playing the piano, and going on evening hikes. I am involved in the 
                <em>Cal Poly Distance Club</em> as well as the 
                <em>Mustang Marching Band</em>. I also enjoy baking and playing board games. 
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}



