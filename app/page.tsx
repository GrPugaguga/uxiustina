import Image from "next/image";

import AcceptButton from "@/ui-kit/button/AcceptButton";
import ActionButton from "@/ui-kit/button/ActionButton";
import AccentButton from "@/ui-kit/button/AccentButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2.5">
      <AcceptButton text='Хорошо'/>
      <ActionButton text="Написать на Email"/>
      <AccentButton text="Написать в телеграмм"/>
    </div>
  );
}
