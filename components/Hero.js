import React from "react";
import Image from "next/image";
import HeroImg from "../public/hero-img.jpg";
import { useState, useEffect } from "react";
import cls from "classnames";

const Hero = () => {
const [isLoaded, setIsLoaded] = useState(false)
useEffect(() => {
  setIsLoaded(true);  
  }
, [])



  return (
    <div className="hero">
      <div className="hero-txt-top">
        <span
          className={cls("f-size-2", "span-left", isLoaded && "span-in")}
          initial={{ x: "calc(0px - (100vw + 50%))" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        >
          bonjour
        </span>

        <span className={cls("f-size-2", "span-right", isLoaded && "span-in")}>
          je suis
        </span>
      </div>

      <div className={cls("image-hero", isLoaded && "image-hero-in")}>
        <Image
          src={HeroImg}
          placeholder="blur"
          alt="Photo de Charles Cantin"
          layout="responsive"
        />
      </div>

      <div className="hero-txt-bot">
        <span className={cls("f-size-2", "span-left", isLoaded && "span-in")}>
          Charles
        </span>

        <span className={cls("f-size-2", "span-right", isLoaded && "span-in")}>
          Cantin
        </span>
      </div>

      <style jsx>{`
        .hero {
          overflow: hidden;
          padding-top: 60px;
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .hero-txt-top,
        .hero-txt-bot {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        span {
          padding: 5px 15px;
          transition: transform 0.4s ease-in-out 0.3s;
        }

        .span-left {
          transform: translateX(calc((100vw) * -1));
        }

        .span-right {
          transform: translateX(calc(100vw - 50%));
        }
        .span-in {
          transform: none;
        }
        .image-hero {
          width: 90vmin;
          height: 90vmin;
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          transform: scale(0);
          transition: transform 0.4s ease-in-out;
        }
        .image-hero-in {
          transform: scale(1);
        }

        @media screen and (min-width: 500px) {
          .image-hero {
            width: 50vmin;
            height: 50vmin;
          }
        }
        @media screen and (min-width: 800px) {
          .hero-txt-top,
          .hero-txt-bot {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
