import { useState } from "react";
import styles from "../styles/Header.module.css";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = useRef(null);
  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: { duration: 0.3 }
    });

    tl.current
      .fromTo(".menu", { visibility: "hidden" }, { visibility: "visible" }, 0)
      .fromTo(".menu-item", { opacity: 0, y: "0.5em", stagger: 0.1 }, { opacity: 1, y: "0em", stagger: 0.1 });
  }, []);

  const handleMenuToggle = () => {
    if (tl.current) {
      if (!menuOpen) {
        tl.current.play();
        setMenuOpen(true);
      } else {
        tl.current.reverse();
        setMenuOpen(false);
      }
    }
  };

  const menu = [
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Skills",
      link: "#skills"
    },
    {
      name: "Events",
      link: "#events"
    },
    {
      name: "Projects",
      link: "#projects"
    }
  ];

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.profileImage}>
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/70448711?v=4" alt="profile pic" />
          </a>
        </div>

        <div className={styles.mobileMenu}>
          <button onClick={handleMenuToggle} className={styles.menuToggle}>
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav className="menu">
            {menu.map((menuItem) => (
              <a key={menuItem.name} className="menu-item" href={menuItem.link}>
                {menuItem.name}
              </a>
            ))}
          </nav>
        </div>

        <nav className={styles.desktopMenu}>
          {menu.map((menuItem) => (
            <a key={menuItem.name} href={menuItem.link}>
              {menuItem.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
