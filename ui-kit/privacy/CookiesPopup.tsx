'use client';

import { motion } from "framer-motion";
import AcceptButton from "../button/AcceptButton";

export default function CookiesPopup(props: {
    onAccept?: () => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 left-0 right-0 px-5 sm:px-25 max-w-360 mx-auto flex justify-end"
        >
            <div className="flex items-center gap-4 bg-grey-bg-primary border border-grey-stroke rounded-[20px] pr-2 pl-4 py-2.5">
                <span className="text-black font-medium text-[12px] leading-5">
                    Мы используем cookies для аналитики.
                </span>
                <AcceptButton text="Хорошо" onClick={props.onAccept} />
            </div>
        </motion.div>
    );
}
