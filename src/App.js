import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import GrievanceForm from './components/pages/form/GrievanceForm';
import Dashboard from './components/pages/AdminDashboard/Dashboard';
import MainPage from './components/pages/AdminLogin/MainPage';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PrivacyPolicy from './components/pages/Legal/PrivacyPolicy';
import Terms from './components/pages/Legal/Terms';
import Copyright from './components/pages/Legal/Copyright';

function App() {
  return (
    <Router>
     <Navbar/>
     <AuthContextProvider>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element ={<GrievanceForm/>}/>
      <Route path ='/dashboard' element = {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path ='/login' element = {<MainPage/>}/>
      <Route path ='/privacy-policy' element = {<PrivacyPolicy/>}/>
      <Route path ='/terms-and-conditions' element = {<Terms/>}/>
      <Route path ='/copyright-notice' element = {<Copyright/>}/>
     </Routes>
     <Footer/>
     </AuthContextProvider>
      
     
    </Router>
  );
}

export default App;
