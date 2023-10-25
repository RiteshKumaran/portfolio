import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/AnimatedSection.module.css";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection() {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {
    const imagesToMonitor = [document.getElementById("heroImage"), document.getElementById("profilePic")];
    let loadedImages = new Set();

    const handleImagesLoaded = () => {
      const rect1 = imagesToMonitor[0].getBoundingClientRect();
      const rect2 = imagesToMonitor[1].getBoundingClientRect();

      const deltaX = rect2.left + rect2.width / 2 - (rect1.left + rect1.width / 2);
      const deltaY = rect2.top + rect2.height / 2 - (rect1.top + rect1.height / 2);

      setSize({
        width: imagesToMonitor[1].clientWidth,
        height: imagesToMonitor[1].clientHeight
      });

      gsap.to("#heroImage", {
        x: deltaX,
        y: deltaY,
        scrollTrigger: {
          trigger: "#animatedSection",
          start: "top top", // When the top of the trigger hits the top of the viewport
          end: "bottom top", // When the bottom of the trigger hits the top of the viewport
          scrub: true
        }
      });
    };

    const handleImageLoad = (event) => {
      loadedImages.add(event.target);
      if (imagesToMonitor.every((img) => loadedImages.has(img))) {
        handleImagesLoaded();
      }
    };

    imagesToMonitor.forEach((img) => img.addEventListener("load", handleImageLoad));

    return () => {
      imagesToMonitor.forEach((img) => img.removeEventListener("load", handleImageLoad));
    };
  }, []);

  return (
    <section className={styles.animatedSection}>
      <div className={styles.animatedSectionContent} id="animatedSection">
        <img
          id="heroImage"
          style={{
            height: size.height,
            width: size.width
          }}
          src="https://avatars.githubusercontent.com/u/70448711?v=4"
          alt="profile pic"
        />
        <h1 className={styles.title}>
          Hey there! <span className={styles.scrollDown}>I'm Ritesh Kumaran.</span>
        </h1>
        <p>
          Welcome to my digital realm! I'm a passionate web developer driven by creativity and innovation. My journey into the world of web
          development has been a thrilling adventure, and I'm excited to share my experiences and creations with you.
        </p>
      </div>
    </section>
  );
}
