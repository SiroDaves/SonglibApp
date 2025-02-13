export interface PrivacyText {
  id: number;
  title: string;
  desc: string;
}

export const texts: PrivacyText[] = [
  {
    id: 1,
    title: 'Information Collection and Use',
    desc: 'Our apps are designed to function without collecting any personal information from users. We do not require you to submit any personal information to use our apps. However, our apps may collect non-personal information, such as your device type, operating system, and other technical data, to improve the performance of our apps.'
  },
  {
    id: 2,
    title: 'Information Sharing',
    desc: 'We do not share any personal information with third-party companies, organisations, or individuals. We do not sell, trade, or rent any personal information to others.\n\nThis app is intended for adults only. However, if it falls into the hands of minors, we do not knowingly collect any personal information from minors. We cannot control the actions of minors who use our apps, and we are not responsible for any information that they may submit.'
  },
  {
    id: 3,
    title: 'Data Security',
    desc: 'We take data security seriously and use reasonable measures to protect the personal information we collect. However, we cannot guarantee that unauthorised third parties will not be able to access and obtain such information. If you believe that your personal information has been compromised, please contact us immediately at futuristken@gmail.com.'
  },
  {
    id: 4,
    title: 'Changes to the Privacy Policy',
    desc: 'We reserve the right to update or modify this privacy policy at any time without prior notice. We encourage you to review this privacy policy periodically to stay informed about how we are protecting your personal information.'
  },
  {
    id: 5,
    title: 'Contact Us',
    desc: 'If you have any questions or concerns about our privacy policy, please contact us at futuristken@gmail.com.\n\n By using our apps, you agree to the terms and conditions outlined in this privacy policy.'
  },
];
