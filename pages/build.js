import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import styles from '../styles/Home.module.css';

export default function Build() {
  return (
    <div className={styles.hero}>
      <Head>
        <title>Your Project Begins Here | Vibe-Coding Boilerplate</title>
        <meta name="description" content="Start building your project with the Vibe-Coding Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeToggle />

      <main>
        <h1 className={styles.title}>Your Project Begins Here</h1>
        
        <div className={styles.panel}>
          <p className={styles.description}>
            Start by editing <code>pages/build.js</code> or explore the <code>/prompts</code> folder for ideas.
          </p>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <Link href="/">
            <button className={styles.button} style={{ background: 'var(--accent-hover)' }}>
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

// Expansion Point: Transform this into a dashboard or project configuration page 