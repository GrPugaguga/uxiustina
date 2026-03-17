import { BlockTitle, SolutionSpan } from "@/ui-kit";
import Image from "next/image";



function Status({isAlert=false}: { isAlert?: boolean}){
  return (
    <div className="flex flex-row font-sf">
      <div className="w-107 bg-white flex flex-col gap-4 p-5 rounded-xl shadow-[0px_0px_100px_0px_#0000001A]">
        <div className="flex flex-row justify-between">
          <span className="text-black text-[16px] font-semibold">Требуют внимания</span>
          <Image src={`/svg/alert_${isAlert? '1': '0'}.svg` } alt="" width={20} height={20} /> 
        </div>
        <div className="flex flex-row justify-between">
          <span className={" text-[32px] font-medium " + (isAlert ? 'text-grey-main-tertiary' : 'text-alert-accent') }>{isAlert ? '1' : '0'}</span>
          <div className="flex flex-row w-fit self-end justify-between gap-2 px-3 py-2 rounded-lg bg-grey-bg-primary">
            <span className="font-semibold text-black text-[12px]">Перейти</span>
            <Image src="/svg/sort.svg" alt="" width={16} height={16} /> 
          </div>
        </div>
      </div>
      <Image src="/svg/solution_vector.svg" alt="" width={272} height={12} className="-ml-2" /> 
    </div>
  )
}

export default function UXSolutions() {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-15 w-full">
      <BlockTitle text='UX-решения' className=" col-start-11 col-span-2 justify-end"/>
      <div className="col-start-2 col-span-11 -ml-5 flex flex-row ">
        <div className="flex flex-col gap-5 ">
          <Status/>
          <Status isAlert/>
        </div>
        <SolutionSpan text="Четкие статусы обработки" className="self-center ml-3"/>
      </div>
    </div>
  );
}
