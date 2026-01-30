export default function ProblemText(props: {
    problem: string
    children?: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 ">
            <div>
                <h2 className="text-4 font-medium leading-6.5 text-grey-txt-primary">
                    {props.problem}
                </h2>
            </div>
            {props.children && (
                <div className="text-4 font-medium leading-5.5 text-black">
                    {props.children}
                </div>
            )}
        </div>
    )
}
