import React, { useEffect } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import { SRLOptions } from '../lib/SRLOptions';
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { getStrapiURL } from "../lib/api";
import cls from "classnames";



const formatImg = (photoData) => {
  const imgWidth = photoData.attributes.photo.data.attributes.width;
  const imgHeight = photoData.attributes.photo.data.attributes.height;
  const imgRatio = imgWidth / imgHeight;
  const imgIsLandscape = imgRatio > 1;  
  return { imgIsLandscape, imgRatio };
};


const GalleryComponent = ({photosData}) => {



  return (
    <div className="gallery-container">
      {photosData && photosData.length > 0 && (
        <SRLWrapper options={SRLOptions}>
          <div className="gallery">
            {photosData.map((photo) => {
              const largeImgUrl =
                photo.attributes.photo.data.attributes.formats.large.url;
              const thumbailImgUrl =
                photo.attributes.photo.data.attributes.formats.small.url;
              const alt = photo.attributes.title;
              const { imgIsLandscape, imgRatio } = formatImg(photo);

              return (
                <a
                  className={cls(
                    "item-gallery",
                    imgIsLandscape && "img-landscape"
                  )}
                  key={uuidv4()}
                  href={largeImgUrl}
                >
                  <img
                    className="img-gallery"
                    src={thumbailImgUrl}
                    alt={alt}
                  />
                </a>
              );
            })}
          </div>
        </SRLWrapper>
      )}

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 10px;
          grid-template-rows: masonry;
        }
        
        .img-gallery {
          max-height: 350px;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        
        @media screen and (min-width: 530px){
.img-landscape {
          grid-column: span 2;}
        }

      `}</style>
    </div>
  );
};

export default GalleryComponent



