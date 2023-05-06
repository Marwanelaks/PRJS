import React from 'react';
import './navbar.css';
import logo from './LOGO Salle.jpg';
import logos from './logos.png';
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
   const navigate = useNavigate()
  return (
   //  <nav className="navbar navbar-expand-lg  bg-light">
   //   <div class="container-fluid"> <a class="navbar-brand" href="#"><img src={logos} alt="logo" className="logo" /></a>
   //    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   //      <span className="navbar-toggler-icon"></span>
   //    </button>
   //    <div className="collapse navbar-collapse" id="navbarNav">
   //      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   //        <li className="nav-item">
   //          <a className="nav-link active" href="#la-salle">La Salle</a>
   //        </li>
   //        <li className="nav-item">
   //          <a className="nav-link" href="#traiteuref">Traiteur</a>
   //        </li>
   //        <li className="nav-item">
   //          <a className="nav-link" href="#rvref">Rendez-vous</a>
   //        </li>
   //        <li className="nav-item">
   //          <a className="nav-link" href="#contact">Contact</a>
   //        </li>
   //        <li className="nav-item">
   //          <a onClick={navigate("/admin-login")} className="nav-link" href="#contact">Admin</a>
   //        </li>
   //      </ul>
   //    </div></div>
   //  </nav>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   <a class="navbar-brand" href="#"><img src={logos} alt="logo" className="logo" /></a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" href="#la-salle">La Salle</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#traiteuref">Traiteur</a>
          </li>
           <li className="nav-item">
             <Link className="nav-link" to="/Rendez-vous">Rendez-vous</Link>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#contact">Contact</a>
           </li>
           <li className="nav-item">
             <Link className='nav-link' to="/admin-login">Admin</Link>
           </li>
         </ul>
     
    </div>
  </div>
</nav>
  );
}

export default Navbar;
