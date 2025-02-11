import Lottie from "lottie-react";
import signUpLottie from "../assets/lotties/signup.json";
import GoogleSignIn from "../components/GoogleSignIn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "../utils/toast";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { signUp, updateUserInfo, setUser, setLoading } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = e.target.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regexUppercase = /[A-Z]/;
    const regexLowercase = /[a-z]/;

    if (password.length < 6) {
      return setError("Password must contain atleast 6 characters.");
    }

    if (!regexUppercase.test(password)) {
      return setError("Password must contain atleast one uppercase letter.");
    }

    if (!regexLowercase.test(password)) {
      return setError("Password must contain atleast one lowercase letter.");
    }

    const userData = {
      displayName: name,
      photoURL: photo,
    };

    signUp(email, password)
      .then(({ user }) => {
        setUser(user);
        updateUserInfo(userData)
          .then(() => {
            navigate(state || "/");
            toast("success", "SignUp Successfull!");
          })
          .catch(({ code }) => {
            toast("error", code);
          });
      })
      .catch(({ code }) => {
        toast("error", code);
        setLoading(false);
      });
  };
  return (
    <div className="section page">
      <Helmet>
        <title>Sign Up || Food Hunter</title>
      </Helmet>
      <div className="hero-content px-0 flex-col lg:flex-row-reverse">
        <div data-aos="fade-right" className="lg:w-2/5">
          <Lottie animationData={signUpLottie} />
        </div>
        <div
          data-aos="flip-right"
          className="card w-full max-w-md shrink-0 shadow-2xl border dark:bg-transparent border-green-600 bg-green-100 rounded"
        >
          <form onSubmit={handleSignUp} className="card-body px-4 lg:px-6">
            <h3 className="text-3xl text-center font-semibold mb-4 border-b py-2 border-green-950">
              Sign Up now!
            </h3>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered rounded-sm"
                name="name"
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered rounded-sm"
                name="photo"
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
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-600 dark:bg-green-800 text-white/50 hover:bg-green-700 text-white rounded-sm"
              >
                Sign Up
              </button>
            </div>
            <p className="text-xs">
              Already Have an Account?{" "}
              <Link
                state={state}
                to="/login"
                className="underline hover:italic font-semibold"
              >
                Login
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

export default SignUp;
