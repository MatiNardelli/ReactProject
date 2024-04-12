import { Link,NavLink } from 'react-router-dom';

    // navlink cumple la misma tarea que link pero le puedo especificar una clase particular dependiendo de donde se encuentre.

export const Navbar = () => {
  return (
    // si uso class como el comentario puedo crear na clase y no una referencia en html y por lo tanto es una mala practica en jsx
    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">useContext</Link>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item"> */}
            {/* active hace que empieza de un color y vaya bajando el tono */}
          {/* <a className="nav-link" aria-current="page" href="#">Home</a>
        </li> */}

        <NavLink 
            // className: muestra el link como un nombre normal y no diferente
            // className={(args)=>{
            //     console.log(args)
            //     return 'nav-link'   
            // }}
            className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}
            to="/"
        >
            Home
        </NavLink>

        <NavLink 
            className={({isActive})=> `nav-link ${ isActive ? 'active' : '' }`}
            to="/about"
        >
            About
        </NavLink>
        <NavLink 
            className={({isActive})=> `nav-link ${ isActive ? 'active' : '' }`}
            to="/login"
        >
            Login
        </NavLink>

        {/* <li className="nav-item">
          <a className="nav-link active" href="#">Features</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    </div>
    </nav>
    
  )
}

