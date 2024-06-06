import { useEffect, useState } from "react";
import style from "./Main.module.css";
const Hero = ()=>{

  const [textChangeAnimation, setTextChangeAnimation] = useState("Stay");
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextChangeAnimation((prevText) =>
        prevText === "Stay" ? "Time" : "Stay",
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


    return <div className="px-4 py-5 my-5 text-start">
    <h1
      className="display-6 fw-bold m-0 text-secondary pt-5"
      style={{ maxWidth: "800px" }}
    >
      Amahi Inn: Creating Special Moments, Every
      <span className={`${style.textEffect} text-light`}>
        {" "}
        {textChangeAnimation}
      </span>{" "}
      for You.
    </h1>
  </div>
}

export default Hero;