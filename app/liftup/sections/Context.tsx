import { PrivacyText, ImageCarousel } from "@/ui-kit";


export default function Context() {
  return (
    <>
        <PrivacyText title="Контекст">
            Самостоятельные тренировки часто сопровождаются отсутствием чёткой структуры, контроля прогрессии и понимания дальнейших шагов. 
            Цель проекта — разработка фитнес-приложения, которое объединяет планирование, отслеживание результатов и интеллектуальные рекомендации в единой системе.
        </PrivacyText>
        <PrivacyText title="Исследования">
            Проведен комплексный ресерч через Google Forms собраны количественные данные, на основе которых выделены ключевые сегменты и созданы персоны. Далее проведены глубинные интервью и кабинетное исследование, что позволило детализировать боли, потребности и сценарии использования продукта.
        </PrivacyText>
        <ImageCarousel
          images={[
            "/image/LiftUp/sections/context/12.png",
            "/image/LiftUp/sections/context/25.png",
            "/image/LiftUp/sections/context/32.png",
            "/image/LiftUp/sections/context/42.png"
          ]}
          height={500}
        />
    </>
  );
}
