// @ts-nocheck
import ProductCard from "@/components/user-components/ProductCard.tsx";
import {products} from "@/assets/data.ts";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import usePrevNextButtons, {NextButton, PrevButton} from "@/components/user-components/SliderButtons.tsx";
import {SetStateAction, useCallback, useEffect, useState} from "react";

const ProductSlider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    }, [Autoplay({delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true})])

    const {
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    const handleNextPrevButtonClick = useCallback((callback: () => void) => {
        callback()
        return
    }, [])

    // manage dots
    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: { scrollSnapList: () => SetStateAction<never[]>; }) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: { selectedScrollSnap: () => SetStateAction<number>; }) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])
    return (
        <>
            <div className="relative embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex py-4">
                    {
                        products.slice(0, 10).map(({id, name, image, category, price}) => (
                            <ProductCard className={'embla__slide max-w-[22rem] mx-4'} category={category} name={name}
                                         image={image} price={price} productId={id}/>
                        ))
                    }
                </div>
                <PrevButton className={'bg-white shadow absolute top-1/2 -translate-y-1/2 left-0 rounded-full p-4'}
                            onClick={() => handleNextPrevButtonClick(onPrevButtonClick)}/>
                <NextButton className={'bg-white shadow absolute top-1/2 -translate-y-1/2 right-0 rounded-full p-4'}
                            onClick={() => handleNextPrevButtonClick(onNextButtonClick)}/>
            </div>

            <div className="flex items-center gap-2 justify-center mt-4">
                {scrollSnaps.map((_, index) => (
                    <button
                        type={'button'}
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`size-3 rounded-full bg-gray-200 ${ index === selectedIndex ? 'bg-gray-8' : ''}`}
                    />
                ))}
            </div>

        </>
    )
}
export default ProductSlider