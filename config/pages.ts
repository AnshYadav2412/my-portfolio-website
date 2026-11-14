import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ansh Kumar Yadav's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description: "Ansh Kumar Yadav's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Ansh Kumar Yadav's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ansh Kumar Yadav.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ansh Kumar Yadav's resume.",
    metadata: {
      title: "Resume",
      description: "Ansh Kumar Yadav's resume.",
    },
  },
  experience: {
    title: "Education",
    description: "Academic background and qualification timeline.",
    metadata: {
      title: "Education",
      description: "Ansh Kumar Yadav's academic background at NIT Jamshedpur.",
    },
  },
  dsa: {
    title: "DSA & Problem Solving",
    description: "Consistent problem solving and algorithmic reasoning track record on LeetCode.",
    metadata: {
      title: "DSA & Problem Solving",
      description: "Ansh Kumar Yadav's LeetCode statistics and algorithmic achievements.",
    },
  },
};
