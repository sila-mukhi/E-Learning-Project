import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import OurTeam from './Pages/OurTeam/OurTeam';
import Testiminal_Page from './Pages/TestimonialPage/TestimonialPage';
import Error from './Pages/Error/Error';
import VerifyEmail from './Components/VerifyEmail/VerifyEmail';
import SuccessVerification from './Components/SuccessVerification/SuccessVerification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/testimonial_page" element={<Testiminal_Page />} />
        <Route path="/error" element={<Error />} />
        <Route path="/verify-email" element={<VerifyEmail />} /> {/* Changed to lowercase */}
        <Route path="/success-verification" element={<SuccessVerification />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
      </Routes>

      <Footer />
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
