import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ProjectIdeas from '../components/ProjectIdeas';
import ThemeToggle from '../components/ThemeToggle';
import TechShowcase from '../components/TechShowcase';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [apiMessage, setApiMessage] = useState('');
  
  useEffect(() => {
    // Fetch data from API to demonstrate frontend-backend connectivity
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(error => console.error('Error fetching API data:', error));
  }, []);

  return (
    <div>
      <Head>
        <title>Vibe-Coding Boilerplate</title>
        <meta name="description" content="A launchpad for creative projects built with Node.js and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeToggle />

      <section className={styles.hero}>
        <main>
          <h1 className={styles.title}>Vibe-Coding Boilerplate</h1>
          <p className={styles.description}>
            A launchpad for creative projects built with Node.js and Next.js
          </p>
          
          <div className={styles.panel}>
            <h2>Project Ideas:</h2>
            <ProjectIdeas />
          </div>
          
          <Link href="/build">
            <button className={styles.button}>Start Building</button>
          </Link>
          
          {apiMessage && (
            <div className={styles.apiExample}>
              <h3>API Connection Test:</h3>
              <p>{apiMessage}</p>
            </div>
          )}
        </main>
      </section>

      <section>
        <TechShowcase />
      </section>

      <footer className={styles.footer}>
        <p>Expand this boilerplate by exploring the codebase and following the prompts.</p>
      </footer>
    </div>
  );
}

// Expansion Point: Add more sections, features, or interactive elements to the landing page 