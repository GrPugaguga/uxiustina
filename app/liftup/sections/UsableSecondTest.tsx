'use client';

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlockText, PrivacyText } from "@/ui-kit";

export default function UsableSecondTest() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "0.6 center"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"], {
        ease: (t) => 1 - Math.pow(1 - t, 3)
    });

    return (
        <>
            <PrivacyText title="Юзабилити тестирование №2" className="sm:hidden">
                На этом этапе фокус сместился на визуальное восприятие и приоритетность функций.
                <br/><br/>
                Проблемы: Визуальный перегруз цветом, отвлекающий от целевых действий, и неочевидность функции добавления упражнения.
                <br/><br/>
                Решение: Внедрена система точечных акцентов вместо избыточной заливки, усилен визуальный приоритет кнопки добавления упражнения.
            </PrivacyText>

            <div className="hidden sm:grid grid-cols-5 gap-7 w-full">
                <div className="col-span-2">
                    <BlockText title="Юзабилити тестирование №2">
                        На этом этапе фокус сместился на визуальное восприятие и приоритетность функций.
                        <br/><br/>
                        Проблемы: Визуальный перегруз цветом, отвлекающий от целевых действий, и неочевидность функции добавления упражнения.
                        <br/><br/>
                        Решение: Внедрена система точечных акцентов вместо избыточной заливки, усилен визуальный приоритет кнопки добавления упражнения.
                    </BlockText>
                </div>
                <div
                    ref={containerRef}
                    className="col-span-3 bg-grey-bg-primary border border-grey-stroke rounded-[20px] px-15 py-22.5 flex items-center justify-center overflow-hidden relative"
                >
                    {/* Первый набор картинок */}
                    <div className="flex justify-between gap-5 z-10 w-full max-w-134">
                        <Image
                            src="/image/LiftUp/sections/secondtest/4 1.png"
                            alt="Second test 1"
                            width={208}
                            height={450}
                            className="w-52 h-auto"
                        />
                        <Image
                            src="/image/LiftUp/sections/secondtest/2 4.png"
                            alt="Second test 2"
                            width={208}
                            height={450}
                            className="w-52 h-auto"
                        />
                    </div>

                    {/* Второй набор картинок — выезжает снизу */}
                    <motion.div
                        className="flex justify-between gap-5 absolute z-20 left-15 right-15 max-w-134 mx-auto"
                        style={{ y: translateY }}
                    >
                        <Image
                            src="/image/LiftUp/sections/secondtest/2 4.png"
                            alt="Second test 3"
                            width={208}
                            height={450}
                            className="w-52 h-auto"
                        />
                        <Image
                            src="/image/LiftUp/sections/secondtest/4 1.png"
                            alt="Second test 4"
                            width={208}
                            height={450}
                            className="w-52 h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
