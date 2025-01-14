import LinkedInImg from "../assets/linkedin.svg";
import GoogleImg from "../assets/google.svg";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../utilities/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {

const handleGoogleLogin = () => {
  signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user;
    console.log(user);
  })
  .catch(error => {
    console.log(error);
  })
  console.log(app);
}

  return (
    <div className="shadow-2xl p-20 rounded-2xl max-w-2xl mx-auto login-area">
      <p className="text-3xl font-semibold mb-5 text-center">Sign in to your account 👋</p>
      <div className="mt-4 flex justify-between gap-3">
        <button className="btn-outline flex justify-center items-center gap-3 hover:text-black">
          <img src={LinkedInImg} alt="" />
          <span> Sign in with LinkedIn</span>
        </button>
        <button onClick={handleGoogleLogin} className="btn-outline  flex justify-center items-center gap-3 hover:text-black">
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
      <form action="#">
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
        <div className="mt-14 pt-2 text-center">
          <button
            type="submit"
            className=" bg-[#23BE0A] px-7 py-4 text-white rounded-lg text-lg font-semibold w-1/2 mx-auto"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
