import React from 'react'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

function Home() {
  return (
 <>
  <Navbar></Navbar>
  <Banner></Banner>
  <Freebook></Freebook>
  <Footer></Footer>
 </>
  )
}

export default Home