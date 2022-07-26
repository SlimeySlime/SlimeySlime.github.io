import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { MdSignalWifi4BarLock } from "react-icons/md";
import { FaBatteryThreeQuarters, FaVolumeMute } from "react-icons/fa";

const helpMsg = [
    'Really.. i need help..',
    'Please someone save me',
    'You\'re too slow!',
    'You can do it !!!',
    'No need to hurry. calm down.',
    'You can do it yourself',
    'Hmm?',
    'What you expect?',
    'There is no help'
]

const TopNav = () => {

    const [currentTime, setCurrentTime] = useState(new Date())
    
    useEffect(() => {
      const id = setInterval(() => {
        setCurrentTime(new Date())
      }, 5000)
    
      return () => {
        clearInterval(id)
      }
    }, [])
    
    const DisplayDate = (date) => {
        const localDate = date.toLocaleDateString()
        const localTime = date.toLocaleTimeString()
        // 2022. 6. 25 -> 6월 25일
        const dateSplit = localDate.split('.')
        const dateStr = `${dateSplit[1]}월 ${dateSplit[2]}일` 
        // 16:05:02 -> 4 : 05 
        const timeSplit = localTime.split(':')
        const timeStr = `${timeSplit[0]} : ${timeSplit[1]}`
        return `${dateStr} ${timeStr}`
    }

    const help = () => {
        // const ran = Math.floor(Math.random() * helpMsg.length)
        // alert(helpMsg[ran])
    }

    return(
        <div className="flex flex-1 sticky max-h-8 top-0 left-0 py-1 bg-slate-900 text-slate-300 justify-between z-50">
            <div className="flex flex-1">
                <div className="pl-2 font-ubuntu font-semibold">
                    <Link to='/' className="hover:text-slate-50">Ubuntu</Link>
                </div>
                <div className="pl-2 font-ubuntu">
                    <a href="https://github.com/SlimeySlime" target='_blank' rel='gitpage' className="hover:text-white">GitHub</a>
                </div>
                <div className="pl-2 font-ubuntu">
                    <a href="#" className="hover:text-white">TIL</a>
                </div>
                <div className="pl-2 font-ubuntu">
                    <a href="#" className="hover:text-white">Edit</a>
                </div>
                <div className="pl-2 font-ubuntu">
                    <a href="#" className="hover:text-white">Version</a>
                </div>
                <div className="hidden pl-2 font-ubuntu">
                    <a href="#" className="hover:text-white" onClick={() => {help()}}>Help</a>
                </div>
                <div className="hidden pl-2 font-ubuntu">
                    <Link to={'/ref'}>ref</Link>
                </div>
            </div>
            <div className="flex flex-1 font-ubuntu">
                {DisplayDate(currentTime)}
            </div>
            <div className="flex mr-4 gap-2">
                <MdSignalWifi4BarLock className="m-1"/>
                <FaVolumeMute className="m-1" />
                <FaBatteryThreeQuarters className="m-1" />
            </div>
        </div>

    )

}
export default TopNav