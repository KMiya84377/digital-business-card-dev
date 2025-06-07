import { SocialLink } from '../../types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  // Platform icons mapping
  const getIconForPlatform = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'x':
        return '✕';
      case 'qiita':
        return 'Q';
      case 'github':
        return '🐙';
      case 'linkedin':
        return 'in';
      default:
        return '🔗';
    }
  };

  return (
    <section className={styles.socialLinks}>
      <h2 className={styles.sectionTitle}>SNS / ブログ</h2>
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
            <div className={styles.linkButton}>
              <span className={styles.linkIcon}>{getIconForPlatform(link.platform)}</span>
              <span className={styles.linkText}>{link.label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;