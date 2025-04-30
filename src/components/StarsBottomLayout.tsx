import Pyschology from "./PsychologyPanel";
import MindStar from "./StarLogo";
import Volunteer from "./Volunteer";

const Component = () => {
  return (
    <div className="flex flex-row bg-[#F9F5EF] p-6">
      <Pyschology />
      <MindStar />
      <Volunteer />
    </div>
  );
};
export default Component;
