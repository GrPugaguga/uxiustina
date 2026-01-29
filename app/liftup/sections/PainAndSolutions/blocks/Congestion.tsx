import { RowImage, ProblemText } from "@/ui-kit"

export default function Congestion() {
    return (
        <div className="grid grid-cols-5 gap-7">
            <div className="col-span-2 flex">
                <ProblemText problem="Перегруженность и сложность интерфейса">
                    Оптимизированный интерфейс тренировок: минимизация ручного ввода, автозапоминание параметров, фокус на текущем упражнении
                </ProblemText>
            </div>
            <div className="col-span-3">
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
