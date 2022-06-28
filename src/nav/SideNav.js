import logo from '../logo_1_tp.svg'
import React from "react";
import { Link } from 'react-router-dom';
const SideNav = () => {

    return(
        <div className="flex flex-col left-0 top-8 h-screen fixed jusify-center bg-slate-800 bg-opacity-75 z-30">
            
            <div className="p-2">
                <Link to='pass'>
                    <img src="/img/project/Golden_key.webp" className="w-14" alt="" />
                </Link>
            </div>
            <div className="p-2">
                <Link to='bdanbonga'>
                    <img src={logo} fill='#f4f4f4' className="w-14 fill-white shadow-xl" alt="" />
                </Link>
            </div>

        </div>
    )
}

export default SideNav