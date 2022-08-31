import React from "react";
import { TbPhone, TbMail, TbBrandGithub } from "react-icons/tb";
// import { GrStop, GrClose } from "react-icons/gr";
import { AiOutlineClose, AiOutlineBorder } from "react-icons/ai";
import logo from '../logo_1_tp.svg'

const Portfolio = ({close}) => {

    return(
        <div className="container mt-2 p-0 min-h-max max-h-innerScreen bg-slate-50 shadow-lg overflow-y-auto rounded-lg">
            {/* 상단 */}
            <div className="sticky top-0 flex flex-1 pr-4 p-1 bg-slate-700 justify-end items-center rounded-t-lg ">
                {/* <AiOutlineBorder color="white"/> */}
                <AiOutlineClose color="white" className="w-6" onClick={() => {close('profile')}}/>
            </div>
            <div className="flex flex-col p-12 justify-start itmes-start overflow-y-auto">
                
                <p className="text-2xl">홍진수</p>
                
                <div className="mt-4">
                    <p className="leading-8">
                        인문계열 학과로 입학했지만, 프로그래밍에 꿈이 있어 복학 후 소프트웨어 부전공을 수료하게 되었습니다. <br /> 
                        전공과정에서 컴퓨터공학과 알고리즘 지식을 배우고 졸업했지만, <br />
                        내가 잘하고 싶은 일을 찾기 위해 안드로이드 앱, 유니티, 파이썬, 웹 개발 등 이것저것 해보면서 시간을 보냈습니다. <br />
                        그리고 갤러리 페이지를 만들기 위해 미숙하지만 웹 풀스택 개발을 해보게되면서 <br />
                        웹의 매력과 백엔드의 중요성을 느끼게되었습니다.
                    </p>
                </div>
                <p className="mt-4 font-happy"> <TbPhone className="inline"/>  010 - 8681 - 5165</p>
                <p className="mt-2 font-happy"> <TbMail className="inline"/> tmffkdal@gmail.com / naver.com</p>
                <p className="mt-2 font-happy"> <TbBrandGithub className="inline"/> https://github.com/SlimeySlime</p>

                <p className="mt-8 inline-flex">학력</p>
                <hr  className="mt-4?"/>
                <div className="mt-4 grid grid-cols-6">
                    <p>2014.02 ~ 2019.03</p>
                    <div className="col-span-5 mb-2">
                        <p>충북대학교 사회학과 (학사)</p>
                    </div>
                    <p>2017.02 ~ 2019.03</p>
                    <div className="col-span-5 mb-2">
                        <p>충북대학교 소프트웨어 부전공 (학사)</p>
                    </div>
                </div>

                <p className="mt-8 inline-flex">프로젝트</p>
                <hr  className="mt-4?"/>
                <div className="mt-4 grid grid-cols-6">

                    <p>2019</p>
                    <div className="flex-col col-span-4 mb-4">
                        <p className="text-2xl col-span-4">파이썬 웹 크롤링</p>
                        <p className="font-ubuntu">
                            파이썬 beautifulsoup와 카카오 vision api로 <br />
                            웹사이트에서 이미지를 수집하고 어떤 이미지인지 태그를 다는 프로그램
                        </p>
                    </div>
                    <div className="flex-col justify-end itmes-end">
                        <p></p>
                    </div>

                    <p>2021</p>
                    <div className="flex-col col-span-5 mb-4">
                        <p className="text-2xl font-happy">PassManager 
                            <img src="/img/project/Golden_key.webp" className="inline pb-1 w-6" alt="" />
                            {/* <a href="/pass" className="text-sm p-2 hover:text-teal-500">[Link]</a> */}
                        </p>
                        <p className="font-ubuntu">
                            비밀번호 저장 안드로이드 앱<br />
                            안드로이드 스튜디오로 java와 kotlin, 안드로이드 앱에 대한 이해를 할 수 있었음
                        </p>
                    </div>
                    {/* <div className="flex-col justify-end itmes-end">
                        <p className="font-ubutu"> <br />
                            하지만 안드로이드 api에 대해
                        </p>
                    </div> */}

                    <p>2022</p>
                    <div className="flex-col col-span-5 mb-4">
                        <p className="text-2xl font-happy">한복 갤러리 
                            <img src={logo} className="ml-2 mb-1 inline w-6 bg-teal-800" fill="c3c3c3" alt="" />
                            {/* <a href="/bdanbonga" className="text-sm p-2 hover:text-teal-500">[Link]</a> */}
                        </p>
                        <p className="font-ubuntu">
                            한복 갤러리 웹 사이트 <br />
                            React와 Redux로 프론트엔드를 빠르고 효율적으로 구성하는 것 <br />
                            Nodejs로 프론트엔드와 DB를 잇는 다리역할을 만들어서 배포한 것   <br />
                            이 과정에서 웹앱의 매력과 발전 가능성을 느낌
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
