import Pyschology from "@/components/about/PsychologyPanel";
import MindStar from "@/components/about/DestressWorkshops";
import Volunteer from "@/components/about/Volunteer";
import AboutUs from "@/components/about/homePage";

const Home = () => {
  return (
    <div className="w-full">
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
