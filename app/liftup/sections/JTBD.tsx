import { ImageCarousel } from "@/ui-kit";


export default function JTBD() {
  return (
    <>
        <ImageCarousel
          images={[
            "/image/LiftUp/sections/jtbd/Frame-21.png",
            "/image/LiftUp/sections/jtbd/Frame13829.png",
            "/image/LiftUp/sections/jtbd/JTBD(Достижение цели).png",
            "/image/LiftUp/sections/jtbd/JTBD(Незнание функционала).png",
            "/image/LiftUp/sections/jtbd/JTBD(Отслеживание тренировки в процессе).png",
            "/image/LiftUp/sections/jtbd/JTBD(Постановка цели).png",
            "/image/LiftUp/sections/jtbd/JTBD(Преодолеть плато).png"
          ]}
          height={650}
          mobileHeight={204}
        />
    </>
  );
}
