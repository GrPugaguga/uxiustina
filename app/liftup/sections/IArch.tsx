import Image from "next/image";

export default function IArch() {
  return (
    <div className="flex flex-col gap-10 w-full">
        <h2 className="text-6 font-semibold leading-6.5 text-black">
            Информационная архитектура
        </h2>
        <div className="w-max-310 w-full h-162.5 bg-grey-bg-primary border border-grey-stroke rounded-[20px] relative overflow-hidden">
            <Image
                src="/image/LiftUp/sections/iarch/Rectangle (1).png"
                alt="Информационная архитектура"
                fill
                className="object-scale-down"
            />
        </div>
    </div>
  );
}
