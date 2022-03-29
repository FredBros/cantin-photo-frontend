import React from 'react'
import { useState } from 'react';import { color } from "../styles/variables";





const test = () => {

    const [navColor, setNavColor] = useState(color.colorMenu);
  return (
    <>
      <div className="testdiv">
        <h1
          className="h1test"
          onMouseEnter={() => setNavColor(color.color5)}
          onMouseLeave={() => setNavColor(color.colorMenu)}
        >
          test
        </h1>
      </div>
      <div className="testdiv2">div2</div>

      <style jsx>{`
        .testdiv {
          background-color: ${navColor};
          transition: background-color 300ms;
        }
        .testdiv2 {
          border-radius: 50%;
          width: 90vw;
          height: 90vw;
          

          background-color: ${color.color2};
        }
      `}</style>
    </>
  );
}

export default test