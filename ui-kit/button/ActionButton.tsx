import { buttonBase } from "./styles";
import BackIcon from "@/public/svg/back";

export default function ActionButton(props: {
    text: string
    icon?: boolean
    onClick?: () => void
    className?: string
    hideTextBelow?: number
    shortText?: string
    shortTextBelow?: number
}) {
    const hideId = props.hideTextBelow ? `action-btn-hide-${props.hideTextBelow}` : '';
    const shortId = props.shortTextBelow ? `action-btn-short-${props.shortTextBelow}` : '';

    const renderText = () => {
        if (props.hideTextBelow) {
            return <span className="btn-text">{props.text}</span>;
        }
        if (props.shortText && props.shortTextBelow) {
            return (
                <>
                    <span className="btn-full-text">{props.text}</span>
                    <span className="btn-short-text">{props.shortText}</span>
                </>
            );
        }
        return props.text;
    };

    return (
        <>
            {props.hideTextBelow && (
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .${hideId} .btn-text {
                            display: none;
                        }
                        @media (min-width: ${props.hideTextBelow}px) {
                            .${hideId} .btn-text {
                                display: inline;
                            }
                        }
                    `
                }} />
            )}
            {props.shortText && props.shortTextBelow && (
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .${shortId} .btn-full-text {
                            display: none;
                        }
                        .${shortId} .btn-short-text {
                            display: inline;
                        }
                        @media (min-width: ${props.shortTextBelow}px) {
                            .${shortId} .btn-full-text {
                                display: inline;
                            }
                            .${shortId} .btn-short-text {
                                display: none;
                            }
                        }
                    `
                }} />
            )}
            <button
                onClick={props.onClick}
                className={`${buttonBase} ${hideId} ${shortId} text-black text-4 leading-5.5 hover:bg-grey-bg-hover active:bg-grey-bg-pressed bg-grey-bg-primary border border-grey-stroke px-5 py-3 flex items-center gap-2.5 w-fit ${props.className}`}
            >
                {props.icon && <BackIcon />}
                {renderText()}
            </button>
        </>
    )
}
