import React from 'react';
import { SocialLink } from '../../types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className={styles.socialLinksContainer}>
      <h3 className={styles.title}>SNS / ブログ</h3>
      <div className={styles.linksGrid}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
            aria-label={`${link.label}へのリンク`}
          >
            <span className={styles.linkPlatform}>{link.platform}</span>
            <span className={styles.linkLabel}>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;