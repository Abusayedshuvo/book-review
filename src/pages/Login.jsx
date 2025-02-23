import LinkedInImg from "../assets/linkedin.svg";
import GoogleImg from "../assets/google.svg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../utilities/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess("User login successfully");
      })
      .catch((error) => {
        setRegError(error.message);
      });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setRegError("");
    if (password.length < 6) {
      setRegError("Password should be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess("User login successfully");
      })
      .catch((error) => {
        setRegError(error.message);
      });
  };

  console.log(user);
  return (
    <>
      <div className="shadow-2xl p-20 rounded-2xl max-w-2xl mx-auto login-area mb-20">
        <p className="text-3xl font-semibold mb-5 text-center">
          Sign in to your account 👋
        </p>
        <div className="mt-4 flex justify-between gap-3">
          <button className="btn-outline flex justify-center items-center gap-3 hover:text-black">
            <img src={LinkedInImg} alt="" />
            <span> Sign in with LinkedIn</span>
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn-outline  flex justify-center items-center gap-3 hover:text-black"
          >
            <img src={GoogleImg} alt="" />
            <span>Sign in with Google</span>
          </button>
        </div>
        <div className="grid grid-cols-12 my-4 items-center">
          <div className="col-span-5">
            <hr />
          </div>
          <div className="col-span-2 text-center">OR</div>
          <div className="col-span-5">
            <hr />
          </div>
        </div>
        <form onSubmit={handleForm}>
          <div>
            <label className="font-medium text-black required">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="abusayedshuvo24@gmail.com"
            ></input>
          </div>
          <div className="mt-4">
            <label className="font-medium text-black required">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Please provide your password"
              className="valid"
              aria-invalid="false"
            ></input>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex justify-between align-center">
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                value="1"
              ></input>
              <label className="text-14">Remember Me</label>
            </div>
            <a className="forgot" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="mt-10 pt-2 text-center">
            <button
              type="submit"
              className=" bg-[#23BE0A] px-7 py-4 text-white rounded-lg text-lg font-semibold w-1/2 mx-auto"
            >
              Sign in
            </button>
          </div>
          {regError && (
            <p className="text-center text-red-600 mt-5 font-medium">
              {regError}
            </p>
          )}

          {success && (
            <p className="text-center text-green-500 mt-5 font-medium">
              {success}
            </p>
          )}
        </form>
      </div>

      {user && (
        <div className="m-40">
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
        </div>
      )}
    </>
  );
};

export default Login;
