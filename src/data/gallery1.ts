import { StaticImageData } from "next/image";
import One from "@/public/gallerysection2/health1.png";
import Two from "@/public/gallerysection2/health2.png";
import Three from "@/public/gallerysection2/health3.png";
import Four from "@/public/gallerysection2/health4.png";
import Five from "@/public/gallerysection2/health5.png";
import Six from "@/public/gallerysection2/health6.png";
import Seven from "@/public/gallerysection2/health7.png";
import Eight from "@/public/gallerysection2/health8.png";

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
  {
    src: Eight,
    alt: "photo 8",
  },
];
