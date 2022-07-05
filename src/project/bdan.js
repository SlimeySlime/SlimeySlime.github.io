import React from "react";

// /img/wall/rainworldtop.jpg
// /img/project/bdan2.png

const Bdanbonga = () => {

    return(
        <div className="ml-1622 container flex bg-slate-50 justify-center items-start mobile:flex-col">
            <div className="flex-col justify-center items-center bg-blue-50"> 
                <p className="m-12 text-4xl font-happy-title text-center ">한복 갤러리</p>
                <p className="ml-8 -mb-4 text-2xl font-happy-title">프로젝트 프리뷰</p>
                <div className="grid grid-cols-2 gap-6">
                    <img src="/img/project/bdan1.png" className="m-4 mobile:w-auto rounded-lg shadow" alt="bdan1" />
                    <img src="/img/project/bdan2.png" className="m-4 row-span-2 rounded-lg shadow" alt="bdan2" />
                    <img src="/img/project/bdan3.png" className="m-4 mobile:w-auto rounded-lg shadow" alt="bdan3" />
                </div>
            </div>

            <div className="mt-24 container min-w-max flex flex-col justify-center items-start">
                <div className="m-4">
                    <p className="text-2xl mt-12 text-green-900">행사날짜에 따라서 <br /> 대여가능 여부를 필터링하는 갤러리</p>
                    <p className="text-xl mt-4 text-green-600">갤러리 페이지 : <a href="http://www.bdanbonga.com" className="hover:text-green-500">bdanbonga.com</a></p>
                    <p className="text-xl mt-4 text-green-600">깃허브 : <a href="https://github.com/SlimeySlime/HanbokGallery" className="hover:text-green-500">github.com/gallery</a></p>
                </div>
                <div className="flex flex-1 justify-center items-start mobile:flex-col">
                    <div className="m-4 flex-col">
                        <div className="text-2xl block">프론트엔드</div>
                        <ul className="mt-2 list-item">
                            <li className="p-1 text-lg">
                                <a href="https://create-react-app.dev/docs/getting-started" className="hover:text-green-500">react</a>
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
                    <div className="m-4 flex-col">
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
                    <div className="m-4 flex-col">
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
                <div className="m-4">
                    <p className="text-xl mt-4">Express 서버에서 MsSql DB와 통신</p>
                    <p className="text-sm font-sans mt-2">REST API로 프론트엔드로 데이터 교환</p>
                    <p className="text-xl mt-4">구글 클라우드 플랫폼으로 배포</p>
                    <p className="text-sm font-sans mt-2">computer engine과 cloud storage사용</p>
                    <p className="text-xl mt-4">tailwindcss로 디자인</p>
                    <p className="text-sm font-sans mt-2">모바일 커스텀 뷰를 위해 bootstrap에서 tailwind로 css 프레임워크를 전환</p>
                </div>
            </div>
            
        </div>
    )
}
export default Bdanbonga