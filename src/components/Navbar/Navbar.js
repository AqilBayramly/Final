import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className='yellow__line'>

      <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle shop__Category" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Shop By Category
  </a>

  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div className='nav'>
  <p>Home</p>
  <p>Home</p>
  <p>Home</p>
  <p>Home</p>
  <p>Home</p>

</div>







      </div>

    </div>
  )
}

export default Navbar