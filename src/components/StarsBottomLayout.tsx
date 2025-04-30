import Pyschology from "../components/PsychologyPanel";
import MindStar from "../components/StarLogo";

import Volunteer from "../components/Volunteer";

const Component = () => {
  return (
    <div className="flex flex-row items-center bg-[#F9F5EF] p-6">
      <Pyschology />
      <MindStar />
      <Volunteer />
    </div>
  );
};
export default Component;
