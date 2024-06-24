
import HeroSection from '../hero/HeroSection';
import LatestProject from '../latestProject/LatestProject';
import ProjectsCardsSection from '../project/ProjectsCardsSection';
import SkillSection from '../skills/SkillSection';
import MenuBarSection from '../menu/MenuBarSection';
import React from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import BlogsCardSection from '../Blogs/BlogsCardSection';

function Home() {

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
        <>
            <MenuBarSection btnDownloadCVPopUpRef={btnDownloadCVPopUpRef} />
            <HeroSection scrollToProjects={scrollToProjects} />
            <LatestProject />
            <ProjectsCardsSection projectSectionRef={projectSectionRef} />
            <SkillSection />
            <BlogsCardSection />
            <ScrollToTop btnScrollToTopRef={btnScrollToTopRef} />
        </>
    );
}

export default Home;
