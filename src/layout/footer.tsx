import BurgerLogo from "../assets/BurgerLogo.png"


export const Footer = () => {
    return <footer className="h-[100px]">
        <div className="flex justify-center gap-[800px]">           
            <a href="#?" className="w-[150px]">
                <img src={BurgerLogo} />
            </a>
            <p className="text-white text-m font-semibold z-30">Все права защищены.</p>
        </div>
    </footer>
}