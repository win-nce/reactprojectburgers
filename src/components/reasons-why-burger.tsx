import WhyBurger from "../assets/why-burger.png"
import WhyVan from "../assets/why-van.png"
import WhyMeat from "../assets/why-meat.png"
import LeftFire from "../assets/left-background-fire.png"
import FireSparkles from "../assets/fire-sparkles.png"

export const ReasonsWhy = () => {
    return(
        <div id="why" className="text-white pb-[100px]">
            <img src={LeftFire} className="absolute right-330 z-[-10]"/>
            <img src={FireSparkles} className="absolute left-380 rotate-30 z-[-10]"/>
            <div>
                <h2 className="font-serif text-6xl font-bold text-center mb-12">ПОЧЕМУ НАС ВЫБИРАЮТ?</h2>
                <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-between">
                    <div className="flex flex-col items-center text-center">
                        <img src={WhyBurger} className="w-24 h-24 mb-4"/>
                        <h5 className="text-2xl font-semibold mb-4">Авторские рецепты</h5>
                        <p>Наши бургеры обладают уникальным<br />
                           сочетанием вкусов и не похожи<br />
                           ни на какие другие. Мы тщательно<br />
                           отбираем лучшие ингредиенты<br />
                           и сочетания вкусов для нашего меню.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={WhyMeat} className="w-24 h-24 mb-4"/>
                        <h5 className="text-2xl font-semibold mb-4">Мраморная говядина</h5>
                        <p>Для наших бургеров мы используем<br /> 
                           отборную 100% мраморную говядину,<br /> 
                           которую закупаем исключительно<br />
                           у фермеров. Мы уверены в качестве<br /> 
                           нашего мяса.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={WhyVan} className="w-24 h-24 mb-4"/>
                        <h5 className="text-2xl font-semibold mb-4">Быстрая доставка</h5>
                        <p>Мы доставляем в пределах МКАД<br />
                           за 30 минут, а если не успеем —<br /> 
                           доставка бесплатно. Мы тщательно<br /> 
                           упаковываем наши бургеры, чтобы<br /> 
                           по дороге они не остыли.</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}