import { BlockText, RowImage } from "@/ui-kit";


export default function UsableSecondTest() {
  return (
    <div className="grid grid-cols-5 gap-7 w-full">
        <div className="col-span-2">
            <BlockText title="Юзабилити тестирование №2">
                На этом этапе фокус сместился на визуальное восприятие и приоритетность функций.
                <br/><br/>
                Проблемы: Визуальный перегруз цветом, отвлекающий от целевых действий, и неочевидность функции добавления упражнения.
                <br/><br/>
                Решение: Внедрена система точечных акцентов вместо избыточной заливки, усилен визуальный приоритет кнопки добавления упражнения.
            </BlockText>
        </div>
        <div className="col-span-3 bg-grey-bg-primary border border-grey-stroke rounded-[20px] px-15 py-22.5 flex items-center justify-center">
            <RowImage
                images={[
                    "/image/LiftUp/sections/secondtest/4 1.png",
                    "/image/LiftUp/sections/secondtest/2 4.png"
                ]}
                cols={2}
                gap={120}
            />
        </div>
    </div>
  );
}
