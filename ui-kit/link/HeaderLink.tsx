import ExportIcon from "@/public/svg/export";

export default function HeaderLink(props: {
    text: string
    icon?: boolean
    onClick?: () => void
}) {
    return (
        <span
            onClick={props.onClick}
            className="group text-black active:text-grey-txt-secondary text-4 leading-5.5 cursor-pointer flex items-center gap-1 p-2.5"
        >
            {props.text}
            {props.icon && <ExportIcon />}
        </span>
    )
}
