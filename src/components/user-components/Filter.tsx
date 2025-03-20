import {CgClose} from "react-icons/cg";
import {useState} from "react";
import {VscSettings} from "react-icons/vsc";
import {products} from "@/assets/data.ts";
import MultiRangeSlider from "multi-range-slider-react";
import {GoDash} from "react-icons/go";
const Filter = ()=>{
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(75);
    const handleInput = (e: { min?: number; max?: number; minValue: number; maxValue: number; }) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };
    const handleOpenFilter =()=>{
        setOpenFilter(prev=>!prev);
    }

    const handleSubmitForm = (e: { preventDefault: () => void; })=>{
        e.preventDefault()
    }
    return (
        <>
            <div className={"z-50"}>
                <button
                    onClick={handleOpenFilter}
                    className={"rounded-3xl hover:bg-green-5 hover:text-white bg-[rgba(210,210,210,.7)] w-fit px-6 py-2 flex items-center gap-2 font-medium duration-300"}>
                    <VscSettings/>
                    Filter
                </button>
                <div onClick={handleOpenFilter}
                     className={`fixed right-0 top-0 bottom-0 left-0 ${openFilter ? "bg-[rgba(0,0,0,.3)]" : "-translate-x-full duration-200"} w-full`}>
                    <div onClick={e => e.stopPropagation()}
                         className={`fixed left-0 top-0 bottom-0 shadow-lg shadow-blue-1 ${openFilter ? "bg-white" : "-translate-x-full"} max-w-[27rem] w-full duration-300 flex flex-col`}>
                        <div className={"flex items-center justify-between section border-b-[1px]"}>
                            <h3 className={"text-lg font-bold"}>Search Products</h3>
                            <button onClick={handleOpenFilter} className={"text-2xl"}><CgClose/></button>
                        </div>
                        <div>
                            <form onSubmit={handleSubmitForm} className={"section flex items-center gap-1 mt-8"}>
                                <input type={"search"} className={'border py-2 px-4 focus-visible:outline-dotted focus-visible:outline-[0.5px]'} />
                                <button type={"submit"} className={"bg-[rgba(210,210,210,.7)] rounded-3xl py-2 px-6 hover:bg-green-5 hover:text-white"}>Search</button>
                            </form>
                            <div className={"section"}>
                                <h3 className={"mb-8 text-lg font-bold"}>Product Categories</h3>
                                <form onSubmit={handleSubmitForm} className={"flex items-center gap-4 flex-wrap"}>
                                    {
                                        products.map(({category})=> (
                                            <button type={"submit"} className={"py-2 px-4 border-[1px]"}>{category}</button>
                                        ))
                                    }

                                </form>
                            </div>
                            <div className={"section"}>
                                <h3 className={"mb-8 text-lg font-bold"}>Filter by Price</h3>
                                <form onSubmit={handleSubmitForm} className={"vertical-spacing"}>
                                    <MultiRangeSlider
                                        min={0}
                                        max={100}
                                        step={5}
                                        ruler={false}
                                        minValue={minValue}
                                        maxValue={maxValue}
                                        label={false}
                                        barLeftColor={'#F2F4F6'}
                                        barRightColor={'#F2F4F6'}
                                        barInnerColor={'rgb(34, 197, 94)'}
                                        thumbLeftColor={'rgb(34, 197, 94)'}
                                        thumbRightColor={'rgb(34, 197, 94)'}
                                        className={"shadow-none border-none p-0 mb-6"}
                                        onInput={(e) => {
                                            handleInput(e);
                                        }}
                                    />
                                    <div className={"flex items-center justify-between gap-4"}>
                                        <button type={"submit"} className={"bg-[rgba(210,210,210,.7)] py-2 px-6 hover:bg-green-5 hover:text-white duration-300 rounded-3xl"}>filter</button>
                                        <p className={"text-sm font-light flex items-center gap-2"}>Price:
                                            <span className={"font-medium"}>${minValue}</span>
                                            <GoDash  className={"font-medium"}/>
                                            <span className={"font-medium"}>${maxValue}</span>
                                        </p>
                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter