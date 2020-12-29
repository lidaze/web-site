import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Blog.module.scss";

interface BlogProps {
  data: {
    id: string;
    slug: string;
    title: string;
    description: string;
  }[];
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.count("Blog");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await fetch("/api/posts");
  //     const data = await res.json();
  //     console.log(data);
  //     if (data.status === 200) {
  //       setData(data.data);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data === null) {
    return <div>NONE</div>;
  }

  return (
    <div className={styles.container}>
      {data.map((d) => (
        <Link key={d.id} href={`/blog/${d.slug}`}>
          <article>
            <p className="title">{d.title}</p>
            <p className="desc">{d.description}</p>
          </article>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async (props) => {
  console.log(props);
  // const res = await fetch("http://localhost:3000/api/posts");
  // const data = await res.json();
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

  return {
    props: {
      data: data.data
    }
  };
};

export default memo(Blog);
