'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ExportIcon from "@/public/svg/export";

export default function HeaderLink(props: {
    text: string
    href?: string
    icon?: boolean
    onClick?: () => void
    external?: boolean
    download?: boolean | string
    animate?: boolean
}) {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

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

    const className = "group text-black active:text-grey-bg-pressed sm:active:text-grey-txt-secondary sm:active:bg-transparent cursor-pointer flex items-center gap-1 p-2.5 leading-5.5";

    const renderContent = () => {
        if (!props.animate) {
            return (
                <>
                    {props.text}
                    {props.icon && <ExportIcon />}
                </>
            );
        }

        return (
            <>
                {/* Mobile - plain text */}
                <span className="sm:hidden flex items-center gap-1">
                    {props.text}
                    {props.icon && <ExportIcon />}
                </span>

                {/* Desktop - animated */}
                <span className="hidden sm:block relative overflow-hidden" style={{ height: '22px' }}>
                    <motion.span
                        className="flex flex-col"
                        animate={{ y: isHovered ? -22 : 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <span className="flex items-center gap-1" style={{ height: '22px' }}>
                            {props.text}
                            {props.icon && <ExportIcon />}
                        </span>
                        <span className="flex items-center gap-1" style={{ height: '22px' }}>
                            {props.text}
                            {props.icon && <ExportIcon />}
                        </span>
                    </motion.span>
                </span>
            </>
        );
    };

    if (props.external && props.href) {
        return (
            <a
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                download={props.download}
                className={className}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {renderContent()}
            </a>
        );
    }

    return (
        <Link
            href={props.href || '/'}
            onClick={handleClick}
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {renderContent()}
        </Link>
    );
}
