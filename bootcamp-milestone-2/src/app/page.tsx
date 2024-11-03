// You can name the function within page.tsx anything you want.
import style from "@styles/home.module.css";
import Image from 'next/image'; 
import BlogPreview from '@/components/blogPreview';
import blogs from '@/static/blogData';

export default function Home() {
  return (
    <div>
      <main>
        <h1>About Me</h1>
        <div className={style.aboutContainer}>
          <div className={style.aboutImage}>
            <Image src="/../../public/ProfilePicture.jpg" alt="Kevins image" width={500} height={500} ></Image>
          </div>
          <div className="about-text">
            <p>
              I am a third year <strong>Computer Science</strong> student also pursuing a minor in <strong>Mathematics</strong>. I am from <em>Santa Maria, CA</em> and currently studying at <em>Cal Poly SLO</em>.
            </p>
            <p>
              I love running in my free time, playing the piano, and going on evening hikes. I am involved in the <em>Cal Poly Distance Club</em> as well as the <em>Mustang Marching Band</em>. I also enjoy baking and playing board games.
            </p>
          </div>
        </div>
        <div className={style.aboutContainer}>
          {blogs.map(blog => 
            <BlogPreview {...blog} />
          )}
        </div>
      </main>
    </div>
  );
}


