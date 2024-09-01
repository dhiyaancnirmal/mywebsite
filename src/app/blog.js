import React from 'react';
import styles from './blog.module.css'; // Import the CSS module for blog page styles

const BlogPage = () => {
  return (
    <main className={styles.page}>
      <header>
        <h1>Blog</h1>
      </header>
      <section>
        <p>Welcome to the blog section. Here you will find my latest posts and articles.</p>
      </section>
    </main>
  );
};

export default BlogPage;
