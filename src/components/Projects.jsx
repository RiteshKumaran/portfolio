import styles from "../styles/Project.module.css";
import { Grids } from "./Grids";

export function Projects() {
  const projects = [
    {
      title: "Crypto coin tracker",
      tag: "React",
      image: "/crypto.jpeg",
      link: "https://github.com/RiteshKumaran/crypto"
    },
    {
      title: "Mario Club",
      tag: "HTML",
      image: "/mario.png",
      link: "https://github.com/RiteshKumaran/mario-club"
    }
  ];
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <p>
        I do projects as a way to not only deepen my expertise but also to bring my ideas to life, fostering innovation and making a valuable
        difference in the tech realm.
      </p>
      <Grids grids={projects} />
    </section>
  );
}
