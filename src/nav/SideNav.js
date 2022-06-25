import logo from '../logo_1_tp.svg'
import React from "react";
import { Link } from 'react-router-dom';
const SideNav = () => {

    return(
        <div className="flex flex-col left-0 top-8 h-screen fixed jusify-center bg-slate-800 bg-opacity-75 z-10">
            <div className='hidden gridtest'>
                <Link to='bdanbonga'>
                    <img src="/img/project/bdan_1_tp.png" className="w-14 bg-white" alt="" />
                </Link>
                <Link to='bdanbonga'>
                    <img src="/img/project/bdan_1_tp.png" className="w-14 bg-white" alt="" />
                </Link>
                <Link to='bdanbonga'>
                    <img src="/img/project/bdan_1_tp.png" className="w-14 bg-white" alt="" />
                </Link>
            </div>
            <div className="p-2">
                <Link to='bdanbonga'>
                    <img src="/img/project/bdan_1_tp.png" className="w-14 bg-white" alt="" />
                </Link>
            </div>
            <div className="p-2">
                <Link to='pass'>
                    <img src="/img/project/Golden_key.webp" className="w-14" alt="" />
                </Link>
            </div>
            <div className="p-2">
                <img src={logo} fill='#f4f4f4' className="w-14 fill-white" alt="" />
            </div>
        </div>
    )
}

export default SideNav