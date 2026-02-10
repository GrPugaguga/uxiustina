import { FirstImage, Context, Persons, JTBD, IArch, DidntEnter, UsableFirstTest, UsableSecondTest, Actions, PainAndSolutions } from "./sections";

export default function LiftUp() {
  return (
    <div className="min-h-screen pt-32.5 bg-background-white flex flex-col items-center">
      {/* Hero Image */}
        <FirstImage />

      {/* Content Block */}
      <div className="mt-15 sm:mt-30 flex flex-col gap-15 sm:gap-30 w-full items-center">
        <Context/>
        <Persons/>
        <JTBD />
        <IArch />
        <UsableFirstTest />
        <PainAndSolutions />
        <UsableSecondTest />
        <DidntEnter />
        <Actions />
        <div></div>
      </div>
    </div>
  );
}
