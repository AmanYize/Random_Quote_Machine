import React from "react";

const AppBg = [
  {
    background: "rgb(255,184,202)",
    background:
      "linear-gradient(155deg, rgba(255,184,202,1) 0%, rgba(0,255,174,1) 100%)",
  },
  {
    background: "rgb(215,184,255)",
    background:
      "linear-gradient(155deg, rgba(215,184,255,1) 0%, rgba(255,0,72,1) 100%)",
  },
  {
    background: "rgb(255,199,184)",
    background:
      "linear-gradient(155deg, rgba(255,199,184,1) 0%, rgba(255,26,0,1) 100%)",
  },
  {
    background: "rgb(233,255,121)",
    background:
      "linear-gradient(155deg, rgba(233,255,121,1) 0%, rgba(0,110,61,1) 100%)",
  },
  {
    background: "rgb(110,34,51)",
    background:
      "linear-gradient(155deg, rgba(110,34,51,1) 0%, rgba(75,27,4,1) 100%)",
  },
];

export default function RandomBG() {
  const randomIndex = Math.floor(Math.random() * AppBg.length);
  return AppBg[randomIndex];
}
