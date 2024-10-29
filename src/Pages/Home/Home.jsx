import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Carousel from '../../Components/Carousel/Carousel'
import PopularTour from '../../Components/PopularTour/PopularTour'
import Tours from '../../Components/Tours/Tours'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Carousel />
            <PopularTour />
            <Tours />
        </>
    )
}

export default Home