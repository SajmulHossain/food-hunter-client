import { Outlet } from "react-router-dom"
import Header from "./mainComponents/Header"


function App() {

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
