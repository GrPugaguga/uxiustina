import { RowImage, ProblemText } from "@/ui-kit"

export default function Target() {
    return (
        <div className="flex flex-col-reverse sm:flex-col gap-5 sm:gap-10">
            <ProblemText problem="Отсутствие системы целеполагания">
                {"Внедрена «Постановка целей»: пользователь выбирает приоритет (сила, выносливость, рельеф) и\u00A0задает метрики. Прогресс отслеживается через дашборды, что\u00A0дает обратную связь и\u00A0повышает мотивацию за\u00A0счет наглядной эффективности тренировок."}
            </ProblemText>
            <RowImage
                images={[
                    "/image/LiftUp/sections/pain/Group 123.png",
                    "/image/LiftUp/sections/pain/Group 125.png",
                    "/image/LiftUp/sections/pain/Group 126.png",
                    "/image/LiftUp/sections/pain/Group 127.png",
                    "/image/LiftUp/sections/pain/Group 128.png"
                ]}
                cols={5}
                gap={28}
            />
        </div>
    )
}
