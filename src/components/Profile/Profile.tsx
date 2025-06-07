import { UserProfile } from '../../types';
import styles from './Profile.module.css';

interface ProfileProps {
  profile: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <section className={styles.profile}>
      <h2 className={styles.sectionTitle}>プロフィール</h2>
      <div className={styles.profileCard}>
        <div className={styles.avatarContainer}>
          <img 
            src={profile.avatarUrl} 
            alt={`${profile.name}のプロフィール画像`} 
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{profile.name}</h3>
          <div className={styles.divider}></div>
          <p className={styles.description}>{profile.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;