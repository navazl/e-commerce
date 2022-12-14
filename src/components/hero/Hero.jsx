import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}

      <div className={css.h_sides}>
        <span className={css.text1}>skin protecttion cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man
          </span>
        </div>
      </div>

      {/* middle side */}
      <div className={css.wrapper}>
        <div className={css.blue_circle}></div>
        <img src={HeroImg} alt="hero" width={500} />

        <div className={css.cart}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Costumers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
