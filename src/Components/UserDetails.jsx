import React from "react";

const UserDetails = (props) => {
  const { users } = props;
  return (
    <>
      <div className="row">
        {users.map((user) => (
          <div className="users_details">
            
            <div className="id">
            <h1 className="detail_id">{user.id}</h1>
            </div>
<div className="detail">

            <h3>{user.title}</h3>
            <p>{user.body}</p>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDetails;
