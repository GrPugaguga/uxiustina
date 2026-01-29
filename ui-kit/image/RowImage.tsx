import Image from "next/image";

export default function RowImage(props: {
    images: string[]
    gap?: number
    height: number
}) {
    return (
        <div
            className="flex flex-row items-center shrink-0"
            style={{ gap: props.gap ? `${props.gap}px` : '0px' }}
        >
            {props.images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={0}
                    height={props.height}
                    sizes="100vw"
                    className="w-auto h-auto shrink-0"
                    style={{ height: `${props.height}px`, width: 'auto' }}
                />
            ))}
        </div>
    );
}
