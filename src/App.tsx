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
    company: '株式会社テクノデジタル',
    workDescription: 'フロントエンドエンジニアとして活動しています。React、TypeScript、Next.jsを使った開発が得意です。UI/UXにこだわったWebアプリケーション開発に情熱を持っています。',
    hobbies: '読書と旅行が趣味です。特に技術書を読むことが好きで、最近はデザインシステムについて学んでいます。休日は近場の温泉巡りをすることもあります。',
    message: '新しい技術を学ぶことが好きです。一緒に素晴らしいプロダクトを作りましょう！',
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