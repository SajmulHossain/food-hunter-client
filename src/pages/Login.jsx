/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import loginLottie from "../assets/lotties/login.json";
import GoogleSignIn from "../components/GoogleSignIn";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "../utils/toast";

const Login = () => {
  const { login, setUser } = useAuth();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
    .then(({user}) => {
      toast('success', 'Log in successful!')
      setUser(user);
      navigate('/');
    })
    .catch(({code}) => {
      toast('error', code)
    })
  };
  return (
    <div className="min-h-screen my-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-right">
          <Lottie animationData={loginLottie} />
        </div>
        <div
          data-aos="flip-left"
          className="card w-full max-w-md shrink-0 shadow-2xl border border-green-600 bg-green-100 rounded"
        >
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
              Login now!
            </h3>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered rounded-sm"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-sm">
                Login
              </button>
            </div>

            <p className="text-xs">
              Don't Have an Account?{" "}
              <Link
                to="/sign-up"
                className="underline hover:italic font-semibold"
              >
                Register
              </Link>
            </p>
            <div className="divider">or</div>
            <GoogleSignIn />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
