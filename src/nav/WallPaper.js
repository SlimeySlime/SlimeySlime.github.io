import React from "react";
import { FaTrash } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const WallPaper = () => {

    return(
        <div className="flex flex-grow bg-gradient-to-b from-red-700 to-purple-800">
            {/* <img src="img/wall/19-ermine-wallpaper.jpg" alt="wallpaper" className="object-cover" /> */}
            {/* <img src="/img/wall/rainworldtop.jpg" className="object-cover" alt="rainworld" /> */}
            {/* <img src="/img/wall/19-ermine-wallpaper.jpg" className="object-fill" alt="rainworld" /> */}
            {/* <img src="/img/wall/Focal-Fossa-wallpaper.jpg" className="object-fill" alt="rainworld" /> */}
            <div className="ml-16 grid grid-rows-12 bg-slate-200 justify-center items-center opacity-90">
            
                <div className="flex flex-col w-full justify-center items-center bg-slate-50">
                    <FaTrash size={"52"} className=''/>
                    <p>휴지통</p>
                </div>
                <div className="flex flex-col w-full justify-center items-center bg-slate-50">
                    <ImProfile size={"52"} className=''/>
                    <p>포트폴리오</p>
                </div>
                <div className="bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="bg-slate-200 p-4 m-2"> 그리드1 </div>
                <div className="bg-slate-200 p-4 m-2"> 그리드1 </div>
                    
            </div>
    
        </div>
    )
}
export default WallPaper