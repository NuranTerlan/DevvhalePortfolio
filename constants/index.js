import React from "react";

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
  },
  {
    key: "linkedin",
    icon: <LinkedinOriginal />,
  },
  {
    key: "instagram",
    icon: <InstagramOriginal />,
  },
  {
    key: "github",
    icon: <GithubOriginal />,
  },
  {
    key: "facebook",
    icon: <FacebookOriginal />,
  },
];
