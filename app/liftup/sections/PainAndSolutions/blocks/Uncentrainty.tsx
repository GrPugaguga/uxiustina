import { RowImage, ProblemText } from "@/ui-kit"

export default function Uncentrainty() {
    return (
        <div className="flex flex-row gap-12.5 justify-between">
            <RowImage
                images={[
                    "/image/LiftUp/sections/pain/а 1.png",
                    "/image/LiftUp/sections/pain/а 2.png",
                    "/image/LiftUp/sections/pain/а 3.png"
                ]}
                gap={16}
                height={460}
            />
            <ProblemText problem="Неуверенность при самостоятельных тренировках">
                Персонализированные тренировочные планы, адаптированные под цели, уровень и ограничения, с объяснением логики упражнений и последовательности
            </ProblemText>
        </div>
    )
}