// pages/blog.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchPosts } from './api/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    const getPosts = async () => {
      const { posts, totalPages } = await fetchPosts(currentPage, postsPerPage);
      setPosts(posts);
      setTotalPages(totalPages);
    };

    getPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`${post.id}`}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
