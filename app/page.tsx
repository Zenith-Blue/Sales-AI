import FV from "./components/FV";
import Worries from "./components/Worries";
import GiftBanner from "./components/GiftBanner";
import GiftList from "./components/GiftList";
import CourseFeature from "./components/CourseFeature";
import Testimonials from "./components/Testimonials";
import WhySalesSkill from "./components/WhySalesSkill";
import Reassurance from "./components/Reassurance";
import SecondCTA from "./components/SecondCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FV />
        <Worries />
        <GiftBanner />
        <GiftList />
        <CourseFeature />
        <Testimonials />
        <WhySalesSkill />
        <Reassurance />
        <SecondCTA />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
