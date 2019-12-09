import React from 'react';
import './Profile.css';

const Profile = ({ username, logOut }) => {
  return (
    <div className="Profile">
      <h1>Profile Page</h1>
      <h2>Вы: {username}</h2>
      <button onClick={logOut}>Выйти</button>
    </div>
  );
}

export default Profile;