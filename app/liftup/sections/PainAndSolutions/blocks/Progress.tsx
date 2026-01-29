import { RowImage, ProblemText } from "@/ui-kit"

export default function Progress() {
    return (
        <div className="grid grid-cols-5 gap-7">
            <div className="col-span-2 flex flex-col gap-3">
                <ProblemText problem="Отсутствие понимания прогресса">
                    Визуализация прогресса: графики, история тренировок, сравнение периодов, ии анализ с возможность внести изменения в программу
                </ProblemText>
                <ProblemText problem="Низкая ценность геймификации">
                   Мотивация через реальные достижения и наглядный прогресс вместо игровых механик
                </ProblemText>
            </div>
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
        </div>
    )
}
