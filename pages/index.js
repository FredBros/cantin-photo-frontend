import Head from 'next/head'
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';
import { getStrapiURL } from '../lib/api';  
import ContactModule from "../components/ContactModule"; 

export default function Home({photosData}) {
  return (
    <>
      <Hero />
      <HomeContent photosData={photosData} />
      <ContactModule />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(getStrapiURL("/api/photos?populate=*"));
  const response = await res.json();
  const photosData = response.data;


  return {
    props: {
      photosData,
    },
  };
}
