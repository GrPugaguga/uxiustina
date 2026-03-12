export default function SolutionSpan(props: {text:string; className?: string}) {
    return (
        <div className={"rounded-2xl px-8 py-6 gap-4 font-medium text-[20px] leading-none text-black flex bg-grey-bg-primary " + props.className}>
            {props.text}
        </div>
    )
}
