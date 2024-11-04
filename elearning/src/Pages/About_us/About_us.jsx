import React from 'react'
import Service from '../../Components/Service/Service';
import About from '../../Components/About/About';
import TeamSection from '../../Components/Team/Team';


const About_us = () => {
  const backgroundStyle = {
    background: 'linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url("../../src/assets/carousel_1.jpg)',
    backgroundPosition: 'Center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
}
  return (
    // <!-- Header Start -->
    <>
    <div className="container-fluid bg-primary py-5 mb-5 page-header" style={{ backgroundStyle}}>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <Service/>
      <About/>
      <TeamSection/>
    </>
  )
}

export default About_us