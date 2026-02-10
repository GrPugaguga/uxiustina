import { RowImage, ProblemText } from "@/ui-kit"

export default function Congestion() {
    return (
        <div className="flex flex-col-reverse gap-5 sm:grid sm:grid-cols-5 sm:gap-7">
            <div className="sm:col-span-2">
                <ProblemText problem={"Перегруженность и\u00A0сложность интерфейса"}>
                    {'Оптимизированный интерфейс тренировок: минимизация ручного ввода, автозапоминание параметров, фокус на\u00A0текущем упражнении'}
                </ProblemText>
            </div>
            <div className="sm:col-span-3">
                <RowImage
                    images={[
                        "/image/LiftUp/sections/pain/Group 132.png",
                        "/image/LiftUp/sections/pain/Group 134.png"
                    ]}
                    cols={3}
                    gap={28}
                />
            </div>
        </div>
    )
}
