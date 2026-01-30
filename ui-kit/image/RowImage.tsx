import Image from "next/image";

export default function RowImage(props: {
    images: string[]
    cols: number
    gap?: number
}) {
    return (
        <>
            <div
                className="flex flex-row justify-start overflow-hidden -mr-5 sm:hidden"
                style={{
                    gap: props.gap ? `${props.gap}px` : '0px'
                }}
            >
                {props.images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={224}
                        height={455}
                        sizes="100vw"
                        className="w-[224] h-113.75"
                    />
                ))}
            </div>
            <div
                className="hidden sm:grid"
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
                        width={224}
                        height={455}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                ))}
            </div>
        </>
    );
}
