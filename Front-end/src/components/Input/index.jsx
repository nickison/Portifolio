function Input({label,className="", ...props}){
    return(
        <div className="w-full">
            <input name="adicione a tarefa" type="text" 
            className={`
            w-full
            text-black
            bg-white
            border-gray-300
            border 
            p-3
            rounded-lg
            hover:bg-blue-100
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            ${className}
        `}
            {...props}
            />
        </div>
    )
}

export default Input