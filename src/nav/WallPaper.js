import React, { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { ImFileExcel, ImProfile } from "react-icons/im";
import Portfolio from "../page/Portfolio";
import TestPage from "../page/tp";
import Window from "../page/Window";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import Trashbin from "../page/Trashbin";
import { AiOutlineConsoleSql } from "react-icons/ai";
import ProfileContent from "../page/ProfileContent";


const md = `
    # hello world
    *nice* to meet you
`

const markdown = `A paragraph with *emphasis* and **strong importance**.

# let't test! 

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

List below
* 1. Lists
* [ ] todo
* [x] done

1. one
2. two
3. three

A table:

| a | b | C |
| - | - | - |

`

const WallPaper = () => {

    const [portfolioWindow, setPortpolioWindow] = useState(false)
    const [testWindow, setTestWindow] = useState(false)
    const [trashWindow, setTrashWindow] = useState(false)
    const window = useRef()

    const onOffTab = (tab) => {
        console.log('open', tab)
        switch (tab) {
            case 'profile':
                setPortpolioWindow(!portfolioWindow)
                break;
            case 'test':
                setTestWindow(!testWindow)
                break;
            case 'trash':
                setTrashWindow(!trashWindow)
                break;
            default:
                break;
        }

    }

    const fullScreen = (tab) => {
        console.log('lets fullscreen')
    }

    return(
    <div className="flex flex-grow bg-gradient-to-br to-purple-900 via-rose-500 from-orange-500">
        {/* image cover에서 그냥 gradient */}
        <div className="ml-16 grid grid-rows-12 justify-center items-center ">
        
            <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                onClick={() => {onOffTab("trash")}}>
                <FaTrash size={"52"} color="black" className=''/>
                <p className="font-ubuntu font-semibold">휴지통</p>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                onClick={() => {setPortpolioWindow(!portfolioWindow)}}>
                <ImProfile size={"52"} color="black" className=''/>
                <p className="font-ubuntu font-semibold">프로필</p>
                
            </div>
            <div className="hidden flex? flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                onClick={() => {setTestWindow(!testWindow)}}>
                <ImFileExcel size={"52"} color="black" className=''/>
                <p className="font-ubuntu font-semibold">테스트</p>
                
            </div>
            {/* grid place */}
            <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
            <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
            <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
            <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
            <div className="invisible bg-slate-200 p-4 m-2"> 그리드1 </div>
                
        </div>
        <div className="relative">
            { portfolioWindow &&
            // <div className="absolute left-0 right-0 container flex flex-1 transition-left ease-in-out ">
            <div>
                <Window close={onOffTab} fullScreen={fullScreen} tabName='profile'>
                    <ProfileContent />
                </Window>
            </div> 
            }
            { trashWindow &&
            <div>
                <Window close={onOffTab} fullScreen={fullScreen} tabName="trash">
                    <Trashbin />
                </Window>
            </div>
            }
        </div>

        { portfolioWindow &&
        // <div className="absolute left-0 right-0 container flex flex-1 transition-left ease-in-out ">
        <div className="hidden">
            <Window close={onOffTab} fullScreen={fullScreen} tabName='profile'>
                <ProfileContent />
            </Window>

        </div> 
        }

        { testWindow && 
        <div className="absolute left-0 right-0 container flex flex-1">
            <Window close={onOffTab} fullScreen={fullScreen} tabName='test' id='md'>
                <p>md</p>
                <ReactMarkdown remarkPlugins={[remarkGfm]} id='md'>{markdown}</ReactMarkdown>
            </Window>
        </div>
        }
        { trashWindow &&
        <div className="hidden">
            <Window close={onOffTab} fullScreen={fullScreen} tabName="trash">
                <Trashbin />
            </Window>
        </div>
        }

    </div>
    )
}
export default WallPaper
