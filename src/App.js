
import './App.css';
import HeroSection from './components/hero/HeroSection';
import LatestProject from './components/latestProject/LatestProject';
import ProjectsCardsSection from './components/project/ProjectsCardsSection';

import SkillSection from './components/skills/SkillSection';
import MenuBarSection from './components/menu/MenuBarSection';
import FooterSection from './components/footer/footerSection';
import React from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  const projectSectionRef = React.useRef(null);
  const btnScrollToTopRef = React.useRef(null);
  const btnDownloadCVPopUpRef = React.useRef(null);

  const scrollToProjects = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    // Get the button:
    const scrollToTopBtn = btnScrollToTopRef.current;
    const downloadCVBtn = btnDownloadCVPopUpRef.current;
    // When the user scrolls down 450px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollTop > 700) {
        scrollToTopBtn.style.display = "flex";
      } else if (scrollTop > 450) {
        downloadCVBtn.style.display = "flex";
      } else {
        scrollToTopBtn.style.display = "none";
        downloadCVBtn.style.display = "none";
      }
    }

    // Clean up the event listener on component unmount
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="App">
      <MenuBarSection btnDownloadCVPopUpRef={btnDownloadCVPopUpRef} />
      <HeroSection scrollToProjects={scrollToProjects} />
      <LatestProject />
      <ProjectsCardsSection projectSectionRef={projectSectionRef} />
      <SkillSection />
      <FooterSection />
      <ScrollToTop btnScrollToTopRef={btnScrollToTopRef} />
    </div>
  );
}

export default App;
