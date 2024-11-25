import React from "react";
import style from "@styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
      <h1 className={style.logo}><Link href="/" >Personal Website</Link></h1>
      <nav>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <Link href="/" >Home</Link>
        <Link href="/blogs" >Blogs</Link>
        <Link href="/portfolio" >Portfolio</Link>
        <Link href="/resume" >Resume</Link>
        <Link href="/contact" >Contact</Link>
      </nav>
    </header>
  );
}