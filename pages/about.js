import React from 'react'
import Image from 'next/image';
import AboutImg from "/public/about-img.jpg";


const About = () => {
  return (
    <div className="about">
      <h1 className="title">
        Bonjour,
        <br />
        je suis
        <br />
        Charles Cantin
      </h1>
      <div className="content">
        <div className="img">
          <Image
            src={AboutImg}
            placeholder="blur"
            alt="Photo de Charles Cantin"
            layout="responsive"
          />
        </div>
        <section className="text">
          <h3>Qui galisum</h3>
          <p>
            Lorem ipsum dolor sit amet. Qui galisum ratione dolorem itaque ut
            aspernatur minus et quod quod eos voluptas sed quod optio. Eum
            fugiat galisum At error odio ut consequatur dignissimos aut iure
            quia est laborum dolores sit officia sint.
          </p>
          <h3>Corporis qui voluptas</h3>
          <p>
            Non delectus rerum non tempora beatae quo sunt provident est autem
            aliquam non perspiciatis corporis qui voluptas explicabo ut enim
            quisquam. Cum rerum odio aut aliquid corporis qui debitis sapiente
            sed molestiae commodi et cumque ipsum.
          </p>
        </section>
      </div>

      <style jsx>{`
        .about {
          width: 100%;
          padding: 0 20px;
        }
        .title {
          text-align: center;
          margin: 60px 0;
        }
        .img {
          width: 80%;
          max-width: 450px;
          margin: 0 auto;
        }
        .text {
          margin: 30px auto 30px auto;
          max-width: 450px;
        }
        h3 {
          margin: 20px 0 10px 0;
        }
        @media screen and (min-width: 992px) {
          .title{
            margin-bottom: 80px;
          } 
          .content {
            display: flex;
            justify-content: center;
            gap: 30px;
          }
          .text {
            margin: 0;
          }
          h3:first-child {
            margin-top: 0;
          }
          .img {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default About