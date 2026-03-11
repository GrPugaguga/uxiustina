"use client";
import { useState } from "react";

function HypothesisTab({ number, active, onClick }: { number: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-[55px] rounded-[12px] px-5 py-4 text-[20px] font-regular text-center cursor-pointer ${active ? "bg-accent-primary text-background-white" : "bg-accent-light text-background-white"}`}
    >
      {number}
    </button>
  );
}

export default function HypothesisCheck() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative w-full">
      <div className="absolute left-1/2 -translate-x-1/2 w-360 h-160 rounded-[40px] bg-grey-bg-primary" />
      <div className="relative grid grid-cols-8 gap-5 py-20 h-160">
        <div className="col-start-1 col-span-2 flex flex-col gap-4">
          <span className="font-semibold text-[24px] leading-6.5 text-black">Проверка гипотез</span>
          <span className="font-normal text-[16px] leading-5.25 text-black">После формулировки гипотез мы проверили, выдерживает ли предложенная логика реальные сценарии работы.</span>
        </div>
        <div className="col-start-3 col-span-6 flex flex-col gap-5">
          <div className="flex flex-row gap-1">
            <HypothesisTab number={1} active={activeTab === 1} onClick={() => setActiveTab(1)} />
            <HypothesisTab number={2} active={activeTab === 2} onClick={() => setActiveTab(2)} />
            <HypothesisTab number={3} active={activeTab === 3} onClick={() => setActiveTab(3)} />
          </div>
        </div>
      </div>
    </div>
  );
}
