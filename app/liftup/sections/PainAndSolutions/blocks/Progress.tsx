import { RowImage, ProblemText } from "@/ui-kit"

export default function Progress() {
    return (
        <div className=" flex flex-col-reverse gap-5 sm:grid sm:grid-cols-5 sm:gap-7">
            <div className="sm:col-span-2 flex flex-col gap-3">
                <ProblemText problem="Отсутствие понимания прогресса">
                    {"Визуализация прогресса: графики, история тренировок, сравнение периодов, ии\u00A0анализ с\u00A0возможность внести изменения в\u00A0программу"}
                </ProblemText>
                <ProblemText problem="Низкая ценность геймификации">
                   {"Мотивация через реальные достижения и\u00A0наглядный прогресс вместо игровых механик"}
                </ProblemText>
            </div>
            <div className="sm:col-span-3">
                <RowImage
                    images={[
                        "/image/LiftUp/sections/pain/Group 120.png",
                        "/image/LiftUp/sections/pain/Group 121.png",
                        "/image/LiftUp/sections/pain/Group 122.png"
                    ]}
                    cols={3}
                    gap={28}
                />
            </div>
        </div>
    )
}
