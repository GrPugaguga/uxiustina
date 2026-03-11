
export default function BlockTitle(props: {text:string; className?: string}) {
    return (
        <span className={"font-semibold text-[24px] leading-6.5 text-black" + props.className}>
            {props.text}
        </span>
    )
}