
export default function AccentButton(props: {
    text: string
}) {
    return (
        <button className="text-background-white text-4 text-center leading-5.5 hover:bg-accent-hover active:bg-accent-pressed rounded-5 bg-accent-primary font-size-[12px] px-5 py-3">
            {props.text}
        </button>
    )
}