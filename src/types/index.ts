export interface UserProfile {
  name: string;
  description: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon?: string;
}