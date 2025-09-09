import CheddarBacon from "../assets/burger-cheddar-bacon.png"
import BBQburger from "../assets/BBQ-bacon-chicken.png"
import DoubleBurger from "../assets/double-beef-burger.png"
import Bavarian from "../assets/bavarian-burger.png"
import BaconCheese from "../assets/bacon-cheeseburger.png"
import Indiana from "../assets/burger-indiana.png"
import { MdOutlineShoppingCart } from "react-icons/md";

export const BurgersMenu = () => {
    return(
        <div id="menu" className="">
            <div className="px-[350px] mt-[100px]">
                <div className="relative">
                    <div className="mt-[100px] z-[-10] absolute top-1/2 left-1/2 w-[870px] h-[870px] rounded-full bg-[#42260B] opacity-70 blur-2xl -translate-x-1/2 -translate-y-1/2" />
                    <h2 className="text-white font-serif text-6xl font-bold text-center mb-12">
                        ВЫБЕРИТЕ СВОЙ БУРГЕР
                    </h2>
                    <div className="grid grid-cols-3 gap-6">

                        {/* ПЕРВАЯ КАРТОЧКА БУРГЕРА */}
                        <div className="border border-[#353535] bg-[#211A16] pl-5 pr-5 rounded-2xl shadow-lg text-center w-[384px] h-[580px]">
                            <img src={CheddarBacon} className="h-[280px] w-[400px] mx-auto mb-4 pt-[10px] mt-[20px]"/>
                            <h5 className="text-white font-semibold mb-4 text-left text-2xl pl-3">Бургер чеддер & бекон</h5>
                            <p className="text-white text-m mb-5 text-left pl-3">
                                Котлета из говядины криспи, булочка,<br /> 
                                томат, сыр Чеддер, грудинка, лук<br />
                                красный, салат айсбер, майонез,<br /> 
                                кетчуп, сырный соус</p>
                            <div className="relative text-left pl-3">
                                <h5 className="text-white font-semibold text-3xl mb-3">8 $</h5>
                                <p className="text-[#757575] text-sm">360 гр</p>
                            </div>
                            <button onClick={() => { const el = document.getElementById("orders"); if (el) el.scrollIntoView({ behavior: "smooth" });}}
                            className="hover:opacity-90 transition relative left-[160px] bottom-[65px] flex items-center justify-center gap-2 text-black text-xl font-medium bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-8 py-4">Заказать <MdOutlineShoppingCart /></button>
                        </div>

                        {/* вторая КАРТОЧКА БУРГЕРА */}
                        <div className="border border-[#353535] bg-[#211A16] pl-5 pr-5 rounded-2xl shadow-lg text-center w-[384px] h-[580px]">
                            <img src={BBQburger} className="h-[280px] w-[400px] mx-auto mb-4 pt-[10px] mt-[20px]"/>
                            <h5 className="text-white font-semibold mb-4 text-left text-2xl pl-3">BBQ с беконом и курицей</h5>
                            <p className="text-white text-m mb-5 text-left pl-3">
                                Булочка бриошь с кунжутом, куриная <br /> 
                                котлета, сыр чеддер, томат, огурец <br />
                                маринованный, лук маринованный,<br /> 
                                салат Ромен, бекон, соус BBQ</p>
                            <div className="relative text-left pl-3">
                                <h5 className="text-white font-semibold text-3xl mb-3">7 $</h5>
                                <p className="text-[#757575] text-sm">390 гр</p>
                            </div>
                            <button onClick={() => { const el = document.getElementById("orders"); if (el) el.scrollIntoView({ behavior: "smooth" });}}
                            className="hover:opacity-90 transition  relative left-[160px] bottom-[65px] flex items-center justify-center gap-2 text-black text-xl font-medium bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-8 py-4">Заказать <MdOutlineShoppingCart /></button>
                        </div>

                        {/* третья КАРТОЧКА БУРГЕРА */}
                        <div className="border border-[#353535] bg-[#211A16] pl-5 pr-5 rounded-2xl shadow-lg text-center w-[384px] h-[580px]">
                            <img src={DoubleBurger} className="h-[280px] w-[400px] mx-auto mb-4 pt-[10px] mt-[20px]"/>
                            <h5 className="text-white font-semibold mb-4 text-left text-2xl pl-3">Дабл биф бургер</h5>
                            <p className="text-white text-m mb-5 text-left pl-3">
                                Две говяжьи котлеты, сыр чеддер, <br />
                                салат романо, маринованные огурцы, <br />
                                свежий томат, бекон, красный лук, <br />
                                соус бургер, горчица</p>
                            <div className="relative text-left pl-3">
                                <h5 className="text-white font-semibold text-3xl mb-3">10 $</h5>
                                <p className="text-[#757575] text-sm">420 гр</p>
                            </div>
                            <button onClick={() => { const el = document.getElementById("orders"); if (el) el.scrollIntoView({ behavior: "smooth" });}}
                            className="hover:opacity-90 transition relative left-[160px] bottom-[65px] flex items-center justify-center gap-2 text-black text-xl font-medium bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-8 py-4">Заказать <MdOutlineShoppingCart /></button>
                        </div>

                        {/* четвертая КАРТОЧКА БУРГЕРА */}
                        <div className="border border-[#353535] bg-[#211A16] pl-5 pr-5 rounded-2xl shadow-lg text-center w-[384px] h-[580px]">
                            <img src={Bavarian} className="h-[280px] w-[400px] mx-auto mb-4 pt-[10px] mt-[20px]"/>
                            <h5 className="text-white font-semibold mb-4 text-left text-2xl pl-3">Баварский бургер</h5>
                            <p className="text-white text-m mb-5 text-left pl-3">
                                Булочка для бургера, говяжья котлета, <br />
                                красный лук, сыр, охотничья колбаска, <br />
                                соус барбекю, соус сырный, салат <br />
                                айсберг</p>
                            <div className="relative text-left pl-3">
                                <h5 className="text-white font-semibold text-3xl mb-3">7 $</h5>
                                <p className="text-[#757575] text-sm">220 гр</p>
                            </div>
                            <button onClick={() => { const el = document.getElementById("orders"); if (el) el.scrollIntoView({ behavior: "smooth" });}}
                            className="hover:opacity-90 transition relative left-[160px] bottom-[65px] flex items-center justify-center gap-2 text-black text-xl font-medium bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-8 py-4">Заказать <MdOutlineShoppingCart /></button>
                        </div>

                        {/* пятая КАРТОЧКА БУРГЕРА */}
                        <div className="border border-[#353535] bg-[#211A16] pl-5 pr-5 rounded-2xl shadow-lg text-center w-[384px] h-[580px]">
                            <img src={BaconCheese} className="h-[280px] w-[400px] mx-auto mb-4 pt-[10px] mt-[20px]"/>
                            <h5 className="text-white font-semibold mb-4 text-left text-2xl pl-3">Бекон чизбургер</h5>
                            <p className="text-white text-m mb-5 text-left pl-3">
                                Булочка для бургера, говяжья котлета, <br />
                                грудинка, помидор, огурец <br />
                                маринованный, сыр, сырный соус, <br />
                                кетчуп, зелень.</p>
                            <div className="relative text-left pl-3">
                                <h5 className="text-white font-semibold text-3xl mb-3">8 $</h5>
                                <p className="text-[#757575] text-sm">220 гр</p>
                            </div>
                            <button onClick={() => { const el = document.getElementById("orders"); if (el) el.scrollIntoView({ behavior: "smooth" });}} 
                            className="hover:opacity-90 transition relative left-[160px] bottom-[65px] flex items-center justify-center gap-2 text-black text-xl font-medium bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-8 py-4">Заказать <MdOutlineShoppingCart /></button>
                        </div>
                        
                        {/* шестая КАРТОЧКА БУРГЕРА */}
                        <div className="border border-[#353535] bg-[#211A16] pl-5 pr-5 rounded-2xl shadow-lg text-center w-[384px] h-[580px]">
                            <img src={Indiana} className="h-[280px] w-[400px] mx-auto mb-4 pt-[10px] mt-[20px]"/>
                            <h5 className="text-white font-semibold mb-4 text-left text-2xl pl-3">Индиана бургер</h5>
                            <p className="text-white text-m mb-5 text-left pl-3">
                                Булочка для бургера, котлета куриная, <br />
                                грудинка, яйцо, огурец маринованный, <br />
                                криспи лук, кетчуп, соус сырный, <br />
                                горчица, зелень.</p>
                            <div className="relative text-left pl-3">
                                <h5 className="text-white font-semibold text-3xl mb-3">9 $</h5>
                                <p className="text-[#757575] text-sm">320 гр</p>
                            </div>
                            <button onClick={() => { const el = document.getElementById("orders"); if (el) el.scrollIntoView({ behavior: "smooth" });}} 
                            className="hover:opacity-90 transition relative left-[160px] bottom-[65px] flex items-center justify-center gap-2 text-black text-xl font-medium bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-8 py-4">Заказать <MdOutlineShoppingCart /></button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}