import Pyschology from "@/components/about/PsychologyPanel";
import MindStar from "@/components/about/DestressWorkshops";
import Volunteer from "@/components/about/Volunteer"

const Home = () => {
  return (
    <div className="flex justify-around items-center">
      <Pyschology />
      <MindStar />
      <Volunteer />
    </div>
  );
};
export default Home;
