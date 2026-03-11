import { Actions } from "../shared";
import { HypothesisCheck, MainDashboard, Note, ProblemAndHypothesis, Role, StagesOfWork} from "./sections";

export default function Saas() {
  return (
    <div className="min-h-screen pt-40 gap-30 bg-background-white flex flex-col items-center">
      <MainDashboard/>
      <Role/>
      <StagesOfWork/>
      <ProblemAndHypothesis />
      <HypothesisCheck/>
      <Note/>
      <Actions/>
      <div></div>
    </div>
  );
}
