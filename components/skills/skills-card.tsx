import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:border-primary/50 hover:shadow-sm"
        >
          <div className="flex min-h-[190px] flex-col justify-between rounded-md p-6">
            <skill.icon size={44} className="text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
