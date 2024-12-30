import { BackgroundLines } from "@/components/ui/background-lines";
import { ArrowDownIcon } from "lucide-react";
import { SkillsSection } from "@/components/sections/home/Skills";

export default function Home() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight">
            Harshvardhan
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium">
            Aspiring Software Developer | Machine Learning Enthusiast | Web Developer
          </p>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDownIcon className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </BackgroundLines>

      {/* Brief Introduction */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-3xl font-bold text-center">Hello, World! 
              <div className="motion-rotate-in-45 motion-ease-spring-bounciest">
            👋
            </div>
             </div>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            I'm a Computer Science student at NIT Patna with a passion for building innovative solutions. 
            I specialize in full-stack development and machine learning, always eager to tackle new challenges 
            and learn cutting-edge technologies.
          </p>
        </div>
      </section>
      <SkillsSection />
    </>
  );
}
