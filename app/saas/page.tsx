import { Actions } from "../shared";
import { HypothesisCheck, MainDashboard, Note, ProblemAndHypothesis, Research, Role, StagesOfWork, UXSolutions} from "./sections";

export default function Saas() {
  return (
    <div className="min-h-screen pt-40 gap-30 bg-background-white flex flex-col items-center">
      <MainDashboard/>
      <Role/>
      <StagesOfWork/>
      <Research />
      <ProblemAndHypothesis />
      <HypothesisCheck/>
      <UXSolutions/>
      <Note/>
      <Actions/>
      <div></div>
    </div>
  );
}
