import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>デジタル名刺</h1>
      </div>
    </header>
  );
};

export default Header;