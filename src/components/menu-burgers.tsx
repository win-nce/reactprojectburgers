import CheddarBacon from "../assets/burger-cheddar-bacon.png"
import BBQburger from "../assets/BBQ-bacon-chicken.png"
import DoubleBurger from "../assets/double-beef-burger.png"
import Bavarian from "../assets/bavarian-burger.png"
import BaconCheese from "../assets/bacon-cheeseburger.png"
import Indiana from "../assets/burger-indiana.png"
import { MdOutlineShoppingCart } from "react-icons/md";

export const ReasonsWhy = () => {
    return(
        <div>
            <h2>ВЫБЕРИТЕ СВОЙ БУРГЕР</h2>
            <div>
                <div>
                    <img src={CheddarBacon}/>
                    <h5>Бургер чеддер & бекон</h5>
                    <p>Котлета из говядины криспи, булочка,<br /> 
                    томат, сыр Чеддер, грудинка, лук<br />
                    красный, салат айсбер, майонез,<br /> 
                    кетчуп, сырный соус</p>
                    <div>
                        <h5>$</h5>
                        <p>гм</p>
                    </div>
                    <button className="my-5 text-black text-lg bg-gradient-to-r from-[#DA8023] to-[#E2B438] rounded-lg px-[50px] py-[20px]">Заказать <MdOutlineShoppingCart /></button>
                </div>
                
                <div>
                    <img src={BBQburger}/>
                    <h5>BBQ с беконом и курицей</h5>
                    <p>Булочка бриошь с кунжутом, куриная<br /> 
                    котлета, сыр чеддер, томат, огурец<br /> 
                    маринованный, лук маринованный,<br /> 
                    салат Ромен, бекон, соус BBQ</p>
                    <div>
                        <h5>$</h5>
                        <p>гм</p>
                    </div>
                    <button>Заказать <MdOutlineShoppingCart /></button>
                </div>
                
                <div>
                    <img src={DoubleBurger}/>
                    <h5>Дабл биф бургер</h5>
                    <p>Две говяжьи котлеты, сыр чеддер,<br />
                    салат романо, маринованные огурцы,<br /> 
                    свежий томат, бекон, красный лук,<br />
                    соус бургер, горчица</p>
                    <div>
                        <h5>$</h5>
                        <p>гм</p>
                    </div>
                    <button>Заказать <MdOutlineShoppingCart /></button>
                </div>
                
                <div>
                    <img src={Bavarian}/>
                    <h5>Баварский бургер</h5>
                    <p>Булочка для бургера, говяжья котлета,<br /> 
                    красный лук, сыр, охотничья колбаска,<br /> 
                    соус барбекю, соус сырный, салат<br /> 
                    айсберг</p>
                    <div>
                        <h5>$</h5>
                        <p>гм</p>
                    </div>
                    <button>Заказать <MdOutlineShoppingCart /></button>
                </div>
                
                <div>
                    <img src={BaconCheese}/>
                    <h5>Бекон чизбургер</h5>
                    <p>Булочка для бургера, говяжья котлета,<br /> 
                    грудинка, помидор, огурец<br /> 
                    маринованный, сыр, сырный соус,<br /> 
                    кетчуп, зелень</p>
                    <div>
                        <h5>$</h5>
                        <p>гм</p>
                    </div>
                    <button>Заказать <MdOutlineShoppingCart /></button>
                </div>
                
                <div>
                    <img src={Indiana}/>
                    <h5>Индиана бургер</h5>
                    <p>Булочка для бургера, котлета куриная,<br /> 
                    грудинка, яйцо, огурец маринованный,<br /> 
                    криспи лук, кетчуп, соус сырный,<br />
                    горчица, зелень</p>
                    <div>
                        <h5>$</h5>
                        <p>гм</p>
                    </div>
                    <button>Заказать <MdOutlineShoppingCart /></button> 
                </div>
            </div>
        </div>
    )
}