import React from 'react'

function Settings() {
  return (
    <div className="settings-container">
      <div className="settings-form">
        <h2 className="settings-title">User Settings</h2>
        
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              defaultValue="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Enter current password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
            />
          </div>

          <button type="submit" className="settings-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default Settings 