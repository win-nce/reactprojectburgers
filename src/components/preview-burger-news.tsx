import BigCheddarBurger from "../assets/BigCheddarBurger.png"
import LeftFire from "../assets/left-background-fire.png"
import RightFire from "../assets/right-background-fire.png"
import Pepper from "../assets/background-pepper.png"

export const Preview = () => {
    return(
        <div id="main" className="">
            <img src={LeftFire} className="absolute bottom-40 z-[-10]"/>
            <img src={Pepper} className="absolute right-430 bottom-150 z-[-9] -rotate-20"/>
            <img src={RightFire} className="absolute left-9/12 bottom-0 z-[-11]"/>
            <img src={Pepper} className="absolute w-70 left-440 bottom-20 z-[-9] -rotate-45"/>
            <div className="pl-[350px] pr-[350px]">
                <div className="absolute flex flex-col items-start gap-6 top-50">
                <button className=" text-white text-xl bg-[#D3320F] rounded-4xl px-[20px] py-[10px]" onClick={() => {const el = document.getElementById("menu"); if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}>Новое меню</button>
                <h1 className="mb-3 text-white text-9xl font-serif font-semibold w-[800px]">БУРГЕР ЧЕДДЕР</h1>
                <p className="mb-3 text-white font-medium text-2xl">Мы обновили наше меню, спешите попробовать<br />
                   сезонные новинки и насладиться отличным вкусом<br />
                   наших бургеров. Готовим для вас лучшие бургеры в<br />
                   городе из отборной мраморной говядины.</p>
                <button onClick={() => {const el = document.getElementById("menu"); if (el) el.scrollIntoView({ behavior: "smooth" });}}
                className="my-5 text-black text-xl bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-[50px] py-[20px] font-semibold">Смотреть меню</button>
                </div>
                <div className="relative left-80 bottom-25">
                    <img src={BigCheddarBurger}/>
                </div>
            </div>
            
            
        </div>
    );
}



