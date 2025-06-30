import Rishitha from "@/public/board/Rishitha_Kona.webp";
import Abby from "@/public/board/Abby_Lazar.webp";
import Sagey from "@/public/board/Sagey_Moorjani.webp";
import Shriya from "@/public/board/Shriya_Patel.webp";
import Catherine from "@/public/board/Catherine_Sanchez.webp";
import Alexa from "@/public/board/Alexa_Zelaya.webp";
import Alexander from "@/public/board/Alexander_Tang.webp";
import Angie from "@/public/board/Angie_Santander.webp";
import { StaticImageData } from "next/image";

export interface BoardMember {
  position: string;
  imageSrc: StaticImageData;
  name: string;
  pronouns: string;
  info: string;
}

export const mainBoard: BoardMember[] = [
  {
    position: "President",
    imageSrc: Rishitha,
    name: "Rishitha Kona",
    pronouns: "she/her/hers",
    info: "3rd year Psychology and Business major",
  },
  {
    position: "Secretary",
    imageSrc: Abby,
    name: "Abby Lazar",
    pronouns: "she/her/hers",
    info: "3rd year Psychology major, TFDP Film minor",
  },
  {
    position: "Treasurer",
    imageSrc: Sagey,
    name: "Sagey Moorjani",
    pronouns: "she/her/hers",
    info: "2nd year Psychology major",
  },
  {
    position: "Public Relations",
    imageSrc: Shriya,
    name: "Shriya Patel",
    pronouns: "she/her/hers",
    info: "3rd-year Psychology major",
  },
  {
    position: "Social Media Director",
    imageSrc: Catherine,
    name: "Catherine Sanchez",
    pronouns: "she/her/hers",
    info: "4th year Psychology major, Public Policy minor",
  },
  {
    position: "Social Media Committee",
    imageSrc: Alexa,
    name: "Alexa Zelaya",
    pronouns: "she/her/hers",
    info: "3rd year Psychology major, Education minor",
  },
  {
    position: "Coordinator",
    imageSrc: Angie,
    name: "Angie Santander",
    pronouns: "she/her/hers",
    info: "2nd year Psychology major",
  },
  {
    position: "Representative",
    imageSrc: Alexander,
    name: "Alexander Tang",
    pronouns: "he/him/his",
    info: "1st year Psychology major",
  },
];
