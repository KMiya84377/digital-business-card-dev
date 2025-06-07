import { SocialLink } from '../../types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <section className={styles.socialLinks}>
      <h3 className={styles.title}>SNS / ブログ</h3>
      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`${link.label}を開く`}
          >
            <div className={`${styles.linkButton} ${styles[link.platform.toLowerCase()]}`}>
              <span className={styles.linkText}>{link.label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;