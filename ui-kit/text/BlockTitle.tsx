export default function BlockTitle(props: {text:string; className?: string}) {
    return (
        <div className={"font-semibold text-[24px] leading-6.5 text-black flex " + props.className}>
            {props.text}
        </div>
    )
}
