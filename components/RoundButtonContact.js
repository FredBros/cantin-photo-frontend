import React from 'react'
import { color } from "../styles/variables";

const RoundButtonContact = ({link, content}) => {
  return (
    <>
      <button>
        <a href={link} about="_blank">
          <p className="btn-content">{content}</p>
        </a>
      </button>

      <style jsx>{`
        button {
          padding: 0;
          z-index: 20;
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: none;
          background-color: ${color.colorText};
          color: ${color.mainColor};
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
        }

        button::before {
          display: block;
          position: absolute;
          content: "";
          top: 0px;
          left: 0px;
          background-color: transparent;
          border-radius: 50%;
          border: solid 3px ${color.colorText};
          /*diminuer la taille à cause du border (2*2px)*/
          width: 114px;
          height: 114px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        button:hover {
          transform: scale(1.2);
        }

        @media screen and (min-width: 760px) {
          button {
            width: 140px;
            height: 140px;
          }
          button::before {
            width: 136px;
            height: 136px;
          }
        }
        @media screen and (min-width: 1200px) {
          button {
            width: 180px;
            height: 180px;
          }
          button::before {
            width: 176px;
            height: 176px;
          }
        }
        p {
          padding: 5px;
          line-height: 1.5;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default RoundButtonContact