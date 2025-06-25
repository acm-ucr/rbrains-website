import { StaticImageData } from "next/image";
import one from "@/public/Carousel/carousel1.webp";
import two from "@/public/Carousel/carousel2.webp";
import three from "@/public/Carousel/carousel3.webp";
import four from "@/public/Carousel/carousel4.webp";
import five from "@/public/Carousel/carousel5.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const carouselPhotos: Photo[] = [
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
