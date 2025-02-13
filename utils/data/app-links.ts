export interface AppLink {
  id: number;
  os: string;
  title: string;
  type: string;
  ext: string;
  url: string;
  subLinks?: AppLink[];
}

export const links: AppLink[] = [
  {
    id: 1,
    os: 'Android',
    title: 'Android',
    type: 'mobile',
    ext: '.apk',
    url: 'https://play.google.com/store/apps/details?id=com.songlib'
  },
  {
    id: 2,
    os: 'iOS',
    title: 'iOS',
    type: 'mobile',
    ext: '.ipa',
    url: 'https://apps.apple.com/app/id6446771305'
  },
  {
    id: 3,
    os: 'Windows',
    title: 'Windows',
    type: 'desktop',
    ext: '.exe',
    url: ''
  },
  {
    id: 4,
    os: 'Linux',
    title: '.deb',
    type: 'desktop',
    ext: '.deb',
    url: 'Debian, Ubuntu'
  },
  {
    id: 5,
    os: 'Linux',
    title: '.rpm',
    type: 'desktop',
    ext: '.rpm',
    url: 'Red Hat, Fedora, SUSE'
  },
  {
    id: 6,
    title: 'Mac',
    type: 'desktop',
    os: 'MacOS',
    ext: '.dmg',
    url: ''
  },
];
