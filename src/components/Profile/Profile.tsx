import { UserProfile } from '../../types';
import styles from './Profile.module.css';

interface ProfileProps {
  profile: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.avatarContainer}>
        <img 
          src={profile.avatarUrl} 
          alt={`${profile.name}のプロフィール画像`} 
          className={styles.avatar}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{profile.name}</h2>
        <p className={styles.company}>{profile.company}</p>
        
        <div className={styles.sectionContainer}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>仕事</h3>
            <p className={styles.sectionText}>{profile.workDescription}</p>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>趣味</h3>
            <p className={styles.sectionText}>{profile.hobbies}</p>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>一言</h3>
            <p className={`${styles.sectionText} ${styles.message}`}>{profile.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;