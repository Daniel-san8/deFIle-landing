import { Merriweather } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700', '600', '800', '500'],
});
