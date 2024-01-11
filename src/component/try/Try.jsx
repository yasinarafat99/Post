import React, { useState } from 'react';

function UserProfile() {
  const [reactions, setReactions] = useState(0);

  const handleReaction = () => {
    setReactions((prevReactions) => prevReactions + 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>User Profile</h2>
        <p style={styles.id}>ID: 12345</p>
      </div>
      <div style={styles.body}>
        <p style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div style={styles.tags}>
          <span style={styles.tag}>React</span>
          <span style={styles.tag}>CSS</span>
          <span style={styles.tag}>JavaScript</span>
        </div>
      </div>
      <div style={styles.reactions}>
        <button style={styles.reactionButton} onClick={handleReaction}>
          React 👍
        </button>
        <p style={styles.reactionCount}>{reactions} Reactions</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
  },
  id: {
    fontSize: '1rem',
    color: '#666',
  },
  body: {
    marginBottom: '15px',
  },
  bodyText: {
    fontSize: '1rem',
    color: '#333',
  },
  tags: {
    display: 'flex',
    marginTop: '10px',
  },
  tag: {
    marginRight: '5px',
    padding: '5px 10px',
    background: '#f4f4f4',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  reactions: {
    display: 'flex',
    alignItems: 'center',
  },
  reactionButton: {
    padding: '5px 10px',
    marginRight: '10px',
    background: '#61dafb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  reactionCount: {
    fontSize: '1rem',
    color: '#333',
  },
};

export default UserProfile;
