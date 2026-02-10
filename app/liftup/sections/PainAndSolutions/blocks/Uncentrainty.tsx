import { RowImage, ProblemText } from "@/ui-kit"

export default function Uncentrainty() {
    return (
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-5 sm:gap-7">
            <div className="sm:col-span-3">
                <RowImage
                    images={[
                        "/image/LiftUp/sections/pain/Group 117.png",
                        "/image/LiftUp/sections/pain/Group 118.png",
                        "/image/LiftUp/sections/pain/Group 119.png"
                    ]}
                    cols={3}
                    gap={28}
                />
            </div>
            <div className="sm:col-span-2">
                <ProblemText problem={"Неуверенность при\u00A0самостоятельных тренировках"}>
                    {'Персонализированные тренировочные планы, адаптированные под\u00A0цели, уровень и\u00A0ограничения, с\u00A0объяснением логики упражнений и\u00A0последовательности'}
                </ProblemText>
            </div>
        </div>
    )
}
