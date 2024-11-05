import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import AddCourse from './Pages/AddCourse/AddCourse';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListCourse from './Pages/ListCourse/ListCourse';
import AddInstructor from './Pages/AddInstructor/AddInstructor';
import ListInstructor from './Pages/ListInstructor/ListInstructor';
import AddCarousel from './Pages/AddCarousel/AddCarousel';
import ListCarousel from './Pages/ListCarousel/ListCarousel';
import AddCategory from './Pages/AddCategory/AddCategory';
import ListCategory from './Pages/ListCategory/ListCategory';
import EditCourse from './Pages/EditCourse/EditCourse';
import ListContact from './Pages/ListContact/ListContact';
import AddContact from './Pages/AddContact/AddContact';
import ListTestimonial from './Pages/ListTestimonial/ListTestimonial';
import AddTestimonial from './Pages/AddTestimonial/AddTestimonial';
import EditInstructor from './Pages/EditInstructor/EditInstructor';
import EditCategory from './Pages/EditCategory/EditCategory';
import EditTestimonial from './Pages/EditTestimonial/EditTestimonial';
import LogIn from './Pages/LogIn/LogIn';
import PrivateComponent from './Pages/PrivateComponent/PrivateComponent';
import EditCarousel from './Pages/EditCarousel/EditCarousel';
import Profile from './Pages/Profile/Profile';
import ChangePassword from './Pages/ChangePassword/ChangePassword';

const App = () => {
  const url = "https://e-learning-project-backend.onrender.com";
  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className="app-content">
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/addCarousel" element={<AddCarousel url={url}/>} />
              <Route path="/listCarousel" element={<ListCarousel url={url}/>} />
              <Route path="/addCourse" element={<AddCourse url={url} />} />
              <Route path="/listCourse" element={<ListCourse url={url} />} />
              <Route path="/addInstructor" element={<AddInstructor url={url}/>} />
              <Route path="/listInstructor" element={<ListInstructor url={url} />} />
              <Route path="/addCategory" element={<AddCategory url={url}/>} />
              <Route path="/listCategory" element={<ListCategory url={url}/>} />
              <Route path="/editCourse/:id" element={<EditCourse url={url}/>} />
              <Route path="/editInstructor/:id" element={<EditInstructor url={url}/>} />
              <Route path="/editCategory/:id" element={<EditCategory url={url}/>} />
              <Route path="/editTestimonial/:id" element={<EditTestimonial url={url}/>} />
              <Route path="/editCarousel/:id" element={<EditCarousel url={url}/>} />
              <Route path="/listContact" element={<ListContact url={url}/>} />
              <Route path="/addContact" element={<AddContact url={url}/>} />
              <Route path="/listTestimonial" element={<ListTestimonial url={url}/>} />
              <Route path="/addTestimonial" element={<AddTestimonial url={url}/>} />
              <Route path="/profile" element={<Profile url={url}/>} />
              <Route path="/changePassword" element={<ChangePassword url={url}/>} />
            </Route>
            <Route path="/LogIn" element={<LogIn url={url} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;












