// src/components/BlogSection.js
import React from 'react';
import './BlogSection.css';

function BlogSection() {
  const blogPosts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      imageUrl: 'path-to-image-1.jpg',
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      imageUrl: 'path-to-image-2.jpg',
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      imageUrl: 'path-to-image-3.jpg',
    }
  ];

  return (
    <section className="blog">
      <div className="blog-header">
        <h3 className="blog-title">Our Blog</h3>
        <h2 className="blog-heading">Latest blog posts</h2>
        <p className="blog-description">Tools and strategies modern teams need to help their companies grow.</p>
        <button className="view-all-button">View all posts</button>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <p className="blog-category">{post.category}</p>
            <h4 className="blog-post-title">{post.title}</h4>
            <p className="blog-description">{post.description}</p>
            <div className="blog-author">
              <span className="author-name">{post.author}</span> · <span className="post-date">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
