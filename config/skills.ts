import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
  category?: string;
  rating?: number;
}

export const skills: skillsInterface[] = [
  {
    name: "AI Workflows & Agents",
    description:
      "Architecting autonomous workflows, LangChain, LangGraph, tool calling, and structured AI agent systems.",
    icon: Icons.workflow,
    category: "AI & ML",
  },
  {
    name: "RAG & Vector Databases",
    description:
      "Retrieval-Augmented Generation, embeddings, semantic search, and vector databases like QdrantDB.",
    icon: Icons.brain,
    category: "AI & ML",
  },
  {
    name: "Next.js (App Router)",
    description:
      "Production-grade full-stack applications with SSR, SSG, Server Actions, and API routes.",
    icon: Icons.nextjs,
    category: "Full Stack",
  },
  {
    name: "React.js",
    description:
      "Modern component-driven architecture with clean state management, hooks, and responsive UX.",
    icon: Icons.react,
    category: "Frontend",
  },
  {
    name: "TypeScript & JavaScript",
    description:
      "Strict typing across client and server architectures for robust, scalable applications.",
    icon: Icons.typescript,
    category: "Full Stack",
  },
  {
    name: "C / C++ & DSA",
    description:
      "Data Structures and Algorithms, object-oriented programming, and high-performance problem solving.",
    icon: Icons.code,
    category: "Core CS",
  },
  {
    name: "Python & FastAPI",
    description:
      "Fast asynchronous APIs, LLM pipeline integrations, OCR processing, and microservice backends.",
    icon: Icons.python,
    category: "Backend",
  },
  {
    name: "Node.js & Express",
    description:
      "Scalable backend architectures, RESTful API design, JWT authentication, and service integrations.",
    icon: Icons.nodejs,
    category: "Backend",
  },
  {
    name: "Databases (MongoDB & Qdrant)",
    description:
      "NoSQL document databases and vector stores for both transactional data and semantic retrieval.",
    icon: Icons.database,
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    description:
      "Crafting elegant, accessible, responsive design systems and polished dark/light themes.",
    icon: Icons.tailwindcss,
    category: "Frontend",
  },
  {
    name: "Git & Developer Tools",
    description:
      "Collaborative version control, GitHub workflows, Postman API testing, and modern dev tooling.",
    icon: Icons.git,
    category: "DevOps",
  },
];

export const featuredSkills = skills.slice(0, 6);
