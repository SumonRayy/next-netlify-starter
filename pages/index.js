import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
const firstName = process.env.NEXT_PUBLIC_FIRST_NAME;
const lastName = process.env.NEXT_PUBLIC_LAST_NAME;
const aboutMe = process.env.NEXT_PUBLIC_ABOUT_ME;
const profilePic = process.env.NEXT_PUBLIC_PROFILE_PIC;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I am {firstName} 🙂 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={profilePic} alt="Profile Picture" className="profilePic" />
        <h1>
          Hi! Welcome to My Website... 👋🙂
        </h1>
        <p className="description">
          I am<code>{firstName} {lastName}</code>
          <br />
          {aboutMe}
        </p>
        <div>
          <button className="btn"
            onClick={() => window.open(resumeLink, "_blank")}
          >Download my resume</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
