import {
  Home,
  Information,
  Investment,
  TelegramOriginal,
  LinkedinOriginal,
  InstagramOriginal,
  GithubOriginal,
  FacebookOriginal,
} from "../components/icons/index";

export const SIZE = {
  TABLET_SIZE: 1000,
  MOBILE_SIZE: 700,
  DESK_SIZE: 1270,
};

export const MENU = [
  {
    key: "home",
    path: "/home",
    icon: <Home />,
    title: "Home",
  },
  {
    key: "about",
    path: "/about",
    icon: <Information />,
    title: "About Me",
  },
  {
    key: "business",
    path: "/business",
    icon: <Investment />,
    title: "Business",
  },
];

export const CONTACTS = [
  {
    key: "telegram",
    icon: <TelegramOriginal />,
    link: "https://t.me/devvhale13",
  },
  {
    key: "linkedin",
    icon: <LinkedinOriginal />,
    link: "https://www.linkedin.com/in/nuran-t%C9%99rlan-3744a71a3/",
  },
  {
    key: "instagram",
    icon: <InstagramOriginal />,
    link: "https://www.instagram.com/nuranterlan/",
  },
  {
    key: "github",
    icon: <GithubOriginal />,
    link: "https://github.com/NuranTerlan",
  },
  {
    key: "facebook",
    icon: <FacebookOriginal />,
    link: "https://www.facebook.com/devvhale/",
  },
];
