import { BsCurrencyDollar } from "react-icons/bs";
import BurgerLogo from "../assets/BurgerLogo.png"


export const Header = () => {
    return (
        <header className="scroll-smooth py-[30px] pl-[350px] pr-[350px] text-lg text-white mt-5">
            <div className="flex justify-between gap-[20px] items-center">
                <a href="#main" className="w-[160px]">
                    <img src={BurgerLogo} />
                </a>
                <nav className="flex items-center space-x-[70px]">
                    <a className="px-3 py-2 font-medium hover:text-orange-500 cursor-pointer" 
                    onClick={() => {
                        const el = document.getElementById("why");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}>
                        Почему у нас
                    </a>
                    <a className="px-3 py-2 font-medium hover:text-orange-500 cursor-pointer" 
                    onClick={() => {
                        const el = document.getElementById("menu");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}>
                        Меню бургеров
                    </a>
                    <a className="px-3 py-2 font-medium hover:text-orange-500 cursor-pointer"
                    onClick={() => {
                        const el = document.getElementById("orders");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}>
                        Оформление заказа
                    </a>
                </nav>
                <a className="px-3 py-3 border border-neutral-200 rounded-lg font-medium hover:bg-white hover:text-black transition">
                    <BsCurrencyDollar />
                </a>
            </div>
        </header>
    );
};

