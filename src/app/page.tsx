import HeroSection from "./components/UI/hero/HeroSection";
import StackSection from "./components/UI/stack/StackSection";
import CaseStudySection from "./components/UI/caseStudy/CaseStudySection";
import OtherWorkSection from "./components/UI/otherWork/OtherWorkSection";
import FooterSection from "./components/UI/footer/FooterSection";
import ScrollToTop from "./components/UI/ScrollToTop";
import MenuSection from "./components/UI/menu/MenuSection";

export default function Home() {
  return (
    <>
      <MenuSection />
      <section id="hero-section"></section>
      <HeroSection />
      <section id="stack-section">
        <StackSection />
      </section>
      <section id="projects-section">
        <CaseStudySection />
        <section id="work-section">
          <OtherWorkSection />
        </section>
      </section>
      <section id="contact-section">
        <FooterSection />
      </section>
      <ScrollToTop />
    </>
  );
}
