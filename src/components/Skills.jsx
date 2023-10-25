import styles from "../styles/Skills.module.css";

export function Skills() {
  const skillsArray = ["HTML", "CSS", "JavaScript", "React", "Python", "C", "C++", "DSA"];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.title}>
        <h1>Skills</h1>
      </div>
      <p>
        I constantly learn new and exciting concepts in computer science and web development. I try applying these concepts to solve real-world
        problems. A few technologies I enjoy working with:
      </p>
      <ul className={styles.skillsList}>
        {skillsArray.map((skill, index) => (
          <li key={index} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
