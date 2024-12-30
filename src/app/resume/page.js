import { Timeline } from "@/components/ui/timeline";
import { Brain, Users, MessageSquare, Lightbulb, Clock } from "lucide-react";

export default function ResumePage() {
  const timelineItems = {
    education: [
      {
        title: "B.Tech in Computer Science",
        organization: "NIT Patna",
        duration: "2021 - Present",
        details: "CGPA: 6.77",
      },
      {
        title: "Intermediate",
        organization: "Bihar School Examination Board",
        duration: "2019 - 2021",
        details: "Percentage: 72.6%",
      },
      {
        title: "Matriculation",
        organization: "CBSE",
        duration: "2019",
        details: "Percentage: 87.4%",
      },
    ],
    experience: [
      {
        title: "Machine Learning Intern",
        organization: "EISystems Services",
        duration: "May 2024 – July 2024",
        details: [
          "Working with ML algorithms and model development",
          "Practical application of machine learning concepts",
          "Project development and implementation",
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      
      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <Timeline items={timelineItems.education} />
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <Timeline items={timelineItems.experience} />
      </section>

      {/* Achievements Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
          <li>Solved 500+ DSA questions</li>
          <li>Byteverse Hackathon: Top 20 teams at NIT Patna</li>
          <li>Secured AIR 3766 in JEE 2021</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <SkillCategory 
              title="Languages"
              skills={["Python", "C++", "JavaScript", "SQL"]}
            />
            <SkillCategory 
              title="Web Technologies"
              skills={["React.js", "Next.js", "HTML", "CSS"]}
            />
            <SkillCategory 
              title="Databases"
              skills={["MongoDB", "PostgreSQL"]}
            />
            <SkillCategory 
              title="Tools"
              skills={["Git", "Docker", "VS Code"]}
            />
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>
          <div className="space-y-3">
            <SoftSkillItem
              icon={Brain}
              skill="Problem Solving"
              color="text-blue-500"
              bgColor="bg-blue-500/10"
            />
            <SoftSkillItem
              icon={Users}
              skill="Team Collaboration"
              color="text-green-500"
              bgColor="bg-green-500/10"
            />
            <SoftSkillItem
              icon={MessageSquare}
              skill="Communication"
              color="text-purple-500"
              bgColor="bg-purple-500/10"
            />
            <SoftSkillItem
              icon={Lightbulb}
              skill="Adaptability"
              color="text-yellow-500"
              bgColor="bg-yellow-500/10"
            />
            <SoftSkillItem
              icon={Clock}
              skill="Time Management"
              color="text-red-500"
              bgColor="bg-red-500/10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-sm text-muted-foreground">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-foreground">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function SoftSkillItem({ icon: Icon, skill, color, bgColor }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
      <div className={`p-2 rounded-lg ${bgColor}`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <span className="text-foreground">{skill}</span>
    </div>
  );
} 