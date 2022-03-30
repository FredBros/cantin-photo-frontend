import React, { useState } from "react";
import Image from "next/image";
import logoPhoto from "/public/logophoto.svg";
import Link from "next/link";
import cls from "classnames";
import { color } from "../styles/variables";
import BurgerButton from "./BurgerButton";

const Header = () => {
  const [isNavbarOpen, setisNavbarOpen] = useState(false);
  const [navColor, setNavColor] = useState(color.colorMenu);

  const handleToggle = () => {
    setisNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <Image src={logoPhoto} width="60px" height="60px" />
        <BurgerButton
          isNavbarOpen={isNavbarOpen}
          navColor={navColor}
          toggle={handleToggle}
        />
      </header>

      <nav
        onClick={handleToggle}
        className={cls("navbar", isNavbarOpen && "navbar-visible")}
      >
        <div
          className={cls(
            "nav-container",
            isNavbarOpen && "nav-container-visible"
          )}
        >
          <div className="social">
            <Link href="/">
              <a className="f-size-3">Charles Cantin</a>
            </Link>
            <a
              target="_blank"
              href="https://www.instagram.com/?hl=fr"
              className="f-size-3"
              rel="noopener"
            >
              Instagram
            </a>
            <a
              target="_blank"
              className="f-size-p"
              rel="noopener"
              href="tel:+33026598"
            >
              +33 02 65 98
            </a>
            <a
              target="_blank"
              className="f-size-p"
              href="mailto:Charles@Charlescantin.com"
              rel="noopener"
            >
              Charles@Charlescantin.com
            </a>
          </div>
          <ul className={cls("f-size-2", "nav-items")}>
            <li>
              <Link href="/">
                <a>accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a
                  onMouseEnter={() => setNavColor(color.color2)}
                  onMouseLeave={() => setNavColor(color.colorMenu)}
                >
                  gallerie
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a
                  onMouseEnter={() => setNavColor(color.color3)}
                  onMouseLeave={() => setNavColor(color.colorMenu)}
                >
                  mes services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  onMouseEnter={() => setNavColor(color.color4)}
                  onMouseLeave={() => setNavColor(color.colorMenu)}
                >
                  à propos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  onMouseEnter={() => setNavColor(color.color5)}
                  onMouseLeave={() => setNavColor(color.colorMenu)}
                >
                  contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 5px;
        }
        a {
          color: inherit;
        }
        .navbar {
          z-index: 50;
          position: absolute;
          left: 0;
          top: 0;
          background-color: ${navColor};
          transition: transform 300ms ease-out, background-color 0.3s;
          height: 100vh;
          width: 100%;
          transform: scale(1, 0);
          transform-origin: top;
        }

        .navbar-visible {
          position: fixed;
          transform: scale(100%);
        }
        .nav-container {
          padding-top: 25px;
          height: 100%;
          color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }
        .nav-container-visible {
          transition-property: color;
          color: ${color.colorText};
          transition-delay: 300ms;
          transition-duration: 0.4s;
        }
        .social {
          display: flex;
          flex-direction: column;
        }
        .social :nth-child(2n) {
          margin-bottom: 1rem;
          padding-top: 5px;
        }
        .nav-items {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 20px;
          wrap: no-wrap;
          min-width: 0;
        }

        @media screen and (min-width: 500px) {
          .nav-container {
            padding-top: 30px;
          }
        }
      `}</style>
    </>
  );
};





export default Header;
