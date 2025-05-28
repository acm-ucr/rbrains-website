import Pyschology from "@/components/about/PsychologyPanel";
import MindStar from "@/components/about/DestressWorkshops";
import Volunteer from "@/components/about/Volunteer";
import AboutUs from "@/components/about/homePage";
import HomeLanding from "@/components/about/HomeLanding";

const Home = () => {
  return (
    <div className="w-full">
      <HomeLanding />
      <AboutUs />
      <div className="flex place-content-center items-center justify-center gap-40">
        <Pyschology />
        <MindStar />
        <Volunteer />
      </div>
    </div>
  );
};
export default Home;
