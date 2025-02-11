import { motion } from "motion/react";
import Heading from "./Heading";
import modal from "../utils/modal";
import contactImg from "../assets/contact.png";

const ContactForm = () => {
  const handleContactForm = (e) => {
    e.preventDefault();

    modal("Send Message!", "Message Sent Successfully", "success");
    e.target.reset();
  };
  return (
    <section className="section">
      <Heading
        heading={`Contact Us`}
        paragraph={`If you want to donate money or facing any problem`}
      />
      <div className="hero-content px-0 flex-col lg:flex-row lg:justify-between lg:items-center">
        <div data-aos="fade-right" className="w-2/3  lg:w-2/5">
          <motion.img
            src={contactImg}
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity }}
            alt="contact image"
          />
        </div>
        <div
          data-aos="fade-top"
          className="card w-full max-w-md shrink-0 shadow-2xl border border-green-600 bg-green-100 dark:bg-green-950 rounded"
        >
          <form
            onSubmit={handleContactForm}
            className="card-body px-4 pt-4 lg:px-6"
          >
            <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
              Contact now!
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered rounded-sm"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered rounded-sm"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Messeage"
                className="input input-bordered rounded-sm py-2 h-[150px]"
                name="msg"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white rounded-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
