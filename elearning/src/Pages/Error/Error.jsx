import React from 'react'
import { assets } from '../../assets/assets';
const Error = () => {
    return (
        <>

             <div   className="container-fluid bg-primary py-5 mb-5 page-header"   style={{
    background: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(${assets.carousel_1})`
  }}
>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Not Found</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">
                                We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
                            </p>
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                Go Back To Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Error
