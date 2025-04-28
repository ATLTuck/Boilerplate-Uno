import styles from '../styles/TechShowcase.module.css';

const technologies = [
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine, enabling server-side logic with the same language as your frontend.",
    icon: "🟢",
    features: ["Asynchronous I/O", "Event-driven architecture", "NPM ecosystem"]
  },
  {
    title: "Next.js",
    description: "The React framework for production, providing hybrid static & server rendering, TypeScript support, and optimization.",
    icon: "⚡",
    features: ["Server-side rendering", "API routes", "File-based routing"]
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces, making it painless to create interactive UIs with component-based design.",
    icon: "⚛️",
    features: ["Component architecture", "Virtual DOM", "Declarative UI"]
  }
];

export default function TechShowcase() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Key Technologies</h2>
      <div className={styles.showcase}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{tech.icon}</span>
            </div>
            <h3 className={styles.title}>{tech.title}</h3>
            <p className={styles.description}>{tech.description}</p>
            <ul className={styles.featureList}>
              {tech.features.map((feature, i) => (
                <li key={i} className={styles.feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Expansion Point: Add more technologies or extend with customization options 