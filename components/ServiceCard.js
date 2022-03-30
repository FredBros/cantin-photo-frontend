import React, {useState}from 'react'
import { color } from '../styles/variables';
import Image from 'next/image';
import { getStrapiURL } from "../lib/api";
import cls from "classnames"
import { v4 as uuidv4 } from "uuid";


const ServiceCard = ({ data }) => {
    const imgUrl = data.image.data[0].attributes.url;
    const [onHover, setOnHover] = useState(false)

  return (
    <section
      key={uuidv4()}
      className="card-container"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="card-bkgd">
        <Image
          priority={true}
          className="image"
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          alt={data.title}
        />
        <div className={cls("card-content", onHover && "card-hover")}>
          <p className="title">{data.title}</p>
          {onHover && <p>{data.description}</p>}
          {onHover && <p className="disclaimer">{data.disclaimer}</p>}
          {onHover && <div className="price">{data.price}</div>}
        </div>
      </div>
      <style jsx>{`
        .card-container {
          margin: 10px;
          overflow: hidden;
          height: 350px;
          box-shadow: 0 0 5px 1px #999;
          min-width: 250px;
          max-width: 300px;
          margin: 20px auto;
          transition: transform 0.2s;
        }
        .card-container:hover {
          transform: scale(1.05);
        }
        .card-bkgd {
          height: 100%;
          position: relative;
        }

        .image {
        }
        .card-content {
          transition: top bottom 0.2s;
          position: absolute;
          bottom: 0px;
          top: 280px;
          left: 0;
          right: 0;
          /*border-radius: 10px;*/
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background-color: ${color.mainColor};
          opacity: 80%;
          margin: 0px 10px 0px 10px;
        }
        .card-hover {
          top: 10px;
          bottom: 10px;
        }
        .title {
          font-weight: 800;
        }
        p:first-letter {
          text-transform: uppercase;
        }
        .disclaimer {
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default ServiceCard