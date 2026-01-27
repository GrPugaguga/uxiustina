import Image from "next/image";

export default function CardImage(props: {
    src: string
    alt: string
}) {
    return (
        <div className="w-88.25 h-61.5 sm:w-151 sm:h-89.5 rounded-[20px] border border-grey-stroke overflow-hidden cursor-pointer">
            <Image
                src={props.src}
                alt={props.alt}
                width={604}
                height={358}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-600"
            />
        </div>
    )
}
