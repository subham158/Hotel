import Navbar from "./Navbar.jsx";
import BookingContainer from "./BookingContainer.jsx";
import style from "./Main.module.css";
import Hero from "./Hero.jsx";

const Main = () => {

  
  return (
    <section className={` ${style.container} container-fluid w-100 px-5 pt-3 `}>
      <Navbar />
      <Hero />
      <BookingContainer />
     
    </section>
  );
};

export default Main;
