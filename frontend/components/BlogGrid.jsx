import React from 'react';
import './BlogGrid.css'; // This is where you’ll place the CSS code I provided earlier

const BlogGrid = () => {
  const resources = [
    {
      title: 'Master Async/Await',
      excerpt: 'Async programming changed how we write JavaScript. Here’s why.',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1603486002664-a7319421e133?q=80&w=2142&auto=format&fit=crop',
      date: '11 May · 5 min read',
      type: 'cute'
    },
    {
      title: 'When AI Reviews Your PR',
      excerpt: 'GPT-5 is coming — is your repo ready?',
      category: 'AI',
      image: 'https://source.unsplash.com/1200x400/?ai',
      date: '',
      type: 'wide'
    },
    {
      title: 'Becoming a Calm Dev',
      excerpt: 'It’s not just about code. It’s about headspace.',
      category: 'Mindset',
      image: '',
      date: '',
      type: 'tall'
    },
    {
      title: 'When AI Reviews Your PR',
      excerpt: 'GPT-5 is coming — is your GitHub repo ready?',
      category: 'AI',
      image: 'https://source.unsplash.com/1200x400/?ai',
      date: '',
      type: 'normal'
    },
    {
      title: 'Becoming a Calm Dev',
      excerpt: 'It’s not just about code. It’s about headspace.',
      category: 'Mindset',
      image: '',
      date: '',
      type: 'normal'
    },
    {
      title: 'When AI Reviews Your PR',
      excerpt: 'GPT-5 is coming — is your GitHub repo ready?',
      category: 'AI',
      image: 'https://source.unsplash.com/1200x400/?ai',
      date: '',
      type: 'tall'
    },
    {
      title: 'Becoming a Calm Dev',
      excerpt: 'It’s not just about code. It’s about headspace.',
      category: 'Mindset',
      image: '',
      date: '',
      type: 'wide'
    },
    {
      title: 'When AI Reviews Your PR',
      excerpt: 'GPT-5 is coming — is your GitHub repo ready?',
      category: 'AI',
      image: 'https://source.unsplash.com/1200x400/?ai',
      date: '',
      type: 'tall'
    },
    {
      title: 'Becoming a Calm Dev',
      excerpt: 'It’s not just about code. It’s about headspace.',
      category: 'Mindset',
      image: '',
      date: '',
      type: 'normal'
    },
  ];

  return (
    <div className="blog-grid" id="blog-grid">
      {resources.map((resource, idx) => (
        <div
          key={idx}
          className={`blog-card ${resource.type}`}
          data-tag={resource.category}
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {resource.image ? (
            <img src={resource.image} alt={resource.title} />
          ) : (
            <div className="blog-info colored" style={{ background: '#ff0033' }}>
              <span className="category">{resource.category}</span>
              <h3>{resource.title}</h3>
              <p>{resource.excerpt}</p>
            </div>
          )}
          {resource.image && (
            <div className="blog-info">
              <span className="category">{resource.category}</span>
              <h3>{resource.title}</h3>
              <p>{resource.excerpt}</p>
              {resource.date && <span className="date">{resource.date}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
