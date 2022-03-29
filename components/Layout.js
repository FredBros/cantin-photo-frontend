import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { color } from '../styles/variables'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <style jsx global>{`
        body {
          color: ${color.colorText};
        }
      `}</style>
    </>
  );
}

export default Layout