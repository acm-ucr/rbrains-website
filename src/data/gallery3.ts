import { StaticImageData } from "next/image";
import One from "@/public/gallerysection4/horror1.webp";
import Two from "@/public/gallerysection4/horror2.webp";
import Three from "@/public/gallerysection4/horror3.webp";
import Four from "@/public/gallerysection4/horror4.webp";
import Five from "@/public/gallerysection4/horror5.webp";
import Six from "@/public/gallerysection4/horror6.webp";

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
];
