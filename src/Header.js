import Project from "./Project";
import Intro from "./Intro";
import Career from "./Career";
import Contact from "./Contact";
import { ReactComponent as Logo } from './logo.svg';

const Header = ({setComp}) => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-100 dark:bg-gray-700 p-1">
            <div class="flex items-center flex-shrink-0 text-gray-900 dark:text-gray-300 mr-6">
                <Logo class="fill-current h-8 w-8 mr-2" width="54" height="54" />
                <span class="font-serif text-xl tracking-tight">P a r k j a c k d a w</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-gray-900 dark:text-gray-300 ">
                <div class="text-sm lg:flex-grow">
                <button onClick={() => setComp(Intro)} class="block ml-10 lg:ml-0  mt-4 lg:inline-block lg:mt-0 font-bold hover:text-black mr-40">
                    소  개
                </button>
                <button onClick={() => setComp(Career)} class="block ml-10 lg:ml-0  mt-4 lg:inline-block lg:mt-0 font-bold hover:text-black mr-40">
                    이  력
                </button>
                <button onClick={() => setComp(Project)} class="block ml-10 lg:ml-0 mt-4 lg:inline-block lg:mt-0 font-bold hover:text-black mr-40">
                    프로젝트
                </button>
                <button onClick={() => setComp(Contact)} class="block ml-10 lg:ml-0  mt-4 lg:inline-block lg:mt-0 font-bold hover:text-black">
                    연락처
                </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;