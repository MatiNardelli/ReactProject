import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
        {/* diferencia entre a y link es que en el primero recarga toda la pag y en el segundo no y me demanda menos datos y procesamiento. Para index sigue siendo del tipo "a" */}
        {/* <a href="/about">About</a> */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> */}
        <Navbar />
        <hr />


        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="about" element={<AboutPage/>}/>

          {/* en caso de navegar a una ruta que no existe */}
          {/* <Route path="/*" element={<LoginPage/>}/> */}
          {/* esta opcion, si quieren ir a una ruta que no existe, te manda de nuevo a una ruta especifica, en este caso about */}
          <Route path="/*" element={<Navigate to={"/about"}/>}/>

        </Routes>  

    </UserProvider>
    
  )
}
