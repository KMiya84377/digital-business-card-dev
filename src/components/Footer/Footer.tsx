import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} デジタル名刺 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;