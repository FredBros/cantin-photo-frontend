import React from 'react'
import { tags } from '../data/tags';
import { sectionsDetails } from '../data/tags';
import HomeSection from './HomeSection';
import { v4 as uuidv4 } from 'uuid';



const HomeContent = ({photosData}) => {   
   
  return (
    //On map l'objet "sectionsDetails" qui contient les tags et le nom en fr des sections, et les couleurs"
    // pour chaque tag, on prend les 3 premieres photos
    // et on les passe au composant <HomeSection>
    <div className="home-container">
      {sectionsDetails.map((detail) => {
        const photos = photosData
          .filter((photo) => photo.attributes.tag == detail.tag)
          .slice(0, 3);
        

        return (
          <HomeSection
            key={uuidv4()}
            tag={detail.tag}
            section={detail.title}
            photosData={photos}
            bodyColor={detail.color}
          />
        );
      })}
      <style jsx>{`
        .home-container {
          margin-top: 80px;
          width: 98vw;
          overflow: hidden;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default HomeContent




