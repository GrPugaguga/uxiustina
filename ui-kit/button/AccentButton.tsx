import { buttonBase } from "./styles";

export default function AccentButton(props: {
    text: string
    onClick?: () => void
}) {
    return (
        <button
            onClick={props.onClick}
            className={`${buttonBase} text-background-white text-4 leading-5.5 hover:bg-accent-hover active:bg-accent-pressed bg-accent-primary px-5 py-3`}
        >
            {props.text}
        </button>
    )
}