import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="row">
      {posts.map((post) => (
       
       <div className="users_details">
          
          <div className="id">
            <h1 className="detail_id">{post.id}</h1>
          </div>

          <div className="detail">
            <h3 className="title">{post.title}</h3>
            <p className="para">{post.body}</p>
          </div>

        </div>

      
      ))}
        <hr/>
    </div>
  );
};

export default Posts;
