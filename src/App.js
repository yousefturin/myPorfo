
import './App.css';
import HeroSection from './components/hero/HeroSection';
import LatestProject from './components/latestProject/LatestProject';
import ProjectsCardsSection from './components/project/ProjectsCardsSection';
import EducationSection from './components/education/EducationSection';
import SkillSection from './components/skills/SkillSection';
import EmployeeSection from './components/education/EmployeeSection';
import MenuBarSection from './components/menu/MenuBarSection';

function App() {
  return (
    <div className="App">
      <MenuBarSection />
      <HeroSection />
      <LatestProject />
      <ProjectsCardsSection />
      <EmployeeSection />
      <EducationSection />
      <SkillSection />
    </div>
  );
}

export default App;
