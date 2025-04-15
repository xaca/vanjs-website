import React from 'react';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className={`${styles.introduction} bg-white`}>
      <div className={styles.contentWrapper}>
        <h1 className={`${styles.title} font-bold`}>
          HELLO!<br />WE'RE VANJS
        </h1>
        <p className={`${styles.description} text-gray-600`}>
          We are a monthly event for JavaScript enthusiasts in Vancouver, BC. 
          We focus on JavaScript, front-end technology, and the open web. 
          Our GitHub repo contains our goals, our Call for Speakers, and our Code of Conduct, 
          so come check it out and propose a talk!
        </p>
        <a 
          href="https://github.com/vanjs" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${styles.ctaButton} hover:shadow-lg`}
        >
          Check It Out Here
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/vanjs-intro.jpg" 
          alt="VanJS Community Event"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Introduction; 