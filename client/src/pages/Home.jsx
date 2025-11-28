import React from 'react'
import HeroSlider from '../components/HeroSlider'
import FeaturedProducts from '../components/FeaturedProducts'
import Features from '../components/Features'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <Features/>
      <FeaturedProducts/>
      <NewsLetter/>
    </div>
  )
}

export default Home