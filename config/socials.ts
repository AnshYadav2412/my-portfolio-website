import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@AnshYadav2412",
    icon: Icons.gitHub,
    link: "https://github.com/AnshYadav2412",
  },
  {
    name: "LinkedIn",
    username: "Ansh Kumar Yadav",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/anshyadav2412/",
  },
  {
    name: "LeetCode",
    username: "2412anshyadav",
    icon: Icons.leetcode,
    link: "https://leetcode.com/u/2412anshyadav/",
  },
  {
    name: "Gmail",
    username: "2412anshyadav@gmail.com",
    icon: Icons.gmail,
    link: "mailto:2412anshyadav@gmail.com",
  },
];

