export interface Donation {
  id: number;
  title: string;
  image: string;
  url: string;
}

export const donations: Donation[] = [
  {
    id: 1,
    title: 'Paypal',
    image: '/images/paypal.png',
    url: 'https://www.paypal.com/donate/?hosted_button_id=FYZYTW723Q8QC'
  },
  {
    id: 2,
    title: 'Patreon',
    image: '/images/patreon.png',
    url: 'https://www.patreon.com/SongLib'
  },
];
