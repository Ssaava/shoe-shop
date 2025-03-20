interface Props {
    number: string;
    title: string;
    description?: string;
}
const Services = ({number, title, description="Consectetur adipiscing elit elit tellus, luctus nec\n" +
"                    ullamcorper mattis, pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur adipiscing\n" +
"                    elit."}:Props)=>{
    return (
        <>
            <div>
                <div className={"relative"}>
                    <h3 className={"text-secondary-100 font-extrabold opacity-10 text-9xl"}>{number}.</h3>
                    <h1 className={"absolute w-full top-1/2 -translate-y-1/2 text-3xl text-center font-extrabold"}>{title}</h1>
                </div>
                <p className={"text-justify sm:text-center"}>{description}</p>
            </div>
        </>
    )
}

export default Services