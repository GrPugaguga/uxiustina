'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import ExportIcon from "@/public/svg/export";

export default function HeaderLink(props: {
    text: string
    href?: string
    icon?: boolean
    onClick?: () => void
    external?: boolean
    download?: boolean | string
}) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        if (props.onClick) {
            e.preventDefault();
            props.onClick();
            return;
        }

        if (props.href && !props.external) {
            e.preventDefault();
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    router.push(props.href!);
                });
            } else {
                router.push(props.href);
            }
        }
    };

    const className = "group text-black active:text-grey-bg-pressed sm:active:text-grey-txt-secondary sm:active:bg-transparent cursor-pointer flex items-center gap-1 p-2.5 text-5 leading-5.5 sm:text-4 sm:leading-5.5";

    if (props.external && props.href) {
        return (
            <a
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                download={props.download}
                className={className}
            >
                {props.text}
                {props.icon && <ExportIcon />}
            </a>
        );
    }

    return (
        <Link
            href={props.href || '/'}
            onClick={handleClick}
            className={className}
        >
            {props.text}
            {props.icon && <ExportIcon />}
        </Link>
    );
}
