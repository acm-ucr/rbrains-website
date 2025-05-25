import { StaticImageData } from "next/image";
import One from "@/public/gallerysection1/PsychBehindMusic1.webp";
import Two from "@/public/gallerysection1/PsychBehindMusic2.webp";
import Three from "@/public/gallerysection1/PsychBehindMusic3.webp";
import Four from "@/public/gallerysection1/PsychBehindMusic4.webp";
import Five from "@/public/gallerysection1/PsychBehindMusic5.webp";
import Six from "@/public/gallerysection1/PsychBehindMusic6.webp";
import Seven from "@/public/gallerysection1/PsychBehindMusic7.webp";
import Eight from "@/public/gallerysection1/PsychBehindMusic8.webp";
import Nine from "@/public/gallerysection1/PsychBehindMusic9.webp";
import Ten from "@/public/gallerysection1/PsychBehindMusic10.webp";

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
  {
    src: Nine,
    alt: "photo 9",
  },
  {
    src: Ten,
    alt: "photo 10",
  },
];
