import Image from "next/image";

const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AzLxzUNTvNYktr2+vLiCONAiTTvIqnJ5AYkA9VXWoADAYpSqZJbuoYkzCuf/Z";

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
                        placeholder="blur"
                        blurDataURL={blurDataURL}
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
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                    />
                ))}
            </div>
        </>
    );
}
