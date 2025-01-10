import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-green-200">
      <section className="footer text-base-content max-w-screen-lg mx-auto px-4 py-12 lg:py-20">
        <aside>
          <img src={logo} className="h-20 w-20 rounded-full" alt="logo" />
          <p className="max-w-[300px]">
            <span className="italic font-bold text-xl">Food Hunter</span>
            <br />
            <span>Providing food to the people living under proverty 2024</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <Link to='/foods' className="link link-hover">Foods</Link>
          <Link to='/manage-foods' className="link link-hover">Manage Foods</Link>
          <Link to='/food-request' className="link link-hover">Request Food</Link>
        </nav>
      </section>
      <div className="text-center text-black border-y border-green-800 py-4 ">
        <p>
          {`Copyright © ${new Date().getFullYear()} - All right reserved by `}
          <span className="font-bold italic"> Food Hunter</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;