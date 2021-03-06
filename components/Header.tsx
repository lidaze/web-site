import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

const routers = [
  { to: "/home", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/articles", label: "Articles" },
  { to: "/about", label: "About Me" }
];

interface HeaderProps {}

const Blog: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const { route } = router;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">JOYFUL</Link>
      </div>
      <div className={styles.menu}>
        {routers.map(({ to, label }) => (
          <Link href={to}>
            <span key={to} className={to === route ? styles.active : ""}>
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
