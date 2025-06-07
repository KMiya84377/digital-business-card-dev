import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  copyrightName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({ 
  copyrightName = 'デジタル名刺', 
  year = new Date().getFullYear() 
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {year} {copyrightName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;