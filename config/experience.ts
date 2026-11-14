import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "nit-jamshedpur",
    position: "B.Tech in Engineering and Computational Mechanics",
    company: "National Institute of Technology, Jamshedpur",
    location: "Jamshedpur, Jharkhand, India",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2028-06-01"),
    description: [
      "Pursuing Bachelor of Technology (B.Tech) in Engineering and Computational Mechanics at National Institute of Technology, Jamshedpur (Batch of '28).",
      "Current CGPA: 7.51 (Ongoing).",
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOPS).",
    ],
    achievements: [
      "Winner of Hack Horizon 2.0 Hackathon at Arka Jain University, Jamshedpur (2026).",
      "Participated in Hack De Science Hackathon at NIT Jamshedpur (2026).",
      "Core Member, National Service Scheme (NSS), NIT Jamshedpur.",
      "Web Developer for Innoreva Tech Club and Computational Mechanics & Design Club (CMDC).",
    ],
    skills: ["Next.js", "React", "Typescript", "Python", "FastAPI"],
    companyUrl: "https://www.nitjsr.ac.in",
  },
  {
    id: "dhruv-urmila-vidyapeeth",
    position: "Senior Secondary (Class XII - CBSE)",
    company: "Dhruv Urmila Vidyapeeth",
    location: "India",
    startDate: new Date("2022-04-01"),
    endDate: new Date("2024-05-01"),
    description: [
      "Completed Class 12 Senior Secondary education under the Central Board of Secondary Education (CBSE).",
      "Graduated with 88% aggregate in board examinations.",
    ],
    achievements: [
      "Achieved 88% in CBSE Class 12 board examinations.",
      "Strong foundation in Mathematics, Physics, and Chemistry.",
    ],
    skills: ["C/C++"],
  },
  {
    id: "dav-public-school",
    position: "Secondary School (Class X - CBSE)",
    company: "H.S. D.A.V Public School",
    location: "India",
    startDate: new Date("2020-04-01"),
    endDate: new Date("2022-05-01"),
    description: [
      "Completed Class 10 Secondary education under the Central Board of Secondary Education (CBSE).",
      "Secured 94.2% aggregate in matriculation examinations.",
    ],
    achievements: [
      "Achieved 94.2% in CBSE Class 10 board examinations.",
      "Academic excellence distinction across Science and Mathematics.",
    ],
    skills: [],
  },
];
