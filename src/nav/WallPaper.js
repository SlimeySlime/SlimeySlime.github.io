import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Portfolio from "../post/Portfolio";

const WallPaper = () => {

    const [portfolioWindow, setPortpolioWindow] = useState(false)

    const closeTab = () => {
        setPortpolioWindow(!portfolioWindow)
    }

    return(
    // <div className="flex flex-grow bg-gradient-to-b from-red-500 to-purple-800">
        // <div className="flex flex-grow bg-gradient-to-br from-purple-600 via-rose-500 to-orange-500">
        <div className="flex flex-grow bg-gradient-to-br to-purple-600 via-rose-500 from-orange-600">
            {/* image cover에서 그냥 gradient */}
            <div className="ml-16 grid grid-rows-12 justify-center items-center ">
            
                <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50">
                    <FaTrash size={"52"} color="black" className=''/>
                    <p className="font-ubuntu font-semibold">휴지통</p>
                </div>
                <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                    onClick={() => {setPortpolioWindow(!portfolioWindow)}}>
                    <ImProfile size={"52"} color="black" className=''/>
                    <p className="font-ubuntu font-semibold">포트폴리오</p>
                    
                </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                    
            </div>
            {portfolioWindow &&
            <div className="absolute left-0 right-0 container flex flex-1 transition-left ease-in-out ">
                <Portfolio close={closeTab}/>
            </div>
            }
            {/* <div className={portfolioWindow ? "opacity-100 translate-x-10?" : "opacity-0 " + " absolute left-0 right-0 container flex flex-1 transition-opacity duration-500 "}>
                <Portfolio close={closeTab}/>
            </div> */}
        </div>
    )
}
export default WallPaper