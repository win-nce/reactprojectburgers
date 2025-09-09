import { useState, useTransition, type FormEvent } from "react";
import toast from "react-hot-toast";
import OrderedBurger from "../assets/burger-in-box.png";
import Circle from "../assets/blurred-circle.png";
import FireSparkles from "../assets/fire-sparkles.png";
import Pepper from "../assets/background-pepper.png";
import RightFire from "../assets/right-background-fire.png";

export const FormOrder = () => {
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const order = formData.get("Ваш заказ");
      const name = formData.get("Ваше имя");
      const phone = formData.get("Ваш телефон");

      if (order && name && phone) {
        // Просто показываем тост и сообщение, без сохранения
        toast.success("Ваш заказ оформлен!");
        setSubmitted(true);
        form.reset();
      }
    });
  };

  return (
    <div id="orders" className="h-[900px]">
        <h2 className="text-white font-serif text-6xl font-bold text-center mt-[200px]">
            ОФОРМЛЕНИЕ ЗАКАЗА
        </h2>

            <img src={Circle} className=" mt-[100px] z-[-10] relative bottom-[170px] left-[100px] rotate-10 w-[1000px]"/>
            <img src={OrderedBurger} className="h-[450px] relative bottom-[800px] left-[450px]"/>
            <img src={RightFire} className="absolute top-[3300px] left-[1300px]"/>
            <img src={FireSparkles} className="absolute top-[3300px] left-[1400px]"/>
            <img src={Pepper} className="absolute top-[3500px] left-[1700px] -rotate-40 w-[350px]"/>
            
        
        <div className="border border-[#353535] bg-[#211A16] rounded-2xl p-6 w-[425px] h-[525px] relative bottom-[1300px] left-[1070px]">
            <h2 className="text-center text-white text-2xl font-semibold mt-7 mb-12 w-[350px]">
            {submitted ? "Заказ успешно оформлен!" : "Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа"}
            </h2>
            {!submitted && (
            <form onSubmit={onSubmit} className="space-y-6">
                <input type="text" name="Ваш заказ" placeholder="Ваш заказ"
                    className="w-[350px] mx-3 h-[55px] px-4 py-2 rounded-lg border border-yellow-500 text-white bg-transparent focus:outline-none"/>
                <input type="text" name="Ваше имя" placeholder="Ваше имя"
                    className="w-[350px] mx-3 h-[55px] px-4 py-2 rounded-lg border border-yellow-500 text-white bg-transparent focus:outline-none"/>
                <input type="tel" name="Ваш телефон" placeholder="Ваш телефон"
                    className="w-[350px] mx-3 h-[55px] px-4 py-2 rounded-lg border border-yellow-500 text-white bg-transparent focus:outline-none"/>
                <button type="submit" disabled={pending} className="w-[350px] mx-3 h-[55px] py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#DA8023] to-[#E2B438] hover:opacity-90 transition">
                    Оформить заказ
                </button>
            </form>)}
        </div>
    </div>
  );
};
