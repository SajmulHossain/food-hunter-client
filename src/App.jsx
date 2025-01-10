import { Outlet } from "react-router-dom";
import Header from "./mainComponents/Header";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import useAuth from "./hooks/useAuth";
import Loading from "./components/Loading";
import Footer from "./mainComponents/Footer";

function App() {
  const { loading } = useAuth();

  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 50,
      easing: "ease",
      once: true,
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
