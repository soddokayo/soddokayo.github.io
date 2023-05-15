import { useNavigate } from "react-router-dom";

const Home = () => {
    const movePage = useNavigate();

    function gohome() {
        movePage('/home')
    }
    return (
        <>
            <h1 className="text-3xl font-bold">
                홈입니다.
            </h1>
            <button className="bg-transparent hover:bg-gray-700 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded" 
                onClick={gohome}>홈으로 이동</button>
        </>
    )
}
export default Home;

