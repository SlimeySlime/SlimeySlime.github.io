import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ImFileExcel, ImProfile } from "react-icons/im";
import Portfolio from "../post/Portfolio";
import TestPage from "../post/tp";
import Window from "../post/Window";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";


const md = `
    # hello world
    *nice* to meet you
`

const markdown = `A paragraph with *emphasis* and **strong importance**.

# let't test! 

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b | C |
| - | - | - |

`

const WallPaper = () => {

    const [portfolioWindow, setPortpolioWindow] = useState(false)
    const [testWindow, setTestWindow] = useState(true)

    const closeTab = (tab) => {
        console.log('open', tab)
        switch (tab) {
            case 'profile':
                setPortpolioWindow(!portfolioWindow)
                break;
            case 'test':
                setTestWindow(!testWindow)
                break;
            default:
                break;
        }

    }

    return(
    <div className="flex flex-grow bg-gradient-to-br to-purple-900 via-rose-500 from-orange-500">
        {/* image cover에서 그냥 gradient */}
        <div className="ml-16 grid grid-rows-12 justify-center items-center ">
        
            <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50">
                <FaTrash size={"52"} color="black" className=''/>
                <p className="font-ubuntu font-semibold">휴지통</p>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                onClick={() => {setPortpolioWindow(!portfolioWindow)}}>
                <ImProfile size={"52"} color="black" className=''/>
                <p className="font-ubuntu font-semibold">프로필</p>
                
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center hover:bg-slate-50 hover:opacity-50"
                onClick={() => {setTestWindow(!testWindow)}}>
                <ImFileExcel size={"52"} color="black" className=''/>
                <p className="font-ubuntu font-semibold">테스트</p>
                
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

        {testWindow && 
        <div className="absolute left-0 right-0 container flex flex-1">
            {/* <TestPage close={closeTab} /> */}
            <Window close={closeTab} tabName='test' id='md'>
                <p>md</p>
                {/* <ReactMarkdown children={markdown} /> */}
                <ReactMarkdown remarkPlugins={[remarkGfm]} id='md'>{markdown}</ReactMarkdown>
            </Window>
        </div>
        }

    </div>
    )
}
export default WallPaper
