import { ParallaxHero } from "./components/ParallaxHero";
import { ContentSection } from "./components/ContentSection";
import { WorkExperience } from "./components/WorkExperience";
import { Skills } from "./components/Skills";
import { LatestProjects } from "./components/LatestProjects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white">
      <ParallaxHero />
      <ContentSection />
      <WorkExperience />
      <Skills />
      <LatestProjects />
      <Footer />
    </div>
  );
}