export default function CarouselMenu(props: {
    total: number
    current: number
}) {
    return (
        <div className="flex gap-1.25">
            {Array.from({ length: props.total }).map((_, index) => (
                <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                        index === props.current
                            ? 'bg-grey-menu-dark'
                            : 'bg-grey-menu-light'
                    }`}
                />
            ))}
        </div>
    );
}
