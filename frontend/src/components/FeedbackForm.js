import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', text: '', category: 'suggestion' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/feedback', formData);
    alert('Feedback submitted!');
  };

  // For button hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.03)'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.07)'
        }}
      >
        <input
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <textarea
          placeholder="Feedback"
          required
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            resize: 'vertical'
          }}
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        >
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature Request</option>
        </select>
        <button
          type="submit"
          style={{
            backgroundColor: isHovered ? '#34d058' : '#28a745',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
