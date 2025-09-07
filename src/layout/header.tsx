import { nav } from "../config/nav.config"
import { BsCurrencyDollar } from "react-icons/bs";
import BurgerLogo from "../assets/BurgerLogo.png"


export const Header = () => {
    return <header className="py-[30px] pl-[350px] pr-[350px] text-lg text-white mt-5">
        <div className="flex justify-between gap-[20px] items-center">           
            <a href="#?" className="w-[160px]">
                <img src={BurgerLogo} />
            </a>
            <nav className="flex items-center space-x-[70px]">
                {
                    nav.map(navItem => <a key={navItem.id} href="/"  className="px-3 py-2 font-medium">{navItem.name}</a>)
                }
               
            </nav>
            <a href="#?" className="px-3 py-3 border border-neutral-200 rounded-lg font-medium"><BsCurrencyDollar /></a>     
        </div>
        
    </header>
}

