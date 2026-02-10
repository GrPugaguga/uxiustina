import Image from "next/image";

export default function FirstImage() {
  return (
    <div className="relative w-88.25 h-67 sm:w-234.25 sm:h-177.5 overflow-hidden">
      <Image
        src="/image/LiftUp/sections/first/Group 114.png"
        alt="LiftUp Onboarding"
        width={471}
        height={923}
        className="absolute w-[29%] h-auto left-[1%] top-[1%]"
      />
      <Image
        src="/image/LiftUp/sections/first/Group 115.png"
        alt="LiftUp Progress"
        width={471}
        height={923}
        className="absolute w-[29%] h-auto left-[35.5%] top-[8.5%]"
      />
      <Image
        src="/image/LiftUp/sections/first/Group 116.png"
        alt="LiftUp Profile"
        width={471}
        height={923}
        className="absolute w-[29%] h-auto left-[70%] top-[17%]"
      />
    </div>
  );
}
