import { useState } from "react";
import { Link } from "react-router-dom";


const NavBar=({handleSearch})=>{
  const [SearchTerm,setSearchTerm]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    handleSearch(SearchTerm);
  }
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EffSHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/cart"><img src="/images/Panier.png"  width="90px" height="70px"/></Link>
        </li>
        </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2"
         type="search" placeholder="Search"
          aria-label="Search"
          onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default NavBar;