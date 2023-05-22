const Project = (memo) => {

    return (
        <>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    프로젝트 A : 메모 앱
                </h2>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                    <h4 className="ml-10 text-left">
                        <ul>
                        {memo.map(m => (
                            <li key={m._id}>{m.author} : {m.text}</li>
                        ))}
                        </ul>
                    </h4>
                    <form enctype="application/json" method="POST" action="http://localhost:3000/api/memo">
                        <span class="ml-5 bg-gray-50 font-bold text-gray-800">닉네임<input name="author" value="guest" class="text-gray-300"/></span>
                        <span class="ml-5 bg-gray-50 font-bold text-gray-800">메세지<input name="text" value="test" class="text-gray-300"/></span>
                        <button type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0 px-4 rounded ml-5">제출</button>
                    </form>
                </div>
            </div>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    프로젝트
                </h2>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                    <h4 className="ml-10 text-left">
                        <br />
                        디지털 포렌식 증거 조사를 위한 수집된 문서파일의 자동 군집화 <br />
                        담당 분야 : 개발, 실험 및 논문 작성 <br />
                        기술 스택 : Python(PyTorch, sklearn) <br />
                        <br />
                        포트폴리오 사이트 제작 <br />
                        담당 분야 : 풀 스택 <br />
                        기술 스택 : React + Github Pages <br />
                        <br />
                        네트워크 침입탐지시스템 개발을 위한 인공지능 연구 <br />
                        담당 분야 : ELK 스택과 연동하여 자연어 기계학습 모델의 네트워크 트래픽에 대한 이상탐지 실험 <br />
                        기술 스택 : Python(Keras, Elasticsearch) <br />
                        <br />
                        문서형 악성코드 제작 <br />
                        담당 분야 : Linux OS를 대상으로 한 1-day PoC 제작 <br />
                        기술 스택 : Assembly, Bash Script <br />
                        <br />
                        세포 식별 현미경 외주개발 <br />
                        담당 분야 : 사진 해상도 향상을 제외한 SW 개발 파트 전체 <br />
                        기술 스택 : Python/C++(QT: GUI, GPIO: 카메라 제어, OpenCV: 세포 이미지 식별) <br />
                        <br />
                        얼굴 인식을 통한 출석체크 프로그램(학사 졸업작품) <br />
                        담당 분야 : 설계 및 개발 <br />
                        기술 스택 : Python(OpenCV) <br />
                        <br />
                        임베디드 디바이스 취약점 분석 장비 개발(BoB 프로젝트) <br />
                        담당 분야 : SW 기능 중 UART/JTAG Pin mapper, 임베디드 프로그래밍(LCD 출력 및 버튼 입력 처리)<br />
                        기술 스택 : C/C++(ARM) <br />
                        <br />
                    </h4>

                </div>
            </div>
        </>
    )
}

export default Project;