import React from 'react';
import Navbar from '../navbar/Navbar'
import Nosotros from '../contenido/Nosotros'
import Contenido from '../contenido/Contenido'
import Footer from '../footer/Footer'

// layout del home 
const Home = () => {
    return (
        <>
            <Navbar/>
            <Nosotros/>
            <Contenido/>
            <Footer/>
        </>
    )
}

export default Home