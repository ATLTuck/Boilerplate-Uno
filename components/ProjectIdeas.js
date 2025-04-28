import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const ideas = [
  "Add user authentication and profiles",
  "Integrate a database for persistent storage",
  "Implement a payment system with Stripe",
  "Create a real-time chat with Socket.io",
  "Build a RESTful API with Express",
  "Add file uploads with cloud storage",
  "Implement server-side rendering optimization"
];

export default function ProjectIdeas() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ideas.length);
    }, 5000);
    
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.ideas}>
      {ideas.map((idea, i) => (
        <p
          key={i}
          className={`${styles.idea} ${i === index ? styles.visible : ''}`}
        >
          {idea}
        </p>
      ))}
    </div>
  );
}

// Expansion Point: Add more project ideas or make this dynamic by fetching from an API 