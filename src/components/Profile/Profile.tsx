import { UserProfile } from '../../types';
import styles from './Profile.module.css';

interface ProfileProps {
  profile: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <section id="profile" className={styles.profile}>
      <div className={styles.card}>
        <div className={styles.avatarContainer}>
          <img 
            src={profile.avatarUrl} 
            alt={`${profile.name}のプロフィール画像`} 
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{profile.name}</h2>
          <p className={styles.description}>{profile.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;