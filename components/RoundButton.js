import React from 'react'
import Link from 'next/link';
import { color } from '../styles/variables';


const RoundButton = ({tag, link, content}) => {
  
  return (
    <>
      {/* on passe le tag pour la gallery dans le query du Link qu'on récupera
      avec useRouter */}
      <Link href={{ pathname: "/gallery", query: { tag } }} passHref>
        <button>
          <a>
            <p>{content}</p>
          </a>
        </button>
      </Link>
      <style jsx>{`
        button {
          padding: 0;
          z-index: 20;
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: none;
          background-color: ${color.colorText};
          color: ${color.mainColor};
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
          bottom: 40px;
          left: 25px;
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
          line-height: 1.2;
        }
      `}</style>
    </>
  );
}

export default RoundButton;