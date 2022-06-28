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
        <div className="flex flex-grow bg-gradient-to-b from-red-500 to-purple-900">
            {/* <img src="img/wall/19-ermine-wallpaper.jpg" alt="wallpaper" className="object-cover" /> */}
            {/* <img src="/img/wall/rainworldtop.jpg" className="object-cover" alt="rainworld" /> */}
            {/* <img src="/img/wall/19-ermine-wallpaper.jpg" className="object-fill" alt="rainworld" /> */}
            {/* <img src="/img/wall/Focal-Fossa-wallpaper.jpg" className="object-fill" alt="rainworld" /> */}
            <div className="ml-16 grid grid-rows-12 justify-center items-center ">
            
                <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50">
                    <FaTrash size={"52"} className=''/>
                    <p className="font-ubuntu font-semibold">휴지통</p>
                </div>
                <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                    onClick={() => {setPortpolioWindow(!portfolioWindow)}}>
                    <ImProfile size={"52"} className=''/>
                    <p className="">포트폴리오</p>
                    
                </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                    
            </div>
            {portfolioWindow &&
            <div className="absolute left-0 right-0 container flex flex-1">
                <Portfolio close={closeTab}/>
            </div>
            }
        </div>
    )
}
export default WallPaper