import { ComponentProps } from "react";

export type InputProps = ComponentProps<'input'> & {
    label: string
}

export const InputLabel = (props: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={props.name} className="font-medium">{props.label}</label>
            <input name={props.name} className="outline-none flex-1 bg-transparent" {...props} />
        </div >
    )
}