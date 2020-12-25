import React from "react";
import styles from "../../styles/Blog.module.scss";
interface BlogProps {
  slug: string;
}

const Blog: React.FC<BlogProps> = ({ slug }) => {
  return (
    <div className={styles.container}>
      <h2>Title</h2>
      <p>{slug}</p>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params.slug
    }
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [2].map((item) => `/blog/${item}`),
    fallback: true
  };
};

export default Blog;
