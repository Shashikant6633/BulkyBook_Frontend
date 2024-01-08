import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
 
export function Nav() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand text-light" href="/home">Bulky Books</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active text-light" aria-current="page" href="/home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/#">Privacy</a>
      </li>
     
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle light text-light" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/category">Category</a></li>
          <li><a className="dropdown-item" href="/product">Product</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="/#">Something else here</a></li>
        </ul>
      </li> */}
      </ul>
    <form className="d-flex" role="search">
      <a className="btn btn-outline-success text-light mx-2" href='/register'>REGISTER</a>
      <a className="btn btn-outline-success text-light mx-2" href='/login'>LOGIN</a>
     
    </form>
  </div>
</div>
</nav>
  </div>
    );
}
export function Navuser() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
    const username = loggedInUser ? JSON.parse(loggedInUser).username : '';
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand text-light" href="">Bulky Books</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active text-light" aria-current="page" href="">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="">Privacy</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/Cart"><FontAwesomeIcon icon={faCartShopping} /></a>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle light text-light" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/category">Category</a></li>
          <li><a className="dropdown-item" href="/product">Product</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="/#">Something else here</a></li>
        </ul>
      </li> */}
      </ul>
    <form className="d-flex" role="search">
      <p className='text-light fst-italic nav-item'>{username}</p>
      {/* <a className="btn btn-outline-success text-light mx-2" href='/register'>REGISTER</a> */}
      <a className="btn btn-outline-success text-light mx-2" href='/login'>Log Out</a>
     
    </form>
  </div>
</div>
</nav>
  </div>
    );
}
export function Navadmin() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand text-light" href="">Bulky Books</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active text-light" aria-current="page" href="/admin">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="">Privacy</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle light text-light" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Content Management
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/category">Category</a></li>
          <li><a className="dropdown-item" href="/product">Product</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="/#">Something else here</a></li>
        </ul>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link text-light" href="/Cart"><FontAwesomeIcon icon={faCartShopping} /></a>
      </li> */}
      </ul>
    <form className="d-flex" role="search">
      {/* <a className="btn btn-outline-success text-light mx-2" href='/register'>REGISTER</a> */}
      <a className="btn btn-outline-success text-light mx-2" href='/login'>Log Out</a>
     
    </form>
  </div>
</div>
</nav>
  </div>
    );
}
 
export default function Navbar(props) {
    if (props.user) {
        return <Navuser />;
    }
    if (props.admin) {
        return <Navadmin />;
    }
    else {
        return <Nav />;
    }
}