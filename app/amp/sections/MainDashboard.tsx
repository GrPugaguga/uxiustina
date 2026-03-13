import Image from "next/image";

export default function MainDashboard() {
  return (
    <div className="relative w-310 h-220.5  ">
      <Image
        src="/image/saas/main_SaaS_DashBoard1.png"
        alt="LiftUp Progress"
        width={1240}
        height={882}
        className="rounded-2xl shadow-[0px_0px_100px_0px_#00000026]"
      />
    </div>
  );
}
