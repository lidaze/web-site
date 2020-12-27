import React, { useState, useEffect } from "react";
import styles from "../../styles/Blog.module.scss";
interface BlogProps {
  slug: string;
}

const Blog: React.FC<BlogProps> = ({ slug }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.count("Blog");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`/api/detail?slug=${slug}`);
      const data = await res.json();
      console.log(data);
      if (data.status === 200) {
        setData(data.data);
      }
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return "Loading...";
  }

  if (data === null) {
    return "NONE";
  }

  return (
    <div className={styles.container}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
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
