import { StaticImageData } from "next/image";
import One from "@/public/gallerysection8/botb1.webp";
import Two from "@/public/gallerysection8/botb2.webp";
import Three from "@/public/gallerysection8/botb3.webp";
import Four from "@/public/gallerysection8/botb4.webp";
import Five from "@/public/gallerysection8/botb5.webp";
import Six from "@/public/gallerysection8/botb6.webp";
import Seven from "@/public/gallerysection8/botb7.webp";
import Eight from "@/public/gallerysection8/botb8.webp";
import Nine from "@/public/gallerysection8/botb9.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
  label?: string;
}

const gallery: Photo[] = [
  {
    src: One,
    alt: "photo 1",
    label: "Battle of the Brains",
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
];
export default gallery;
