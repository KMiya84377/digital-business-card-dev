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
        <p className={styles.description}>{profile.description}</p>
      </div>
    </section>
  );
};

export default Profile;