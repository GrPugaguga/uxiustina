import { RowImage, ProblemText } from "@/ui-kit"

export default function Congestion() {
    return (
        <div className="flex flex-row gap-12 justify-between">
           <ProblemText problem="Перегруженность и сложность интерфейса">
               Оптимизированный интерфейс тренировок: минимизация ручного ввода, автозапоминание параметров, фокус на текущем упражнении
            </ProblemText>
            {/* TODO: 2 картинки, но места должно занимать как будто 3 */}
            <RowImage
                images={[
                    "/image/LiftUp/sections/pain/а 1.png",
                    "/image/LiftUp/sections/pain/а 2.png",
                    "/image/LiftUp/sections/pain/а 3.png"
                ]}
                gap={16}
                height={460}
            />
        </div>
    )
}