import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

function Profile() {
  const userDetails = {
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Disaster Management Officer"
  };

  return (
    <main className="main-container">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <BsFillPersonFill />
          </div>
          <h2 className="profile-name">{userDetails.firstName} {userDetails.lastName}</h2>
          <p className="profile-role">{userDetails.role}</p>
        </div>

        <div className="profile-details-grid">
          <div className="detail-card">
            <span className="detail-label">Username</span>
            <span className="detail-value">{userDetails.username}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">First Name</span>
            <span className="detail-value">{userDetails.firstName}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Last Name</span>
            <span className="detail-value">{userDetails.lastName}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Email</span>
            <span className="detail-value">{userDetails.email}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile; 