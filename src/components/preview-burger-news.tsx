import BigCheddarBurger from "../assets/BigCheddarBurger.png"

export const Preview = () => {
    return(
        <div className="pl-[350px] pr-[350px]">
            <div>
                <button className="text-white text-xl bg-[#D3320F] rounded-4xl px-[20px] py-[10px]">Новое меню</button>
                <h1 className="text-white text-9xl font-serif font-semibold">БУРГЕР ЧЕДДЕР</h1>
                <p className="text-white font-medium text-2xl">Мы обновили наше меню, спешите попробовать 
                   сезонные новинки и насладиться отличным вкусом
                   наших бургеров. Готовим для вас лучшие бургеры 
                   в городе из отборной мраморной говядины.</p>
                <button className="text-black text-xl bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-[20px] py-[10px]">Смотреть меню</button>
            </div>
            <div>
                <img src={BigCheddarBurger}/>
            </div>
            
        </div>
    );
}



