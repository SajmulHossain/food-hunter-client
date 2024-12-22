import Lottie from "lottie-react";
import signUpLottie from '../assets/lotties/signup.json'
import GoogleSignIn from "../components/GoogleSignIn";
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-right" className="w-2/5">
          <Lottie animationData={signUpLottie} />
        </div>
        <div
          data-aos="flip-right"
          className="card w-full max-w-md shrink-0 shadow-2xl border border-green-600 bg-green-100 rounded"
        >
          <form className="card-body">
            <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
              Login now!
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded-sm"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-sm">
                Login
              </button>
            </div>
            <p className="text-xs">
              Already Have an Account?{" "}
              <Link
                to="/login"
                className="underline hover:italic font-semibold"
              >
                Login
              </Link>
            </p>
            <div className="divider">or</div>
            <GoogleSignIn/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;