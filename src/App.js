
import './App.css';
import HeroSection from './components/hero/HeroSection';
import LatestProject from './components/latestProject/LatestProject';
import ProjectsCardsSection from './components/project/ProjectsCardsSection';
import EducationSection from './components/education/EducationSection';
import SkillSection from './components/skills/SkillSection';
import EmployeeSection from './components/employee/EmployeeSection';
import MenuBarSection from './components/menu/MenuBarSection';
import FooterSection from './components/footer/footerSection';
import Banner from './components/banner/banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <MenuBarSection />
      <HeroSection />
      <LatestProject />
      <ProjectsCardsSection />
      <EmployeeSection />
      <EducationSection />
      <SkillSection />
      <FooterSection />
    </div>
  );
}

export default App;
