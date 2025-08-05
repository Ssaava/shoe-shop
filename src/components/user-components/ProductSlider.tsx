import ProductCard from "@/components/user-components/ProductCard.tsx";
import usePrevNextButtons, {
  NextButton,
  PrevButton,
} from "@/components/user-components/SliderButtons.tsx";
import { useProductStore } from "@/store/store";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type CarouselApi = UseEmblaCarouselType[1];

const ProductSlider = () => {
  const products = useProductStore((state) => state.products);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const handleNextPrevButtonClick = useCallback((callback: () => void) => {
    callback();
    return;
  }, []);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <>
      <div className="relative embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex py-4">
          {products
            .slice(0, 10)
            .map(({ _id, name, images, category, price }, index) => (
              <ProductCard
                key={index}
                className={"embla__slide max-w-[22rem] mx-4"}
                category={category?.name}
                name={name}
                image={images[0].url}
                price={price}
                productId={_id}
              />
            ))}
        </div>
        <PrevButton
          className={
            "bg-white shadow absolute top-1/2 -translate-y-1/2 left-0 rounded-full p-4"
          }
          onClick={() => handleNextPrevButtonClick(onPrevButtonClick)}
        />
        <NextButton
          className={
            "bg-white shadow absolute top-1/2 -translate-y-1/2 right-0 rounded-full p-4"
          }
          onClick={() => handleNextPrevButtonClick(onNextButtonClick)}
        />
      </div>

      <div className="flex items-center gap-2 justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            type={"button"}
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`size-3 rounded-full bg-gray-200 ${
              index === selectedIndex ? "bg-gray-8" : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};
export default ProductSlider;
