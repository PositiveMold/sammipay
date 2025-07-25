import star from "../assets/star.svg";
import shield from "../assets/shield.svg";
import send from "../assets/send.svg";
import airbnb from "../assets/airbnb.svg";
import binance from "../assets/binance.svg";
import coinbase from "../assets/coinbase.svg";
import dropbox from "../assets/dropbox.svg";
import instagramm from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

export const navigationLinks = [
  {
    id: "home",
    title: "Bosh sahifa",
  },
  {
    id: "product",
    title: "Mahsulot",
  },
  {
    id: "features",
    title: "Xizmatlar",
  },

  {
    id: "clients",
    title: "Mijozlar",
    star,
  },
];

export const statistics = [
  {
    id: 1,
    title: "Foydalanuvchi Faol",
    value: "9300+",
  },

  {
    id: 2,
    title: "Kompaniya Homiyligida",
    value: "  100+",
  },

  {
    id: 3,
    title: "Tranzaksiya",
    value: "+110M+",
  },
];

export const features = [
  {
    id: 1,
    icon: star,
    title: "Mukofotlar",
    content:
      "Eng yaxshi plastik karta aksiyalari va sovrinlarning ajoyib kombinatsiyasini taklif etadi",
  },
  {
    id: 2,
    icon: shield,
    title: "100% Himoyalangan",
    content:
      "Ma'lumotlaringiz va tranzaktsiyalaringiz xavfsiz ekanligiga ishonch xosil qilish uchun faol choralar ko'riladi",
  },
  {
    id: 3,
    icon: send,
    title: "Balansni o'tkazish",
    content:
      "Balansni o'tkazish plastik kartasi sizga xizmat uchun foizlarni to'lashda pul tejash imkonini beradi",
  },
];

export const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver",
    name: "Herman Jensen",
    title: "Founder & Leader",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const footerLinks = [
  {
    title: "Jamiyat",
    links: [
      { name: "Yordam markazi", link: "https://www.sammi.ac/help-center/" },
      { name: "Hamkorlar", link: "https://www.sammi.ac/partners/" },
      { name: "Takliflar", link: "https://www.sammi.ac/suggestions/" },
      { name: "Blog", link: "https://www.sammi.ac/blog/" },
      { name: "Yangiliklar", link: "https://www.sammi.ac/newsletters/" },
    ],
  },
  {
    title: "Foydali Havola",
    links: [
      { name: "Kontent", link: "https://www.sammi.ac/help-center/" },
      { name: "Qanday ishlaydi", link: "https://www.sammi.ac/how-it-works/" },
      {
        name: "Shartlar & xizmatlar",
        link: "https://www.sammi.ac/terms-and-services/",
      },
    ],
  },
  {
    title: "Hamkor",
    links: [
      { name: "Bizning hamkorimiz", link: "https://www.sammi.ac/our-partner/" },
      {
        name: "Hamkor bo'ling",
        link: "https://www.sammi.ac/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagramm,
    link: "https://www.instagramm.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
