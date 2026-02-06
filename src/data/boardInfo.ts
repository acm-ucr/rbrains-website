import Rishitha from "@/public/board/Rishitha_Mahi_Kona.jpg";
import Angie from "@/public/board/Angie_Santander_Salazar.jpg";
import Sagey from "@/public/board/Sagey_Moorjani.jpg";
import Abby from "@/public/board/Abby_Lazar.jpg";
import Shriya from "@/public/board/Shriya_Patel.jpg";
import Aazaan from "@/public/board/Aazaan_Chhabra.jpg";
import Mary from "@/public/board/Mary_Abdou.jpg";
import Edith from "@/public/board/Edith_Rodriguez.jpg";
import Joseph from "@/public/board/Joseph_Ashkar.jpg";
import Yami from "@/public/board/Yami_Ramirez_Rosales.jpg";
import Myra from "@/public/board/Myra_Perialde.jpg";

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
    name: "Rishitha Mahi Kona",
    pronouns: "she/her/hers",
    info: "4rd year Psychology and Business major, Cognitive",
  },
  {
    position: "Vice President",
    imageSrc: Angie,
    name: "Angie Santander Salazar",
    pronouns: "she/her/hers",
    info: "3rd year Psychology, Developmental",
  },
  {
    position: "Treasurer",
    imageSrc: Sagey,
    name: "Sagey Moorjani",
    pronouns: "she/her/hers",
    info: "3nd year Psychology major, Clinical",
  },
  {
    position: "Social Media Chair",
    imageSrc: Abby,
    name: "Abby Lazar",
    pronouns: "she/her/hers",
    info: "4th year Psychology major, Social",
  },
  {
    position: "Public Relations Chair",
    imageSrc: Shriya,
    name: "Shriya Patel",
    pronouns: "she/her/hers",
    info: "4th year Psychology major, Cognitive/Clinical",
  },
  {
    position: "Secretary",
    imageSrc: Aazaan,
    name: "Aazaan Chhabra",
    pronouns: "she/her/hers",
    info: "3rd year Psychology major, Clinical",
  },
  {
    position: "Social Media Committee",
    imageSrc: Mary,
    name: "Mary Abdou",
    pronouns: "she/her/hers",
    info: "2nd year Psychology major, Personality",
  },
  {
    position: "Social Media Committee",
    imageSrc: Edith,
    name: "Edith Rodriguez",
    pronouns: "she/her/hers",
    info: "3rd year Psychology major, Personality",
  },
  {
    position: "Club Representative/Mentor",
    imageSrc: Joseph,
    name: "Joseph Ashkar",
    pronouns: "he/him/his",
    info: "4th year Psychology major, Criminal",
  },
  {
    position: "Club Representative/Mentor",
    imageSrc: Yami,
    name: "Yami Ramirez Rosales",
    pronouns: "she/her/hers",
    info: "4th year Psychology major, Personality/Cognitive",
  },
  {
    position: "Club Representative/Mentor",
    imageSrc: Myra,
    name: "Myra Perialde",
    pronouns: "she/her/hers",
    info: "3rd year Psychology major, Social/Personality",
  },
];
