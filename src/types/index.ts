export interface UserProfile {
  name: string;
  company: string;
  workDescription: string;
  hobbies: string;
  message: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon?: string;
}