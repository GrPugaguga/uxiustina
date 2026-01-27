export default function MenuIcon({ className, isOpen }: { className?: string, isOpen?: boolean }) {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''} ${className}`}
        >
            <path
                d="M24.5 20.998H3.5M24.5 13.998H3.5M24.5 6.99805H3.5"
                stroke="currentColor"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
