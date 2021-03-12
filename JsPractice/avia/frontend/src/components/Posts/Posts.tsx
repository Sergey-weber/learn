import React, { useState, useEffect } from 'react'; 
import axios  from 'axios';

const Posts = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [posts, setPosts] = useState('');

  useEffect(() => {
    (async () => {
      const req = await axios.get('/posts');

      // setPosts(req);
    })()
  });

  const handlePosts = async () => {
    try {
      const posts = {
        title: title,
        content: content,
        author: 'author!'
      };
      const req = await axios.post('/posts', posts,
      {
        headers: { 
          'content-type': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        }
      }
      );
      
      // setPosts({
      //   ...posts,
      //   req,
      // })
    } catch (e) {
      throw e.message;
    }
  }

  return (
    <div className='avia-login'>
      <h1>Posts</h1>
      <input type="email" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="name" value={content} placeholder="content" onChange={(e) => setContent(e.target.value)} />
      <input type="paasword" value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={handlePosts}>Registration</button>
    </div>
  )
};

export { Posts };