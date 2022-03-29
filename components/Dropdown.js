import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { color } from '../styles/variables';
import { useState } from 'react';
import cls from "classnames";
import ArrowSVG from './ArrowSVG';


const Dropdown = ({ data, value, handleSelect} ) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen);
    

  return (
    <div className={cls("dropdown", "f-size_p")} onClick={toggling}>
      <div className="dropdown-header">
        {/* technique de ninja pour récupérer le title lié au tag. Et si c'est pas loadé, on met un espace pour garder la taille de la div. */}
        {value && value.length > 0
          ? data.find((el) => el.tag === value).title
          : " "}

        {/* conversion d'un SVG en composant grâce à SVGR */}
        <ArrowSVG
          fill={color.mainColor}
          height="25px"
          transform={isOpen ? "rotate(180)" : ""}
        />
      </div>
      {isOpen && (
        <ul className="dropdown_list">
          {data.map((data) => (
            <li key={uuidv4()} onClick={() => handleSelect(data.tag)}>
              {data.title}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .dropdown {
           position: absolute; 
           width: 200px;
        
          cursor: pointer;
          color: ${color.mainColor};
          line-height: 1.5;
        }
        .dropdown-header,
        li {
          background-color: ${color.colorText};
          padding: 15px;
          margin: 2px;
        }
        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
      `}</style>
    </div>
  );
}

export default Dropdown