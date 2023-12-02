import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }


  return (
    <div >
        <nav className="navbar navbar-expand-lg  bg-success">
  <div className="container-fluid bg-success">
    <Link className="navbar-brand text-white bg-success fs-1 fst-italic fw-bolder" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-success text-dark"></span>
    </button>

    <div className="collapse navbar-collapse bg-success" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item bg-success ">
          <Link className="nav-link active text-white fs-5" aria-current="page" to="/">Home</Link>
        </li>  
        {
          localStorage.getItem("authToken") ?
          <li className="nav-item bg-success ">
          <Link className="nav-link active text-white fs-5" aria-current="page" to="/">My Orders</Link>
        </li>
        :  " " 
        }
      </ul>
        {
          (!localStorage.getItem("authToken")) ?

    <div className='d-flex bg-success'>
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success  mx-1" to="/createuser">SignUp</Link>
    </div> 
    :
    <div className='bg-success'>
      <div className='btn bg-white text-success mx-2'>My Cart</div>
      <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
    </div>
    
        }

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar