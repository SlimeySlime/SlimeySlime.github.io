import React from "react";

const Bdanbonga = () => {

    return(
        <div className="flex flex-col bg-slate-50 justify-center items-center">
            <div className="flex flex-1 justify-start items-start">
                <p className="m-4 text-4xl ">프로젝트 프리뷰</p>
            </div>
            <div className="flex flex-1 justify-start mobile:flex-col">
                <div className="flex-col">
                    <img src="/img/project/bdan1.png" className="m-4 h-96 mobile:w-auto border rounded-lg shadow" alt="bdan1" />
                    <img src="/img/project/bdan3.png" className="m-4 h-96 mobile:w-auto border rounded-lg shadow" alt="bdan3" />
                </div>
                <img src="/img/project/bdan2.png" className="m-4 border rounded-lg shadow" alt="bdan2" />
                
            </div>

            <div className="flex flex-col justify-start items-start">
                <p className="text-2xl mt-8">갤러리 페이지 : <a href="http://www.bdanbonga.com" className="hover:text-green-500">bdanbonga.com</a></p>
                <p className="text-2xl mt-8">깃헙 주소 : <a href="https://github.com/SlimeySlime/HanbokGallery" className="hover:text-green-500">github.com/gallery</a></p>

            </div>
            
            <div className="mt-8 flex flex-1 justify-center items-start mobile:flex-col">
                <div className="m-12 flex-col">
                    <div className="text-2xl">프론트엔드</div>
                    <ul className="mt-2 list-item">
                        <li className="p-1 text-lg">
                            <a href="https://create-react-app.dev/docs/getting-started" className="hover:text-green-500">react (create-react-app)</a>
                        </li>
                        <li className="p-1 text-lg">
                            <a href="https://ko.redux.js.org/introduction/getting-started" className="hover:text-green-500">redux</a>
                        </li>
                        <li className="p-1 text-lg">
                            <a href="https://tailwindcss.com/" className="hover:text-green-500">tailwindcss</a>
                        </li>
                        <li className="p-1 text-lg">
                            <a href="https://apis.map.kakao.com/web/guide/" className="hover:text-green-500">kakao map api</a>
                        </li>
                    </ul>
                </div>
                <div className="m-12 flex-col">
                    <div className="text-2xl">백엔드</div>
                    <ul className="mt-2 list-item">
                        <li className="p-1 text-lg">
                            <a href="https://nodejs.org/ko/about/" className="hover:text-green-500">Nodejs</a>
                        </li>
                        <li className="p-1 text-lg">
                            <a href="https://expressjs.com/ko/starter/hello-world.html" className="hover:text-green-500">Express</a>
                        </li>
                        <li className="p-1 text-lg">
                            MsSql (cafe24)
                        </li>
                    </ul>
                </div>
                <div className="m-12 flex-col">
                    <div className="text-2xl">서버</div>
                    <ul className="mt-2 list-item">
                        <li className="p-1 text-lg">
                            <a href="https://console.cloud.google.com/?hl=ko" className="hover:text-green-500">Google Cloud Platform </a>
                        </li>
                        <li className="p-1 text-lg">
                            <a href="https://console.cloud.google.com/?hl=ko" className="hover:text-green-500">Cloud Stroage</a>
                        </li>
                        <li className="p-1 text-lg">
                            <a href="https://console.cloud.google.com/?hl=ko" className="hover:text-green-500">Cloud DNS </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Bdanbonga