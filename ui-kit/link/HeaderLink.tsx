import ExportIcon from "@/public/svg/export";

export default function HeaderLink(props: {
    text: string
    icon?: boolean
    onClick?: () => void
}) {
    return (
        <span
            onClick={props.onClick}
            className="group text-black active:text-grey-bg-pressed sm:active:text-grey-txt-secondary sm:active:bg-transparent cursor-pointer flex items-center gap-1 p-2.5 text-5 leading-5.5 sm:text-4 sm:leading-5.5"
        >
            {props.text}
            {props.icon && <ExportIcon />}
        </span>
    )
}
