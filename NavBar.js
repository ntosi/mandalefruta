import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" > </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" >Inicio <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Contacto</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </nav>
  )
}
