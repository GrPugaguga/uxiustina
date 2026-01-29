import Image from "next/image";

import Context from "./sections/Context";

export default function LiftUp() {
  return (
    <div className="min-h-screen pt-32.5 px-5 sm:px-25 bg-background-white flex flex-col items-center">
      {/* Hero Image */}
        <Image
          src="/image/LiftUp/liftUp_1.png"
          alt="LiftUp"
          width={937}
          height={710}
          className="w-88.25 h-67 sm:w-234.25 sm:h-177.5 object-cover"
        />

      {/* Content Block */}
      <div className="mt-15 sm:mt-30 flex flex-col gap-15 sm:gap-30 w-full items-center">
        <Context/>
        <div></div>
      </div>
    </div>
  );
}
