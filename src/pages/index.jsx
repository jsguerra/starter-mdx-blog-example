import { useState } from "react";
import Link from "next/link";
import { getPosts } from "../utils/utils";
import Meta from "../components/Meta";
import MeetMe from "../components/MeetMe";
import styles from "../styles/Home.module.css";
import PostItem from "../components/PostItem";

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <>
      <Meta />
      <MeetMe />
      <Link href="/about">
        <a>More about me</a>
      </Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {filteredPosts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
        <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};
