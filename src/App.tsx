import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { UserProfile, SocialLink } from './types';
import styles from './App.module.css';

// Sample profile data
const profileData: UserProfile = {
  name: '山田 太郎',
  description: 'フロントエンドエンジニア。React、TypeScript、UIデザインが得意です。新しい技術を学ぶことが好きで、常に最新のウェブ開発トレンドをフォローしています。趣味は読書と旅行です。',
  avatarUrl: '/assets/avatar.svg'
};

// Sample social links
const socialLinks: SocialLink[] = [
  {
    platform: 'X (Twitter)',
    url: 'https://twitter.com/example',
    label: '@example'
  },
  {
    platform: 'Qiita',
    url: 'https://qiita.com/example',
    label: 'example'
  }
];

function App() {
  return (
    <div className={styles.app}>
      <Header title="デジタル名刺" />
      <main className={styles.main}>
        <div className={styles.container}>
          <Profile profile={profileData} />
          <SocialLinks links={socialLinks} />
        </div>
      </main>
      <Footer copyrightName={profileData.name} />
    </div>
  );
}

export default App;