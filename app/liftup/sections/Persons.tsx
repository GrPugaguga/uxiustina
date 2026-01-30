import { PrivacyText, BlockText } from "@/ui-kit";
import Image from "next/image";


export default function Persons() {
  const pains = [
    "Отсутствие внутренней мотивации и регулярности в тренировках.",
    "Нехватка структуры и программы занятий.",
    "Непонимание собственного прогресса и результатов."
  ];

  return (
    <>
        {/* Mobile version */}
        <PrivacyText title="Персоны" className="sm:hidden">
            Выявлена ключевая персона — Иван, так как он наиболее полно отражает основную проблему аудитории.
        </PrivacyText>
        <PrivacyText title="Боли аудитории" className="sm:hidden">
            {pains.map((pain, index) => (
                <div key={index}>
                    {index + 1}. {pain}
                    {index < pains.length - 1 && <br />}
                </div>
            ))}
        </PrivacyText>

        {/* Desktop version */}
        <div className="hidden sm:grid grid-cols-5 gap-7">
            <div className="col-span-2 flex flex-col gap-10">
                <BlockText title="Персоны">
                    Выявлена ключевая персона — Иван, так как он наиболее полно отражает основную проблему аудитории.
                </BlockText>
                <BlockText title="Боли аудитории">
                    {pains.map((pain, index) => (
                        <div key={index}>
                            {index + 1}. {pain}
                            {index < pains.length - 1 && <br />}
                        </div>
                    ))}
                </BlockText>
            </div>
            <Image
                src="/image/LiftUp/sections/person/person.png"
                alt="Person"
                width={0}
                height={0}
                sizes="40vw"
                className="col-start-4 col-span-2 w-full h-auto"
            />
        </div>

        <PrivacyText title="CJM & JTBD">
            На основе результатов количественных и качественных исследований были выведены базовые job statements, описывающие ключевые задачи пользователей на разных этапах взаимодействия с фитнес-продуктом. На основе этих job statements и CJM были выделены 8 ключевых пользовательских путей (JTBD), которые легли в основу дальнейшего проектирования сценариев
        </PrivacyText>
    </>
  );
}
