import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

const routers = [
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" }
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
          <span key={to} className={to === route ? styles.active : ""}>
            <Link href={to}>{label}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
