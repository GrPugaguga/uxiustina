
export default function AcceptButton(props: {
    text: string
}) {
    return (
        <button className="text-black text-[12px] leading-5 hover:bg-grey-txt-secondary rounded-xl bg-background-white text-center font-size-[12px] w-21.5 h-8">
            {props.text}
        </button>
    )
}