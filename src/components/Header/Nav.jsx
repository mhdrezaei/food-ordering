import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as FoodIcon } from '../../assets/images/food-icon.svg'

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <FoodIcon fill='#ffc107' width='50px' height='50px' />
        <h1 className='h2 text-warning align-self-center my-auto px-3 '>MHD Food</h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-white bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
          <FoodIcon fill='#ffc107' width='50px' height='50px' />
          </h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
            <Link to='/add-food' className='nav-link'>Add food</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarLgDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarLgDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3 mt-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav