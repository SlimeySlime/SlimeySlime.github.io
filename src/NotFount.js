import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const NotFound = () => {

    const [redirectTimer, setRedirectTimer] = useState(3)

    useEffect(() => {
        
    }, [])

    return(
        <div>
            <p>404 Not found</p>
            <p>싱글페이지앱이라 새로고침하면 이럴수있어</p>
        </div>
    )
}

export default NotFound