import { StaticImageData } from "next/image";
import one from "@/public/carousel/carousel1.webp";
import two from "@/public/carousel/carousel2.webp";
import three from "@/public/carousel/carousel3.webp";
import four from "@/public/carousel/carousel4.webp";
import five from "@/public/carousel/carousel5.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const carousel: Photo[] = [
  {
    src: one,
    alt: "photo 1",
  },
  {
    src: two,
    alt: "photo 2",
  },
  {
    src: three,
    alt: "photo 3",
  },
  {
    src: four,
    alt: "photo 4",
  },
  {
    src: five,
    alt: "photo 5",
  },
];
