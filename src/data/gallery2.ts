import { StaticImageData } from "next/image";
import One from "@/public/gallerysection2/health1.webp";
import Two from "@/public/gallerysection2/health2.webp";
import Three from "@/public/gallerysection2/health3.webp";
import Four from "@/public/gallerysection2/health4.webp";
import Five from "@/public/gallerysection2/health5.webp";
import Six from "@/public/gallerysection2/health6.webp";
import Seven from "@/public/gallerysection2/health7.webp";
import Eight from "@/public/gallerysection2/health8.webp";

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
