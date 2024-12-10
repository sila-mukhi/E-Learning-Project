import React from 'react'
import Service from '../../Components/Service/Service';
import About from '../../Components/About/About';
import TeamSection from '../../Components/Team/Team';
import { assets } from '../../assets/assets';



const AboutUs = () => {

  return (
    // <!-- Header Start -->
    <>
      <div className="container-fluid bg-primary py-5 mb-5 page-header" style={{
        background: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(${assets.carousel_1})`,
        backgroundPosition: "center center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover"
      }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">

                  <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <About />
      <TeamSection />
    </>
  )
}

export default AboutUs
