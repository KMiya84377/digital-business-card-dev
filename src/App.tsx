import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { UserProfile, SocialLink } from './types';
import styles from './App.module.css';

const App: React.FC = () => {
  const [profile] = useState<UserProfile>({
    name: '山田 太郎',
    description: 'フロントエンドエンジニアとして活動しています。React、TypeScript、Next.jsを使った開発が得意です。UI/UXにこだわったWebアプリケーション開発に情熱を持っています。趣味は読書と旅行で、新しい技術を学ぶことが好きです。',
    avatarUrl: '/assets/avatar.jpg'
  });

  const [socialLinks] = useState<SocialLink[]>([
    {
      platform: 'X',
      url: 'https://x.com/K5ARULtkUA4594',
      label: 'X (Twitter)'
    },
    {
      platform: 'Qiita',
      url: 'https://qiita.com/Takenoko4594',
      label: 'Qiita'
    }
  ]);

  useEffect(() => {
    document.title = `${profile.name} | デジタル名刺`;
  }, [profile.name]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Profile profile={profile} />
          <SocialLinks links={socialLinks} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;