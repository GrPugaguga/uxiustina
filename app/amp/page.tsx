import { Actions } from "../shared";
import { DashBoardExample, FirstExample, HypothesisCheck, MainDashboard, Note, ProblemAndHypothesis, Research, Role, SecondExample, StagesOfWork, UXSolutions} from "./sections";

export default function Saas() {
  return (
    <>
    <div className="min-h-screen flex md:hidden items-center justify-center bg-background-white">
      <span className="font-semibold text-[24px] leading-6.5 text-black">Мобильная версия в разработке</span>
    </div>
    <div className="min-h-screen pt-40 gap-30 bg-background-white hidden md:flex flex-col items-center">
      <MainDashboard/>
      <Role/>
      <StagesOfWork/>
      <Research />
      <ProblemAndHypothesis />
      <HypothesisCheck/>
      <UXSolutions/>
      <FirstExample/>
      <SecondExample/>
      <DashBoardExample />
      <Note/>
      <Actions/>
      <div></div>
    </div>
    </>
  );
}
