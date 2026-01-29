import { RowImage, ProblemText } from "@/ui-kit"

export default function Uncentrainty() {
    return (
        <div className="grid grid-cols-5 gap-7">
            <div className="col-span-3">
                <RowImage
                    images={[
                        "/image/LiftUp/sections/pain/а 1.png",
                        "/image/LiftUp/sections/pain/а 2.png",
                        "/image/LiftUp/sections/pain/а 3.png"
                    ]}
                    cols={3}
                    gap={28}
                />
            </div>
            <div className="col-span-2 flex">
                <ProblemText problem="Неуверенность при самостоятельных тренировках">
                    Персонализированные тренировочные планы, адаптированные под цели, уровень и ограничения, с объяснением логики упражнений и последовательности
                </ProblemText>
            </div>
        </div>
    )
}
