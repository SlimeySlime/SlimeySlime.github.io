import React from "react";


const PassManager = () => {

    return(
        <div className="container flex flex-1 min-h-screen bg-slate-50 justify-center items-start mobile:flex-col">
            <div className="mt-12 flex-col justify-center items-center mobile:flex-col">
                <div className="flex-col justify-center itmes-center text-center">
                    <p className="text-4xl">PassManager</p>
                    <p className="text-sm font-happy">간단한 안드로이드 프로젝트</p>
                </div>
                <p className="mt-4 text-xl font-happy-title ml-4">프로젝트 프리뷰</p>
                <div className="container flex-1 grid grid-cols-3 gap-6 max-w-2xl">
                    <img src="/img/project/pass1.jpg" alt="pass1" className="m-2 rounded shadow-lg" />
                    <img src="/img/project/pass4.jpg" alt="pass4" className="m-2 rounded shadow-lg" />
                    <img src="/img/project/pass3.jpg" alt="pass3" className="m-2 rounded shadow-lg" />
                    <img src="/img/project/pass5.jpg" alt="pass5" className="m-2 rounded shadow-lg" />
                    <img src="/img/project/pass6.jpg" alt="pass6" className="m-2 rounded shadow-lg" />
                </div>
            </div>
            <div className="mt-24 flex flex-col basis-1/4 m-12">
                <p className="text-2xl">플레이스토어 <a href="https://play.google.com/store/apps/details?id=kr.co.jinsu.passmanager" >[링크]</a></p>
                <p className="mt-12 text-md font-happy">비밀번호 / 정보 저장, 수정, 삭제 기능</p>
                <p className="mt-4 text-md font-happy">데이터는 SQLite로 로컬저장</p>
                <p className="mt-4 text-md font-happy">+ 아이콘 설정기능</p>
                <p className="mt-4 text-md font-happy">+ 슬라이드 애니메이션으로 뷰 전환</p>
            </div>
        </div>
    )
}

export default PassManager