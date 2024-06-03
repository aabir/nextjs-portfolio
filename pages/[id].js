// pages/blog/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchPost } from './api/api';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const post = await fetchPost(id);
        setPost(post);
      };

      getPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default BlogPost;
