import React from "react";
import PhoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={PhoneImg} alt="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
