import React from 'react';
import styles from './contact.module.css'; // Import the CSS module for contact page styles

const ContactPage = () => {
  return (
    <main className={styles.page}>
      <header>
        <h1>Contact</h1>
      </header>
      <section>
        <p>If you would like to get in touch, please use the contact form below.</p>
      </section>
    </main>
  );
};

export default ContactPage;
