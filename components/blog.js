// components/Blog.js
import React, { useState, useEffect } from 'react';
import { getPosts } from '../pages/api/api';
import utilStyles from '../styles/utils.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section>
      <h2>Learning Notes</h2>
      <hr />
      {posts.map((post) => (
        <h3 key={post.id} className={utilStyles.blogTitle}>
          <a href={post.link} target='_blank'>{post.title.rendered}</a>
          <span className={utilStyles.blogDate}>
              {new Date(post.date).toLocaleString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
        </h3>
      ))}

      <div style={{textAlign: 'center', color: '#b2bac2'}}>
        <a href='https://shiblenoman.com/blog/' target='_blank'>More posts</a>
      </div>
    </section>
  );
};

export default Blog;