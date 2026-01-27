import CardImage from "./CardImage";

export default function Card(props: {
    image: string
    title: string
    description: string
}) {
    return (
        <div className="flex flex-col gap-3">
            <CardImage src={props.image} alt={props.title} />
            <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-semibold text-black leading-[100%]">
                    {props.title}
                </h3>
                <p className="text-[18px] text-grey-txt-primary leading-[100%]">
                    {props.description}
                </p>
            </div>
        </div>
    )
}
