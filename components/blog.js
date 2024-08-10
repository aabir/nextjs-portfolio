// components/Blog.js
import React, { useState, useEffect } from 'react';
import { getPosts } from '../pages/api/api';
import utilStyles from '../styles/utils.module.css';
import { BLOG_URL } from './Constants';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const transformLink = (originalLink) => {
    const url = new URL(originalLink);
    const pathParts = url.pathname.split('/').filter(Boolean);
    const blogTitle = pathParts[pathParts.length - 1];
    return `${BLOG_URL}posts/${blogTitle}`;
  };

  return (
    <section>
      <h2>Development Notes</h2>
      <hr />
      {posts.map((post) => (
        <h3 key={post.id} className={utilStyles.blogTitle}>
          <a href={transformLink(post.link)} target='_blank'>{post.title.rendered}</a>
          <span className={utilStyles.blogDate}>
            {new Date(post.date).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </h3>
      ))}

      <div style={{ textAlign: 'center', color: '#b2bac2' }}>
        <a href={BLOG_URL} target='_blank'>More posts</a>
      </div>
    </section>
  );
};

export default Blog;
