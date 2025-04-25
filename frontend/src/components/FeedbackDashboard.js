import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('timestamp');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/feedback?category=${category}&sortBy=${sortBy}`);
      setFeedbacks(res.data);
    };
    fetchData();
  }, [category, sortBy]);

  return (
    <div>
      <h2>Feedback Dashboard</h2>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <select
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '9px 18px',
            fontSize: '14px',
            minWidth: '120px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        >
          <option value="">All</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '9px 18px',
            fontSize: '14px',
            minWidth: '120px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        >
          <option value="timestamp">Latest</option>
          <option value="name">Name</option>
        </select>
      </div>
      <ul>
        {feedbacks.map(f => (
          <li key={f._id}>
            <strong>{f.name}</strong> ({f.email}) [{f.category}]<br />
            {f.text}<br />
            <small>{new Date(f.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDashboard;
