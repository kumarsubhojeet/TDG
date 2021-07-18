import React, { useState, useEffect,lazy,Suspense } from 'react';
import Posts from './Components/Posts';
// import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';


const Pagination = lazy(()=>import ("./Components/Pagination.js"))

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      
      <div className='pages'>

        <Suspense fallback={
          <div>
           Loading....
          </div>
        } >
      <Pagination
      
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </Suspense>

      </div>
    </div>
  );
};

export default App;
