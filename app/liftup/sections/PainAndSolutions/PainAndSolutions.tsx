import { Uncentrainty, Progress, Target, Congestion } from "./blocks";

export default function PainAndSolutions() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <h2 className="text-6 font-semibold leading-6.5 text-black">
                Потребности & продуктовые решения
            </h2>
            <div className="flex flex-col gap-25 sm:gap-30">
                <Uncentrainty />
                <Progress />
                <Target />
                <Congestion />
            </div>
        </div>
    )
}