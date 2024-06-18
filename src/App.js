
import './App.css';
import HeroSection from './components/hero/HeroSection';
import LatestProject from './components/latestProject/LatestProject';
import ProjectsCardsSection from './components/project/ProjectsCardsSection';
// import EducationSection from './components/education/EducationSection';
import SkillSection from './components/skills/SkillSection';
// import EmployeeSection from './components/employee/EmployeeSection';
import MenuBarSection from './components/menu/MenuBarSection';
import FooterSection from './components/footer/footerSection';
import Banner from './components/banner/banner';
import React from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  const projectSectionRef = React.useRef(null);


  const scrollToProjects = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="App">
      <Banner />
      <MenuBarSection />
      <HeroSection scrollToProjects={scrollToProjects} />
      <LatestProject projectSectionRef={projectSectionRef} />
      <ProjectsCardsSection />
      {/* <EmployeeSection /> */}
      {/* <EducationSection /> */}
      <SkillSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
}

export default App;
