
export default function AcceptButton(props: {
    text: string
}) {
    return (
        <button className="text-black text-3 leading-5 hover:bg-grey-txt-secondary rounded-xl border-grey-stroke bg-background-white text-center px-5 py-1.5">
            {props.text}
        </button>
    )
}