import { RowImage, ProblemText } from "@/ui-kit"

export default function Congestion() {
    return (
        <div className="flex flex-col-reverse gap-5 sm:grid sm:grid-cols-5 sm:gap-7">
            <div className="sm:col-span-2">
                <ProblemText problem="Перегруженность и сложность интерфейса">
                    Оптимизированный интерфейс тренировок: минимизация ручного ввода, автозапоминание параметров, фокус на текущем упражнении
                </ProblemText>
            </div>
            <div className="sm:col-span-3">
                <RowImage
                    images={[
                        "/image/LiftUp/sections/pain/а 1.png",
                        "/image/LiftUp/sections/pain/а 2.png"
                    ]}
                    cols={3}
                    gap={28}
                />
            </div>
        </div>
    )
}
