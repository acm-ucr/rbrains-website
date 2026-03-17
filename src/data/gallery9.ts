import { StaticImageData } from "next/image";
import One from "@/public/gallerysection9/winter1.webp";
import Two from "@/public/gallerysection9/winter2.webp";
import Three from "@/public/gallerysection9/winter3.webp";
import Four from "@/public/gallerysection9/winter4.webp";
import Five from "@/public/gallerysection9/winter5.webp";
import Six from "@/public/gallerysection9/winter6.webp";
import Seven from "@/public/gallerysection9/winter7.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
  label?: string;
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
    label: "Winter Wonderland",
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

export default gallery;
