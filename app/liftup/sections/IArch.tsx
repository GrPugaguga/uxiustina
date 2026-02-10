import { ImageCarousel } from "@/ui-kit";

export default function IArch() {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-10 w-full">
        <h2 className="text-6 font-semibold leading-6.5 text-black">
            Информационная архитектура
        </h2>
        <ImageCarousel
            images={["/image/LiftUp/sections/iarch/Group 111.png"]}
            height={650}
            mobileHeight={184}
            noBackground
        />
    </div>
  );
}
