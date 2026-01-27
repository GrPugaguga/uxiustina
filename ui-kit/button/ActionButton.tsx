
export default function ActionButton(props: {
    text: string
}) {
    return (
        <button className="text-black text-4 text-center leading-5.5 hover:bg-grey-bg-hover active:bg-grey-bg-pressed rounded-xl bg-grey-bg-primary font-size-[12px] px-5 py-1.5">
            {props.text}
        </button>
    )
}