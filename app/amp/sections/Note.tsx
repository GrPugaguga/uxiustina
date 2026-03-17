
export default function Note() {
  return (
    <div className="grid grid-cols-8 gap-5 rounded-[40px] bg-linear-to-b from-[#F5F5F500] to-grey-bg-primary py-15">
      <span className="col-start-2 font-semibold text-[24px] leading-6.5 text-black">Примечание</span>
      <span className="col-start-5 col-span-3 font-normal text-[16px] font-sf leading-5.25 tracking-[-0.17px] text-black">
        {"Проект реализован в\u00A0рамках коммерческой разработки и\u00A0находится под\u00A0NDA. В\u00A0кейсе представлены обезличенные данные, обобщённая логика UX-решений и\u00A0переработанные интерфейсы без\u00A0раскрытия бизнес-процессов и\u00A0технической реализации."}
      </span>
    </div>
  );
}
