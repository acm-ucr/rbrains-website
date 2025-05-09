import { StaticImageData } from "next/image";
import One from "@/public/gallery/PsychBehindMusic1.webp";
import Two from "@/public/gallery/PsychBehindMusic2.webp";
import Three from "@/public/gallery/PsychBehindMusic3.webp";
import Four from "@/public/gallery/PsychBehindMusic4.webp";
import Five from "@/public/gallery/PsychBehindMusic5.webp";
import Six from "@/public/gallery/PsychBehindMusic6.webp";
import Seven from "@/public/gallery/PsychBehindMusic7.webp";
import Eight from "@/public/gallery/PsychBehindMusic8.webp";
import Nine from "@/public/gallery/PsychBehindMusic9.webp";
import Ten from "@/public/gallery/PsychBehindMusic10.webp";

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
