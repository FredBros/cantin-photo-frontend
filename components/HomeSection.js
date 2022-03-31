import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { getStrapiURL } from "../lib/api";
import cls from "classnames";
import RoundButton from "../components/RoundButton"
import { Parallax } from "react-scroll-parallax";

let imgIsLeft = false;

const formatImg = (photoData) => {
  
  const imgWidth = photoData.attributes.photo.data.attributes.width;
  const imgHeight = photoData.attributes.photo.data.attributes.height;
  const imgRatio = imgWidth / imgHeight;
  const imgIsPortrait = imgRatio < 1;
  imgIsPortrait && (imgIsLeft = !imgIsLeft);
  return { imgIsPortrait, imgRatio, imgIsLeft };
};




const HomeSection = ({ tag, photosData, section, bodyColor }) => {

 
  return (
    <section className="homeSection" key={uuidv4()}>
      <Parallax translateY={[-100, 400]}>
        <h1 className="section-title">{section}</h1>
      </Parallax>

      <RoundButton tag={tag} content={`gallerie ${section}`} />

      {photosData.map((photoData, index) => {
        const imgUrl = photoData.attributes.photo.data.attributes.url;
        const alt = photoData.attributes.title;

        const { imgIsPortrait, imgRatio, imgIsLeft } = formatImg(photoData);

        return (
          <div
            className={cls(
              "img-container",

              imgIsPortrait && "img-container-portrait"
            )}
            key={uuidv4()}
          >
            <Image
              className="image"
              priority={true}
              src={imgUrl}
              width={`${imgRatio * 100}%`}
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt={alt}
            />
          </div>
        );
      })}

      <style jsx>{`
        .homeSection {
          margin-top: 0px;
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 150px 10px 130px 10px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 200px;
        }

        .img-container {
          position: relative;
          margin: 10px 0;
        }
        .img-container-portrait {
          width: 70%;
          margin: 10px auto;
          ${imgIsLeft
            ? "transform: translateX(-12vw);"
            : "transform: translateX(12vw);"}
        }

        @media screen and (min-width: 576px) {
          .homeSection {
            padding-top: 200px;
          }
          .section-title {
            margin-bottom: 300px;
          }
        }
        @media screen and (min-width: 768px) {
          .homeSection {
            padding-top: 400px;
          }
          .section-title {
            margin-bottom: 500px;
          }
          .img-container {
            width: 70%;
            margin: 10px auto;
          }
          .img-container-portrait {
            width: 45%;
            ${imgIsLeft
              ? "transform: translateX(-20vw);"
              : "transform: translateX(20vw);"}
          }
        }
        @media screen and (min-width: 1200px) {
          .homeSection {
            padding-top: 500px;
          }
          .section-title {
            margin-bottom: 700px;
          }
          .img-container {
            width: 50%;
            margin: 10px auto;
          }
          .img-container-portrait {
            width: 30%;
          }
        }
      `}</style>
    </section>
  );
};
export default HomeSection;
