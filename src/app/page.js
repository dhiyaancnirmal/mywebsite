"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const businessCardRef = useRef(null);
  
  const experiences = [
    {
      organization: "DiversityMedQA",
      link: "https://arxiv.org/html/2409.01497v1",
      timeframe: "Spring 2024",
      position: "Researcher",
      hours: "20 hrs/week",
      description: "Led the design and development of a benchmark to evaluate how large language models handle demographic variation in medical question-answering tasks.",
      bulletPoints: [
        "Authored DiversityMedQA in collaboration with UC Berkeley EECS grads, introducing a new benchmark for evaluating demographic bias in medical QA systems.",
        "Accepted to NLP for Positive Impact (NLP4PI) Workshop at EMNLP 2024; presented at EMNLP and published in the ACL Anthology.",
        "Also accepted to the peer-reviewed Advancements in Medical Foundation Models (AIM-FM) Workshop at NeurIPS 2024 and the Southern California NLP Symposium 2025.",
        "Cited by NIH researcher in Ensuring Safety and Trust: Analyzing the Risks of Large Language Models in Medicine."
],
      image: "/EMNLP2024.webp"
    },
    {
      organization: "Crypto Summer Lab",
      link: "https://www.csl.so/",
      timeframe: "Summer 2024",
      position: "Operations Intern",
      hours: "15 hrs/week",
      description: "Worked under UT Austin ECE Professor Dr. Sriram Vishwanath and gained exposure to startup funding, product validation, and team-building.",
      bulletPoints: [
        "CSL is a 6-week Web3/Blockchain accelerator sponsored by Lightspeed Venture Partners and Polychain Capital, organized by Chainhub Foundation.",
        "Managed logistics for a Web3 accelerator backed by Google Web3, enabling collaboration between 14 startups, professors, and VCs.",
        "Developed and maintained the program's website used by investors for evaluating participating startups.",
        "Coordinated speeches and events featuring leading voices in blockchain and AI industries."
      ],
      image: "/consensus.jpg"
    },
    {
      organization: "Akash Network",
      link: "#",
      timeframe: "Fall 2024",
      position: "Embedded Engineering Intern",
      hours: "25 hrs/week",
      description: "Akash Network is a decentralized cloud computing platform enabling low-cost, secure compute marketplaces.",
      bulletPoints: [
        "Developed an embedded system to verify GPU resource allocation for the Akash blockchain, ensuring compute reliability and resilience.",
        "Collaborated with UT Austin ECE PhD students and studied secure enclave architectures, including TEEs, RISC, and CISC systems.",
        "Built randomized protocols to verify GPU participation and defend against Sybil attacks."
      ],
      image: "/akt4ever.jpg"
    }
  ];

  useEffect(() => {
    // Apply the rotation animation on load
    setTimeout(() => {
      if (businessCardRef.current) {
        businessCardRef.current.style.transform = "scale(1) rotate(0deg)";
      }
    }, 1000);

    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check if we're in the business card section
      const businessCardSection = document.querySelector('.businessCardSection');
      const businessCardRect = businessCardSection?.getBoundingClientRect();
      setShowScrollIndicator(
        scrollPosition < 100 && 
        businessCardRect?.bottom > 0 && 
        businessCardRect?.top < window.innerHeight
      );
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardClick = (index) => {
    if (selectedCard === null) {
      setSelectedCard(index);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCardClose = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'auto';
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    handleCardClose();
  };

  return (
    <main className={styles.mainContainer}>
      {/* Business Card Section */}
      <section className={styles.businessCardSection}>
        <div ref={businessCardRef} className={`${styles.businessCard} ${styles.rotateEffect}`}>
          <Image
            src="/background.jpeg"
            fill
            alt="Background"
            className={styles.cardBackground}
            priority
          />
          <div className={styles.overlayText}>
            <h2 className={styles.centeredText}>dhiyaan nirmal</h2>
            <h3 className={styles.subtext}>
              <a className={styles.contactLink} href="mailto:nirmaldhiyaan@gmail.com">
                nirmaldhiyaan@gmail.com
              </a>
            </h3>
            <h2 className={styles.topLeftText}>
              <a className={styles.contactLink} href="tel:+7373334627">
                737 333 4627
              </a>
            </h2>
            <h2 className={styles.topRightText}>
              <a className={styles.contactLink} href="#portfolio">
                More
              </a>
            </h2>
            <h2 className={styles.bottomCenterText}>Austin, TX, USA</h2>
          </div>
        </div>
        
        {showScrollIndicator && !scrolled && (
          <div className={styles.scrollIndicator}>
            <FontAwesomeIcon icon={faChevronDown} className={styles.bounceIcon} />
            <span>scroll down</span>
          </div>
        )}
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.page}>
          <nav className={styles.navbar}>
            <a href="#intro">Intro</a>
            <a href="#experiences">Experiences</a>
            <a href="#contact">Contact</a>
          </nav>

          <hr className={styles.separator} />

          <section id="intro" className={styles.introSection}>
            <div className={styles.profileImageContainer}>
              <Image
                src="/green.png"
                alt="Profile"
                fill
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.introText}>
              <h1>howdy, i&apos;m dhiyaan</h1>
              <p>interested in ml, blockchain, venture capital, societal issues, and music</p>
            </div>
          </section>

          <section id="experiences" className={styles.experiencesSection}>
            <h2>Experiences</h2>
            <div className={styles.experienceGrid}>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`${styles.experienceCard} ${selectedCard === index ? styles.expanded : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={styles.experienceContent}>
                    <div className={styles.experienceHeader}>
                      <div className={styles.titleWrapper}>
                        <span className={styles.organizationTitle}>{exp.organization}</span>
                        <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
                      </div>
                      {exp.link && exp.organization === "DiversityMedQA" && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.arxivButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(exp.link, '_blank');
                          }}
                        >
                          arXiv
                        </a>
                      )}
                      {exp.link && exp.organization === "Crypto Summer Lab" && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.cslButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(exp.link, '_blank');
                          }}
                        >
                          csl.so
                        </a>
                      )}
                    </div>
                    <div className={styles.positionInfo}>
                      <span className={styles.positionTitle}>{exp.position}</span>
                      <span className={styles.timeframe}>{exp.timeframe}</span>
                      <span className={styles.hours}>{exp.hours}</span>
                    </div>
                    <p className={styles.bodyText}>{exp.description}</p>
                    {exp.bulletPoints && (
                      <ul className={styles.bulletPoints}>
                        {exp.bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={styles.experienceImageContainer}>
                    <Image
                      src={exp.image || "/placeholder.jpg"}
                      alt={exp.organization}
                      className={styles.experienceImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            {selectedCard !== null && (
              <div 
                className={`${styles.overlay} ${styles.visible}`}
                onClick={handleOverlayClick}
              />
            )}
          </section>

          <section id="contact" className={styles.contactSection}>
            <h2>Let&apos;s Connect</h2>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <form 
              className={styles.contactForm}
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </section>

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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
