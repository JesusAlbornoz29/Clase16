import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  return (
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Navbar/>
      <Outlet/>
   </div>
  )
}

export default App
