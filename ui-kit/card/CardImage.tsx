import Image from "next/image";

export default function CardImage(props: {
    src: string
    alt: string
    priority?: boolean
    locked?: boolean
}) {
    return (
        <div className={`w-88.25 h-61.5 sm:w-151 sm:h-89.5 rounded-[20px] border border-grey-stroke overflow-hidden flex ${props.locked ? "items-center" : "items-end"} justify-center bg-grey-bg-primary ${props.locked ? "cursor-default" : "cursor-pointer"}`}>
            {props.locked ? (
                <Image
                    src="/svg/lock.svg"
                    alt="Locked"
                    width={160}
                    height={200}
                    className="w-40 h-50"
                />
            ) : (
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={604}
                    height={358}
                    sizes="(max-width: 640px) 353px, 604px"
                    className="h-[90%] object-contain hover:scale-105 transition-transform duration-600"
                    priority={props.priority}
                />
            )}
        </div>
    )
}
