import {useCallback} from 'react'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

// @ts-ignore
const usePrevNextButtons = (emblaApi) => {

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    return {
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const PrevButton = ({ className, ...restProps  }: {// @ts-ignore
    className: string,  [x: string]: never }) => {
    return (
        <button
            className={`${className as string} group bg-white rounded-full shadow-md p-4 flex items-center justify-center border border-[#F2F4F6]`}
            type="button"
            {...restProps}
        >
            <FaChevronLeft className="text-gray-3 group-hover:text-gray-8 duration-300 text-3xl"/>
            <span className="sr-only">Previous slide</span>
        </button>
    )
}

export const NextButton = ({ className, ...restProps  }: {className: string, [x: string]: string}) => {

    return (
        <button
            className= {`${className as string} group bg-white rounded-full shadow-md p-4 flex items-center justify-center border border-[#F2F4F6]`}
            type="button"
            {...restProps}
        >
            <FaChevronRight className="text-gray-3 group-hover:text-gray-8 duration-300 text-3xl" />
            <span className="sr-only">Next slide</span>
        </button>
    )
}
export default usePrevNextButtons
