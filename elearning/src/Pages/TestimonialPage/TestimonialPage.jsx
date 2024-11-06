import React from 'react'
import TestimonialSection from '../../Components/Testimonial/Testimonial'
import {assets} from "../../assets/assets";
const TestimonialPage = () => {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 mb-5 page-header"style={{  background: linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)),`url(${assets.carousel_1})`}}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Testimonial</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <TestimonialSection />
        </div>
    )
}

export default TestimonialPage
