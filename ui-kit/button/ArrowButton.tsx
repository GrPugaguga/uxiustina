import Image from "next/image";

export default function ArrowButton(props: {
    type: 'left' | 'right'
    onClick?: () => void
}) {
    return (
        <button
            onClick={props.onClick}
            className="w-11.25 h-11.25 rounded-full bg-background-white hover:bg-grey-bg-hover active:bg-grey-bg-pressed cursor-pointer flex items-center justify-center"
        >
            <Image
                src={`/svg/${props.type}.svg`}
                alt={props.type}
                width={15}
                height={15}
            />
        </button>
    )
}
