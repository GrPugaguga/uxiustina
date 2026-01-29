import { PrivacyText, BlockText } from "@/ui-kit";
import Image from "next/image";


export default function Persons() {
  const pains = [
    "Отсутствие внутренней мотивации и регулярности в тренировках.",
    "Нехватка структуры и программы занятий.",
    "Непонимание собственного прогресса и результатов."
  ];

  return (
    <div className="flex flex-col gap-35">
        <div className="flex flex-row gap-69.5 justify-between">
            <div className="flex flex-col gap-10">
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
                width={800}
                height={600}
                className="object-contain"
            />

        </div>

        <PrivacyText title="CJM & JTBD">
            На основе результатов количественных и качественных исследований были выведены базовые job statements, описывающие ключевые задачи пользователей на разных этапах взаимодействия с фитнес-продуктом. На основе этих job statements и CJM были выделены 8 ключевых пользовательских путей (JTBD), которые легли в основу дальнейшего проектирования сценариев
        </PrivacyText>

    </div>
  );
}
