import { SocialLink } from '../../types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <section id="social" className={styles.socialLinks}>
      <div className={styles.card}>
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
              <div className={styles.linkButton}>
                <span className={styles.linkIcon}>{getPlatformIcon(link.platform)}</span>
                <span className={styles.linkText}>{link.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// プラットフォームに応じたアイコン文字を返す関数
function getPlatformIcon(platform: string): string {
  switch (platform.toLowerCase()) {
    case 'x':
      return 'X';
    case 'qiita':
      return 'Q';
    case 'github':
      return 'G';
    case 'linkedin':
      return 'in';
    default:
      return '#';
  }
}

export default SocialLinks;