import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
<Image
  src="/images/profile-picture.jpg"
  alt="Henry Edilio Ramirez Chevalier"
  width={250}
  height={250}
  className={styles.profilePicture}
/>


        <h1>Hi! I&apos;m Henry</h1>
        <p className={styles.tagline}>Full-Stack Developer • Problem Solver</p>
      </section>

      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          I&apos;m <strong>Henry Edilio Ramirez Chevalier</strong>, a full-stack
          developer passionate about building modern web, desktop, and backend
          applications. I focus on <strong>clean architecture</strong>,{" "}
          <strong>efficient systems</strong>, and{" "}
          <strong>practical solutions</strong>.
        </p>
        <p>Based in the Dominican Republic.</p>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> TypeScript, React, Next.js
          </li>
          <li>
            <strong>Backend:</strong> TypeScript, Microservices, REST APIs,
            RabbitMQ, Apache Kafka, Python, Firebase (cloud functions and
            serverless functions), supabase and platforms that supporurt
            serverless functions like vercel.
          </li>
          <li>
            <strong>Databases:</strong> SQL, PostgreSQL
          </li>
          <li>
            <strong>ORMs:</strong> Sequelize, Prisma
          </li>
          <li>
            <strong>Desktop Apps:</strong> Electron
          </li>
          <li>
            <strong>Deployment & Automation:</strong> Docker, Podman, CI/CD,
            jest, n8n
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Discord Clone</strong> — Web app built with Next.js and
            TypeScript, using Express.js, Prisma ORM, PostgreSQL, all deployed
            with Docker
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Get in Touch</h2>
        <p>
          <a href="https://www.linkedin.com/in/henryeramirezc/">LinkedIn</a>
          <br />
          <a href="https://github.com/risatesole">GitHub</a>
          <br />
          <a href="mailto:henry@edilio.dev">Email</a>
        </p>
      </section>

      <footer className={styles.footer}>
        “I build practical solutions by combining modern tools with clean
        architecture.”
      </footer>
    </main>
  );
}
