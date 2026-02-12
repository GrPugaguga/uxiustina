import { PrivacyText, ImageCarousel } from "@/ui-kit";


export default function Context() {
  return (
    <>
        <PrivacyText title="Контекст">
           {" Самостоятельные тренировки часто\u00A0сопровождаются отсутствием чёткой структуры, контроля прогрессии и\u00A0понимания дальнейших шагов."} 
           {" Цель проекта — разработка фитнес-приложения, которое объединяет планирование, отслеживание результатов и\u00A0интеллектуальные рекомендации в\u00A0единой системе."}
        </PrivacyText>
        <PrivacyText title="Исследования">
            {"Проведен комплексный ресерч через Google Forms. Собраны количественные данные, на\u00A0основе которых выделены ключевые сегменты и\u00A0созданы персоны. Далее проведены глубинные интервью и\u00A0кабинетное исследование, что\u00A0позволило детализировать боли, потребности и\u00A0сценарии использования продукта."}
        </PrivacyText>
        <ImageCarousel
          images={[
            "/image/LiftUp/sections/context/interview_1.png",
            "/image/LiftUp/sections/context/interview_2.png",
            "/image/LiftUp/sections/context/result.png",
            "/image/LiftUp/sections/context/research.png"
          ]}
          height={650}
          mobileHeight={204}
        />
    </>
  );
}
