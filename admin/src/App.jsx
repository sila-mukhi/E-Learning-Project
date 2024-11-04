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
  const url = "http://localhost:4300";
  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className="app-content">
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/addCarousel" element={<AddCarousel />} />
              <Route path="/listCarousel" element={<ListCarousel />} />
              <Route path="/addCourse" element={<AddCourse url={url} />} />
              <Route path="/listCourse" element={<ListCourse url={url} />} />
              <Route path="/addInstructor" element={<AddInstructor />} />
              <Route path="/listInstructor" element={<ListInstructor />} />
              <Route path="/addCategory" element={<AddCategory />} />
              <Route path="/listCategory" element={<ListCategory />} />
              <Route path="/editCourse/:id" element={<EditCourse />} />
              <Route path="/editInstructor/:id" element={<EditInstructor />} />
              <Route path="/editCategory/:id" element={<EditCategory />} />
              <Route path="/editTestimonial/:id" element={<EditTestimonial />} />
              <Route path="/editCarousel/:id" element={<EditCarousel />} />
              <Route path="/listContact" element={<ListContact />} />
              <Route path="/addContact" element={<AddContact />} />
              <Route path="/listTestimonial" element={<ListTestimonial />} />
              <Route path="/addTestimonial" element={<AddTestimonial />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/changePassword" element={<ChangePassword />} />
            </Route>
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;












