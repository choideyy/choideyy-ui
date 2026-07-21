export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61576861010889',
  instagram: 'https://www.instagram.com/choideyyy.official/',
  youtube: 'https://www.youtube.com/@choideyyydancecompetition',
  tiktok: 'https://www.tiktok.com/@choideyyyofficial',
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;

export const FOOTER_SOCIAL_LINKS: ReadonlyArray<{
  platform: SocialPlatform;
  label: string;
}> = [
  { platform: 'facebook', label: 'Facebook' },
  { platform: 'instagram', label: 'Instagram' },
  { platform: 'youtube', label: 'YouTube' },
  { platform: 'tiktok', label: 'TikTok' },
] as const;
