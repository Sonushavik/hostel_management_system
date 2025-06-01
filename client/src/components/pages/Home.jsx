import React from 'react'
import Banner from '../Body/Banner'
import About  from '../Body/About'
import Plans from '../Body/Plans'
import Service from '../Body/Service'
import ContactUs from '../Body/ContactUs'
import Gallery from '../Body/Gallery'
import Testinomials from '../Body/Testinomials'

const Home = () => {
  return (
    <>
      <section id="banner"><Banner/></section>
      <section id='about'><About/></section>
      <section id='service'><Service/></section>
      <section id='contact'><ContactUs/></section>
      <section id='gallery'><Gallery/></section>
      <section id='testinomials'><Testinomials/></section>
    </>
  )
}

export default Home
