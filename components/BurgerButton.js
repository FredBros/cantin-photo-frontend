import React from 'react'
import cls from "classnames";
import { color } from "../styles/variables";


const BurgerButton = ({toggle, navColor, isNavbarOpen}) => {
  return (
      
    <button className="hamburger-button" onClick={toggle}>
      <span
        className={cls("hamburger-span", isNavbarOpen && "hamburger-open")}
      ></span>
      <style jsx>{`
        .hamburger-button {
          width: 30px;
          height: 30px;
          border-radius: 0;
          border: none;
          background-color: ${color.colorText};
          padding: 0;
          cursor: pointer;
        }

        .hamburger-button:hover {
        }
        

        .hamburger-span {
          display: block;
          position: absolute;
          width: 30px;
          height: 2px;
          background-color: transparent;
        }
        span::before,
        span::after {
          transition: all 0.3s ease-in-out;
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          transform: translateY(-1px);
          background-color: ${color.mainColor};
          left: 0;
        }
        span::before {
        }
        span::after {
        }
        .hamburger-open::before {
          transform: rotateZ(45deg);
          background-color: ${navColor};
        }
        .hamburger-open::after {
          transform: rotateZ(-45deg);
          background-color: ${navColor};
        }

        @media screen and (min-width: 768px) {
          .hamburger-button {
            width: 60px;
            height: 60px;
          }
          span::before,
          span::after {
            height: 4px;
            width: 60px;
            transform: translateY(-2px);
          }
        }
      `}</style>
    </button>
    
  );
}

export default BurgerButton