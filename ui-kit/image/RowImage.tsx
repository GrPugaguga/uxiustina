import Image from "next/image";

export default function RowImage(props: {
    images: string[]
    cols: number
    gap?: number
}) {
    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
                gap: props.gap ? `${props.gap}px` : '0px'
            }}
        >
            {props.images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            ))}
        </div>
    );
}
