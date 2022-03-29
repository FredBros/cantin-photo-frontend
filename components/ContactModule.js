import React from 'react'
import ContactImage from './ContactImage'
import RoundButtonContact from './RoundButtonContact';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="contactContainer">
      <h1 className="title">me contacter</h1>
      <ContactImage />
      <ContactForm />
      <div className="contact-btn">
        <RoundButtonContact link="tel:+336026598" content="+336 02 65 98" />
        <RoundButtonContact link="/instagram" content="instagram" />
      </div>
      <style jsx>{`
        .contactContainer {
          margin-bottom: 40px;
          padding-bottom: 40px;
          overflow: hidden;

        }

        
        .title {
          text-align: center;
          margin: 60px 0;
        }

        .contact-btn {
          display: flex;
          justify-content: space-evenly;
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
}

export default Contact