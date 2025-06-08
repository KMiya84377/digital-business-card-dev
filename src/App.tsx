import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { UserProfile, SocialLink } from './types';
import styles from './App.module.css';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [profile] = useState<UserProfile>({
    name: 'たけのこ',
    company: 'デジタル名刺株式会社',
    workDescription: '主にWebシステムのフロントエンドエンジニアとして活動しています。最近はAWSを活用したインフラ周りも担当しています。好きなAWSサービスはAWS Amplifyです。',
    hobbies: 'ゲームとお酒を飲みことが趣味です。最近はSwitch2が当たらず、ゲームモチベが下がり気味です。お酒は良くクラフトジンを飲みます。',
    message: '去年の秋頃からQiitaや勉強会への参加を始めました。最近はAWSや生成AIを活用した作業効率化に興味があります。',
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
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;