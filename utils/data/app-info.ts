export interface AppInfo {
  appName: string;
  appIcon: string;
  appVersion: string;
  tagline: string;
  callout: string;
  description: string;
  github: string;
}

export const info: AppInfo = {
  appName: 'SongLib',
  appIcon: '/icons/app_icon.png',
  appVersion: '1.0.7.96',
  callout: 'Get SongLib',
  tagline: 'Your Songbook on the Go!',
  description: 'SongLib gives you access to your church songbook/hymns seamlessly that you don\'t have to worry about even being online once you have set up the app on your device.',
  github: 'https://github.com/sirodaves/songlib',
};
