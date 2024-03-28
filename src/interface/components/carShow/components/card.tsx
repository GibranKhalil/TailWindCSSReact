export type CardProps = {
    number: number,
    text: string,
    description: string,
}

export const CardOrange = (props: CardProps) => {
    return (
        <article className="bg-amber-500 text-right p-8 w-4/12 h-60 relative overflow-hidden min-w-100">
            <h1 className="absolute text-bigger font-bold text-white opacity-20 -top-28 -left-12">{props.number < 10 ? `0${props.number}` : props.number}</h1>
            <p className="text-white opacity-70">{props.description}</p>
            <h1 className="text-white text-6xl font-medium">{props.text}</h1>
        </article>
    )
}