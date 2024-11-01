// You can name the function within page.tsx anything you want.
import style from "../components/home.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1>About Me</h1>
        <div className={style.aboutContainer}>
          <div className={style.aboutImage}>
            <img 
              height="320"
              width="256"
              src="ProfilePicture.jpg"
              alt="A profile picture of me on the beach shore. There is a pier in the background."
            />
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
      </main>
    </div>
  );
}


