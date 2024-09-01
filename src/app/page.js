"use client";

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import AgeCounter from './agecounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.imageContainer}>
        <a href="https://dhiyaan.vercel.app"><Image
            className={styles.image}
            src="/marks the spot.png"
            width={300}
            height={210}
            priority
            alt="dhiyaan c nirmal"/>
            </a>
        </div>
        <nav className={styles.navbar}>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="https://dhiyaan.vercel.app">Contact</a>
        </nav>
        <hr className={styles.separator} />
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <span>📚 Spinoza's Ethics</span>
            <div className={styles.tooltip}>Currently Reading</div>
          </div>

          <div className={styles.infoItem}>
            <AgeCounter />
            <spanb> years</spanb>
            <div className={styles.tooltip}>Time on Earth</div>
          </div>

          <div className={styles.infoItem}>
            <span>📍 Austin, TX, USA</span>
            <div className={styles.tooltip}>Current Location</div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/boundless.jpg"
            width={697}
            height={198}
            priority
            alt="Boundless"
          />
          <p className={styles.caption}><a href="https://www.instagram.com/mendezmendezart/p/C87mZT5IAlB/"><i>balance</i> by @mendezmendezart</a></p>
        </div>
      </header>
    
      <footer className={styles.footer}>
        <p>&copy; 2024 Dhiyaan Nirmal. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/dh1yaan">
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
          <a href="https://www.linkedin.com/in/dhiyaan">
            <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href="https://twitter.com/dh1yaan">
            <FontAwesomeIcon icon={faXTwitter} /> 
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
