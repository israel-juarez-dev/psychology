import React from 'react'
import logo2 from "./images/logo2.bmp"
import {Switch, Route, Link, Outlet, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './MainNavBar.css'
export default function MainNavBar() {
  return (<>
    <nav className="navbar  navbar-expand-lg navbar-light bg-light  ">
    <div className="container-fluid background">
  <a className="navbar-brand" as={Link} to='/'  href="/"> <img alt='l' src={logo2} width="55px" height="55px" className="d-inline-block align-text-center"/> Mente Saludable </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" navbar-collapse " id="navbarSupportedContent">
        <ul className=" navbar-nav  me-auto mb-2 mb-lg-0 "
         style={{display: "flex",margin:"auto", width: "800px", justifyContent: "space-evenly"}} 
         >
          <li className="nav-item ">
            <a className="nav-link " aria-current="page"  as={Link} to='/'  href="/">Inicio</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " as={Link} to='/contact'  href="/contact">Contacto</a>
          </li>
          <li className="nav-item">
            


          <div className="container-fluid ">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" data-bs-auto-close="true"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLightDropdown" aria-controls="navbarNavLightDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavLightDropdown">
      <ul className="navbar-nav hover-overlay">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle "  href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className="dropdown-menu dropdown-menu-Light " aria-labelledby="navbarLightDropdownMenuLink">
            <li><a className="dropdown-item" as={Link} to='/terapiaInfantil'href="/terapiaInfantil">Terapia infantil</a></li>
            <li><a className="dropdown-item" as={Link} to='/terapiaPareja'href="/terapiaPareja">Terapia de pareja</a></li>
            <li><a className="dropdown-item" as={Link} to='/terapiaIndividual'href="/terapiaIndividual">Terapia individual</a></li>
            <li><a className="dropdown-item" as={Link} to='/terapiaFamilia' href="/terapiaFamilia">Terapia de familia</a></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
            {/* <a className="nav-link" as={Link} to='/services'  href="/services" >Servicios</a> */}
            






          </li>
          <li className="nav-item">
             {/* <a className="nav-link" as={Link} to='/about'  href="/about">Conócenos</a> */}
             <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLightDropdown" aria-controls="navbarNavLightDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavLightDropdown">
      <ul className="navbar-nav" >
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Conócenos
          </a>
          <ul className="dropdown-menu dropdown-menu-Light"  aria-labelledby="navbarLightDropdownMenuLink">
            <li ><a className="dropdown-item"  as={Link} to='/about'  href="/about">Quienes somos</a></li>
            <li><a className="dropdown-item" as={Link} to='/aboutusfaq'  href="/aboutusfaq">Preguntas frecuentes</a></li>
          
          </ul>
        </li>
      </ul>
    </div>
    </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" as={Link} to='/blog'  href="/blog">Blog</a>
          </li>
         
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Motive
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" >Action</a></li>
              <li><a className="dropdown-item" >Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" >Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
 
  
  </>
  )
}
