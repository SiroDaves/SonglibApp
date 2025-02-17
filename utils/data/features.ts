export interface Feature {
  id: number;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: '14 Songbooks to choose from',
    description: "Create your own collection from your favorite church hymns",
  },
  {
    id: 2,
    title: 'Real-time searching of songs',
    description: "You can search the songs in your collection based on title, number or words in the song",
  },
  {
    id: 3,
    title: 'Slide through song verses',
    description: "You can swipe up and down to navigate from one verse to the next",
  },
  {
    id: 4,
    title: 'Supported by the major platforms',
    description: "Songlib is available on Android, iOS, Windows, Linux and MacOS",
  },
  {
    id: 5,
    title: 'Works Offline once done setting up',
    description: "The app is meant to work away from internet access once you are done with setting it up",
  },
];
