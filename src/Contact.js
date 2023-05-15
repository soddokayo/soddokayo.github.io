import { useNavigate } from "react-router-dom";

const Contact = () => {
    const movePage = useNavigate();

    function gohome() {
        movePage('/home')
    }
    return (
        <>
            <h1 className="text-3xl font-bold">
                연락처
            </h1>
            <h4>
                메일주소 : pjha999@naver.com <br />
                깃헙주소 : https://github.com/soddokayo <br />
                포트폴리오 사이트 : https://pf.7yr.de/ <br />
            </h4>
            <button className="bg-transparent hover:bg-gray-700 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded" 
                onClick={gohome}>홈으로 이동</button>
        </>
    )
}
export default Contact;