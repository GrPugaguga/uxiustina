import { RowImage, ProblemText } from "@/ui-kit"

export default function Target() {
    return (
        <div className="flex flex-col gap-12">
           <ProblemText problem="Отсутствие системы целеполагания">
               Внедрена «Постановка целей»: пользователь выбирает приоритет (сила, выносливость, рельеф) и задает метрики. Прогресс отслеживается через дашборды, что дает обратную связь и повышает мотивацию за счет наглядной эффективности тренировок.
            </ProblemText>
            <RowImage
                images={[
                    "/image/LiftUp/sections/pain/а 1.png",
                    "/image/LiftUp/sections/pain/а 2.png",
                    "/image/LiftUp/sections/pain/а 3.png",
                    "/image/LiftUp/sections/pain/а 1.png",
                    "/image/LiftUp/sections/pain/а 2.png"
                ]}
                gap={16}
                height={460}
            />
        </div>
    )
}