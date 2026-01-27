import { buttonBase } from "./styles";
import BackIcon from "@/public/svg/back";

export default function ActionButton(props: {
    text: string
    icon?: boolean
    onClick?: () => void
}) {
    return (
        <button
            onClick={props.onClick}
            className={`${buttonBase} text-black text-4 leading-5.5 hover:bg-grey-bg-hover active:bg-grey-bg-pressed bg-grey-bg-primary px-5 py-3 flex items-center gap-2`}
        >
            {props.icon && <BackIcon />}
            {props.text}
        </button>
    )
}