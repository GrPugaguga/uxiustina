import { Actions } from "../shared";
import { MainDashboard, Note, ProblemAndHypothesis, RoleAndResearch} from "./sections";

export default function Saas() {
  return (
    <div className="min-h-screen pt-40 gap-30 bg-background-white flex flex-col items-center">
      <MainDashboard/>
      <RoleAndResearch/>
      <ProblemAndHypothesis />
      <Note/>
      <Actions/>
      <div></div>
    </div>
  );
}
