import { getStrapiURL } from "../lib/api";
import ServiceCard from "../components/ServiceCard";
import { v4 as uuidv4 } from "uuid";




const Services = ({servicesData}) => {
  return (
    <>
      <div className="services-container">
        <div className="h1-container">
          <h1>mes services</h1>
        </div>
        {servicesData.map((serviceData) => {
          return <ServiceCard data={serviceData.attributes} key={uuidv4()} />;
        })}
      </div>
      <style jsx>{`
        .services-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .h1-container {
          text-align: center;
          display: block;
          margin : 60px 0;
          width: 100%;
          
        }
      `}</style>
    </>
  );
};



export default Services

export async function getStaticProps() {
  const res = await fetch(getStrapiURL("/api/services?populate=*"));
  const response = await res.json();
  const servicesData = response.data;

  return {
    props: {
      servicesData,
    },
  };
}