import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imgUrl: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
    rating: '4.5',
  },
  {
    imgUrl: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
    rating: '4.0',
  },
  {
    imgUrl: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
    rating: '3.5',
  },
  {
    imgUrl: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
    rating: '4.8',
  },
];

export const services = [
  {
    imgUrl: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgUrl: shieldTick,
    label: 'Secure Payment',
    subtext: 'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgUrl: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imgUrl: customer1,
    customerName: 'Morich Brown',
    rating: 4.3,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgUrl: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Air Force 1', href: '/' },
      { label: 'Air Max 1', href: '/' },
      { label: 'Air Jordan 1', href: '/' },
      { label: 'Air Force 2', href: '/' },
      { label: 'Nike Waffle Racer', href: '/' },
      { label: 'Nike Cortez', href: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'About us', href: '/' },
      { label: 'FAQs', href: '/' },
      { label: 'How it works', href: '/' },
      { label: 'Privacy policy', href: '/' },
      { label: 'Payment policy', href: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'customer@nike.com', href: 'mailto:customer@nike.com' },
      { label: '+92554862354', href: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
