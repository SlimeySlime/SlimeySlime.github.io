import ReactMarkdown from "react-markdown"
import React from "react"


const md = `

    # hello world
    *nice* to meet you
`
const TestPage = () => {


    return(
        <div className="container mt-2 p-0 min-h-max max-h-innerScreen bg-slate-50 shadow-lg overflow-y-auto rounded-lg">
            <p className="border-b-2">md</p>
            <ReactMarkdown children={md}>{md}</ReactMarkdown>
        </div>
    )
}

export default TestPage