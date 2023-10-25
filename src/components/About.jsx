import styles from "../styles/About.module.css";
export function About() {
  return (
    <section className={styles.about} id="about">
      <div>
        <h1>
          Hey there, <span className={styles.name}> I'm Ritesh Kumaran.</span>
        </h1>
        <p>
          Currently, I'm a first-year student at SRM Ramapuram, doing Bachelor's degree in Computer Science. My fascination with web development began
          when I crafted my very first HTML document. Since then, my journey has been marked by a relentless commitment to refining my skills and
          creating exceptional web experiences. I firmly believe that the web is a powerful canvas for transformation, and I'm dedicated to making it
          a better place, one code at a time.
        </p>
        <p>
          Beyond the realm of coding, you'll often find me on the badminton court. This sport not only keeps me physically active but also hones my
          quick reflexes and strategic thinking, skills that are transferrable to problem-solving in web development. Music is another cornerstone of
          my life; it's both a source of relaxation and a wellspring of creativity. Whether it's soothing melodies that help me focus or energetic
          tunes that keep me motivated, music is an essential part of my journey.
        </p>
      </div>
      <div>
        <img id="profilePic" src="https://avatars.githubusercontent.com/u/70448711?v=4" alt="profile pic" />
      </div>
    </section>
  );
}
