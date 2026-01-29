import { RowImage, ProblemText } from "@/ui-kit"

export default function Progress() {
    return (
        <div className="flex flex-row gap-12.5 justify-between">
            <div className="flex flex-col gap-3">
                <ProblemText problem="Отсутствие понимания прогресса">
                    Визуализация прогресса: графики, история тренировок, сравнение периодов, ии анализ с возможность внести изменения в программу
                </ProblemText>
                <ProblemText problem="Низкая ценность геймификации">
                   Мотивация через реальные достижения и наглядный прогресс вместо игровых механик
                </ProblemText>
            </div>
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