import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <p className={styles.logoText}>デジタル名刺</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#profile" className={styles.footerLink}>プロフィール</a>
            <a href="#social" className={styles.footerLink}>SNS</a>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} デジタル名刺 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;