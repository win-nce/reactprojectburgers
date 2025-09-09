import { BurgersMenu } from "../components/menu-burgers";
import { FormOrder } from "../components/orders";
import { Preview } from "../components/preview-burger-news";
import { ReasonsWhy } from "../components/reasons-why-burger";
import { Footer } from "../layout/footer";
import { Header } from "../layout/header";

export const App = () => {
  return (
    <>
      <Header />
      <Preview />
      <ReasonsWhy />
      <BurgersMenu />
      <FormOrder />
      <Footer />
    </>
  );
};
