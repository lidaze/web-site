import React, { useState, useEffect } from "react";
import styles from "../../styles/Blog.module.scss";
interface BlogProps {
  slug?: string;
  data: { title: string; body: string };
}

const Blog: React.FC<BlogProps> = ({ data = {} }) => {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.count("Blog");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await fetch(`/api/detail?slug=${slug}`);
  //     const data = await res.json();
  //     console.log(data);
  //     if (data.status === 200) {
  //       setData(data.data);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data === null) {
    return <div>NONE</div>;
  }

  return (
    <div className={styles.container}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const userKey = "joyful";
  const postKey = "tdnx2e";
  const token = "aPLzrTRapohImKwomnZ30FDuZX1KGoMeA6fSZwF7";

  const domainStr = "https://www.yuque.com/api/v2";
  const url = `${domainStr}/repos/${userKey}/${postKey}/docs/${slug}`;
  const res = await fetch(url, {
    headers: {
      "X-Auth-Token": token
    }
  });
  const resJson = await res.json();

  return {
    props: {
      ...resJson
    }
  };
};

export const getStaticPaths = async () => {
  const userKey = "joyful";
  const postKey = "tdnx2e";
  const token = "aPLzrTRapohImKwomnZ30FDuZX1KGoMeA6fSZwF7";

  const domainStr = "https://www.yuque.com/api/v2";
  const url = `${domainStr}/repos/${userKey}/${postKey}/docs`;
  const res = await fetch(url, {
    headers: {
      "X-Auth-Token": token
    }
  });
  const data = await res.json();
  const slugs = data.data.map((item) => item.slug);

  return {
    paths: slugs.map((item) => `/blog/${item}`),
    fallback: true
  };
};

export default Blog;
