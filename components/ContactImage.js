import React from 'react'
import Image from 'next/image';
import ContactImg from "../public/contact-image.jpg"

const ContactImage = () => {
  return (
    <div className="image-hero">
      <Image
        src={ContactImg}
        placeholder="blur"
        alt="Photo de Charles Cantin"
        layout="responsive"
      />
      <style jsx>{`
          .image-hero {
            width: 60vmin;
            height: 60vmin;
            border-radius: 50%;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
          }
          @media screen and (min-width: 500px) {
          .image-hero {
            width: 40vmin;
            height: 40vmin;
          }}
        `}</style>
    </div>
  );
}



export default ContactImage