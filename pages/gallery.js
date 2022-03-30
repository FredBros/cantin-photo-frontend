import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { sectionsDetails } from '../data/tags';
import Dropdown from '../components/Dropdown';
import GalleryComponent from '../components/GalleryComponent';
import { getStrapiURL } from "../lib/api";  


const Gallery = ({ photosData }) => {
  const router = useRouter();
  

  const [tag, setTag] = useState("");

  // si l'utilisateur arrive sur cette page par le lien des RoundButton de la page Index, on récupere le query.tag de l'adresse, sinon, on met "wedding" par defaut.
  useEffect(() => {    
    const tag = router.query.tag;
    tag ? setTag(tag) : setTag("wedding");
  }, []);

  const handleSelect = (tag) => {
    setTag(tag);
  };

  // On filtre toutes les photos pour garder que celles corerespondant au tag
const photoDataFiltered= photosData?.filter((photo) => photo.attributes.tag == tag)


  return (
    <div className="gallery-container">
      <h1>Gallerie</h1>
      
      <div className="dropdown-container">
        <Dropdown
          data={sectionsDetails}
          value={tag}
          handleSelect={handleSelect}
        />
      </div>
      <GalleryComponent photosData={photoDataFiltered} />
      <style jsx>{`
        .gallery-container {
          width: 80vw;
          margin: 60px auto 20px auto;
          overflow: hidden;
          

        }
        .dropdown-container {
          position: relative;
          padding: 10px;
          margin-bottom: 60px;
          
        }
      `}</style>
    </div>
  );
};

export default Gallery


export async function getStaticProps() {
  const res = await fetch(getStrapiURL("/api/photos?populate=*"));
  const response = await res.json();
  const photosData = response.data;
  // console.log("photosData => " ,photosData);

  return {
    props: {
      photosData,
    },
  };
}