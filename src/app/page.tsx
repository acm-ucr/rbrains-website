import Pyschology from "@/components/about/PsychologyPanel";
import MindStar from "@/components/about/DestressWorkshops";
import Volunteer from "@/components/about/Volunteer";

const Home = () => {
  return (
    <div className="flex items-center justify-around">
      <Pyschology />
      <MindStar />
      <Volunteer />
    </div>
  );
};
export default Home;
