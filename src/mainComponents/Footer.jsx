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
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
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