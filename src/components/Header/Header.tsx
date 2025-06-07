import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🆔</span>
            <h1 className={styles.title}>マイナデジタル名刺</h1>
          </div>
          <p className={styles.subtitle}>デジタル庁準拠デザイン</p>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>ホーム</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>サービス紹介</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;