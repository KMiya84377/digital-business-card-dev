import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h1 className={styles.title}>デジタル名刺</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#profile" className={styles.navLink}>プロフィール</a>
            </li>
            <li className={styles.navItem}>
              <a href="#social" className={styles.navLink}>SNS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;