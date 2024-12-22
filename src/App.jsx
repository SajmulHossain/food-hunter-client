import { Outlet } from "react-router-dom"
import Header from "./mainComponents/Header"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";


function App() {

  useEffect(()=> {
    Aos.init({
      duration: 500,
      offset: 50,
      easing: "ease",
      once: true,
    });
  },[])

  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-4">
        <Outlet />
      </main>
    </>
  )
}

export default App
