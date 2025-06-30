import Pyschology from "@/components/about/PsychologyPanel";
import MindStar from "@/components/about/DestressWorkshops";
import Volunteer from "@/components/about/Volunteer";
import AboutUs from "@/components/about/homePage";
import HomeLanding from "@/components/about/HomeLanding";

const Home = () => {
  return (
    <>
      <HomeLanding />
      <AboutUs />
      <div className="flex gap-10 md:flex-row md:justify-center md:gap-40">
        <Pyschology />
        <MindStar />
        <Volunteer />
      </div>
    </>
  );
};
export default Home;
