export interface AppInfo {
  appName: string;
  appIcon: string;
  appVersion: string;
  tagline: string;
  callout: string;
  description: string;
  github: string;
  donateStatement: string;
  privacyStatement: string;
}

export const info: AppInfo = {
  appName: 'SongLib',
  appIcon: '/icons/app_icon.png',
  appVersion: '1.0.797',
  callout: 'Get SongLib',
  tagline: 'Your Songbook on the Go!',
  description: 'SongLib gives you access to your church songbook/hymns seamlessly that you don\'t have to worry about even being online once you have set up the app on your device.',
  github: 'https://github.com/sirodaves/songlib',
  donateStatement: "First launched in 2015 as **vSongBook**, our app provides offline access to your favourite church hymns. We've kept it free and continually improved it, but maintaining and updating it comes with costs—licenses, servers, and more.\n\nTo keep the app running and updated, we rely on your support. If it has blessed you, consider donating to help sustain this non-profit project. **Thank you for your generosity!**",
  privacyStatement: 'We understand the importance of privacy and are committed to protecting the personal information of our users. This privacy policy outlines how we collect, use, and protect the information you provide when using our apps.'
};
