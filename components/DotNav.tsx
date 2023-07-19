// components/DotNav.tsx

import Link from 'next/link';
import styles from '../styles/DotNav.module.css';

const DotNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="#hero">
            <span>
              <span className={`${styles.dot} active`}>
                <span>Home</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span>
              <span className={styles.dot}>
                <span>About</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#experience">
            <span>
              <span className={styles.dot}>
                <span>Experience</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <span>
              <span className={styles.dot}>
                <span>Skills</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <span>
              <span className={styles.dot}>
                <span>Projects</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span>
              <span className={styles.dot}>
                <span>Contact</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="#resume">
            <span>
              <span className={styles.dot}>
                <span>Resume</span>
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DotNav;