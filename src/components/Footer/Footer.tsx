import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>マイナデジタル名刺</h2>
            <p className={styles.footerDescription}>
              デジタル庁デザインシステムに準拠した、シンプルで使いやすいデジタル名刺サービスです。
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerSubtitle}>リンク</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>ホーム</a></li>
              <li><a href="#" className={styles.footerLink}>サービス紹介</a></li>
              <li><a href="#" className={styles.footerLink}>お問い合わせ</a></li>
              <li><a href="https://design.digital.go.jp/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>デジタル庁デザインシステム</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} マイナデジタル名刺 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;