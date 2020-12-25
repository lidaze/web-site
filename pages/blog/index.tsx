import React, { memo } from "react";
import Link from "next/link";
import styles from "../../styles/Blog.module.scss";

const slugs = [];
Array(100)
  .fill(1)
  .forEach((item, index) => {
    slugs.push(index + 1);
  });
console.log(slugs);

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  console.count("Blog");

  return (
    <div className={styles.container}>
      {slugs.map((s) => (
        <Link key={s} href={`/blog/${s}`}>
          <p>{s}</p>
        </Link>
      ))}
    </div>
  );
};

export default memo(Blog);
