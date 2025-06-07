import React from 'react';
import { UserProfile } from '../../types';
import styles from './Profile.module.css';

interface ProfileProps {
  profile: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.avatarContainer}>
        <img 
          src={profile.avatarUrl} 
          alt={`${profile.name}のプロフィール画像`} 
          className={styles.avatar}
        />
      </div>
      <div className={styles.profileInfo}>
        <h2 className={styles.name}>{profile.name}</h2>
        <p className={styles.description}>{profile.description}</p>
      </div>
    </div>
  );
};

export default Profile;