import { forwardRef } from "react"

const Input = forwardRef((props,ref) => {
    const {name,type,placeholder} = props
    return (
        <input 
            type={type}
            className="text-sm border rounded w-full py-2 px-3" 
            name={name}
            id={name}
            placeholder={placeholder}
            ref={ref}
        />
    )
});

export default Input