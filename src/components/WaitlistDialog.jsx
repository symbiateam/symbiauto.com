import React, { useState } from 'react';

const WaitlistDialog = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@symbiauto.com?subject=New Waitlist Signup&body=New signup: ${email}`;
    setIsOpen(false);
    setEmail('');
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2 className="dialog-title">Join our Waitlist</h2>
        <form onSubmit={handleSubmit} className="dialog-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistDialog;