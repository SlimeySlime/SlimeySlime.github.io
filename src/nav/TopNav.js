import React from "react";
import { Link } from 'react-router-dom'

const TopNav = () => {

    return(
        <div className="flex flex-1 sticky mt-0 bg-slate-700 text-slate-300">
            <div className="pl-2 font-ubuntu font-semibold">
                Ubuntu
            </div>
            <div className="pl-2 font-ubuntu">
                SlimeySlime
            </div>
            <div className="pl-2 font-ubuntu">
                File
            </div>
            <div className="pl-2 font-ubuntu">
                Edit
            </div>
            <div className="pl-2 font-ubuntu">
                View
            </div>
            <div className="pl-2 font-ubuntu">
                Help
            </div>
        </div>

    )

}
export default TopNav