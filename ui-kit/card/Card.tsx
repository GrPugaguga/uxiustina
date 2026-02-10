import Link from "next/link";
import CardImage from "./CardImage";

export default function Card(props: {
    image: string
    title: string
    description: string
    href: string
    priority?: boolean
    locked?: boolean
}) {
    const content = (
        <>
            <CardImage src={props.image} alt={props.title} priority={props.priority} locked={props.locked} />
            <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-semibold text-black leading-[100%]">
                    {props.title}
                </h3>
                <p className="text-4 sm:text-[18px] text-grey-txt-primary leading-[100%]">
                    {props.description}
                </p>
            </div>
        </>
    );

    if (props.locked) {
        return <div className="flex flex-col gap-3">{content}</div>;
    }

    return (
        <Link href={props.href} className="flex flex-col gap-3">
            {content}
        </Link>
    );
}
