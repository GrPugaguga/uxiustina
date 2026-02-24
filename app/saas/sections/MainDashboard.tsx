import Image from "next/image";

export default function MainDashboard() {
  return (
    <div className="relative w-310 h-220.5 overflow-hidden">
      <Image
        src="/image/saas/main_SaaS_DashBoard.png"
        alt="LiftUp Progress"
        width={1240}
        height={882}
      />
    </div>
  );
}
