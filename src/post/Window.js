import React from "react";
import { AiOutlineClose, } from "react-icons/ai";

const Window = ({children, close, tabName}) => {

    return(
        <div className="container mt-2 p-0 min-h-max max-h-innerScreen bg-slate-50 shadow-lg overflow-y-auto rounded-lg">
            {/* 상단 */}
            <div className="sticky top-0 flex flex-1 pr-4 p-1 bg-slate-700 justify-end items-center rounded-t-lg ">
                {/* <AiOutlineBorder color="white"/> */}
                <AiOutlineClose color="white" className="w-6" onClick={() => {close(tabName)}}/>
            </div>
            <div className="flex flex-col p-12 justify-start itmes-start overflow-y-auto">
                {children}
            </div>
        </div>
    )
}

export default Window