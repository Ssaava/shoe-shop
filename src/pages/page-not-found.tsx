import UserFooter from "@/components/user-components/UserFooter.tsx";
import UserHeader from "@/components/user-components/UserHeader.tsx";

const PageNotFound = ()=>{
    return (
        <>
            <div className={"flex flex-col min-h-screen"}>
                <UserHeader/>
                <div
                    className={"w-screen pb-16 section inline-padding flex flex-col bg-[#F2F4F6]"}>
                    <div className={"bg-white max-w-[75rem] w-full p-6 md:p-16 mx-auto mt-16 vertical-spacing"}>
                        <h3 className={"text-2xl md:text-6xl font-extrabold md:text-center text-secondary"}>This page
                            doesn't seem to exist.</h3>
                    </div>
                </div>
                <UserFooter/>
            </div>
        </>
    )
}
export default PageNotFound