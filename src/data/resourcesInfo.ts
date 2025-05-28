export interface resource {
  Title: string;
  TitleColor: string;
  Body: string;
  Post: string;
  Button: string;
}

export const resources: resource[] = [
  {
    Title: "UCR's Health Promotion and Education Department",
    TitleColor: "text-[#D66E6D]",
    Body: `"The Well provides students with health education tools, knowledge, resources, 
            and supplies to keep themselves as healthy as possible so
            they can succeed at UCR and beyond."`,
    Post: "Learn more about resources",
    Button: "The Well",
  },
  {
    Title: "Counseling & Psychological Services (CAPS)",
    TitleColor: "text-[#72A0C7]",
    Body: `"CAPS is dedicated to creating a positive, healthy atmosphere for our 
    undergraduate and graduate student populations, working hand-in-hand with students to provide access to mental health 
    resources that support and promote their academic, career, personal and social development."`,
    Post: "Learn more about resources",
    Button: "CAPS",
  },
  {
    Title: "Campus Advocacy, Resources & Education (CARE)",
    TitleColor: "text-[#846FA8]",
    Body: `"CARE is an intervention and prevention support program committed to ending 
    sexual violence at UC Riverside. We seek to unite, inspire and cultivate a community 
    culture of care by providing direct advocacy, resources and prevention educational programming
    related to issues of sexual assault, relationship violence and stalking to students, staff, faculty and UCR affiliates."`,
    Post: "Learn more about resources",
    Button: "CAPS",
  },
];
