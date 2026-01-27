import { buttonBase } from "./styles";

export default function AcceptButton(props: {
    text: string
    onClick?: () => void
}) {
    return (
        <button
            onClick={props.onClick}
            className={`${buttonBase} text-black text-3 leading-5 hover:bg-grey-txt-secondary border-grey-stroke bg-background-white px-5 py-3`}
        >
            {props.text}
        </button>
    )
}