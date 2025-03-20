const SubmitButton = ({title, className}: {title: string, className?: string})=>{
    return (
        <button type={"submit"}
                className={`${className} min-w-[9rem] border-[1px] border-primary text-primary flex items-center max-w-[14rem] justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:border-primary duration-300`}>
            {title}
        </button>
    )
}

export default SubmitButton