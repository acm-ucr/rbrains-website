import { StaticImageData } from "next/image";
import One from "@/public/gallerysection3/love1.png";
import Two from "@/public/gallerysection3/love2.png";
import Three from "@/public/gallerysection3/love3.png";
import Four from "@/public/gallerysection3/love4.png";
import Five from "@/public/gallerysection3/love5.png";
import Six from "@/public/gallerysection3/love6.png";
import Seven from "@/public/gallerysection3/love7.png";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const gallery: Photo[] = [
  {
    src: One,
    alt: "photo 1",
  },
  {
    src: Two,
    alt: "photo 2",
  },
  {
    src: Three,
    alt: "photo 3",
  },
  {
    src: Four,
    alt: "photo 4",
  },
  {
    src: Five,
    alt: "photo 5",
  },
  {
    src: Six,
    alt: "photo 6",
  },
  {
    src: Seven,
    alt: "photo 7",
  },
];
