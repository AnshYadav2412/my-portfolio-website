import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "dsa-tracker",
    companyName: "DSA Tracker",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "AI-Powered Coding Progress Platform featuring curated problem sheets, progress analytics, and Ollama AI recommendations.",
    websiteLink: "https://github.com/AnshYadav2412",
    githubLink: "https://github.com/AnshYadav2412",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Ollama",
    ],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2026-02-01"),
    companyLogoImg: "",
    pagesInfoArr: [
      {
        title: "Dashboard & Analytics",
        description: "Curated problem sheets, progress analytics, and smart problem recommendations.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "DSA Tracker is an AI-powered coding progress platform built to help developers systematically prepare for technical interviews with smart recommendations and analytics.",
        "It integrates an Ollama AI recommendation engine that analyzes solving history, topic coverage, and knowledge gaps to dynamically suggest optimal next problems.",
      ],
      bullets: [
        "Architected a responsive full-stack platform with curated problem sheets, progress analytics, notes, topic-filtering, and solved-problem mapping.",
        "Integrated an Ollama AI recommendation engine analyzing solving history, topic coverage, and knowledge gaps.",
        "Secured authentication via JWT and bcrypt; architected modular schemas for tracking solution revisions and submissions.",
      ],
    },
  },
  {
    id: "medisync",
    companyName: "MediSync",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "AI-Powered Personal Health Record Platform converting unstructured medical documents into structured, searchable patient data.",
    websiteLink: "https://github.com/AnshYadav2412",
    githubLink: "https://github.com/AnshYadav2412",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "LangChain",
      "LangGraph",
      "Python",
      "FastAPI",
      "MongoDB",
      "QdrantDB",
    ],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "",
    pagesInfoArr: [
      {
        title: "Medical Record Timeline",
        description: "Interactive timeline with OCR extraction and clinical summaries.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MediSync is an AI-assisted personal health record platform that transforms messy and unstructured medical documents into structured, actionable, and searchable clinical data.",
        "It provides an intelligent conversational assistant capable of querying longitudinal medical records with high semantic precision using vector databases.",
      ],
      bullets: [
        "Engineered an ingestion pipeline using Tesseract OCR and LLMs to extract clinical entities from prescriptions, lab reports, and discharge summaries.",
        "Implemented an interactive health timeline and automated AI-generated summaries for patient visits.",
        "Built a conversational assistant using LangChain and LangGraph over QdrantDB vector storage to query longitudinal medical history with semantic search.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 2);
