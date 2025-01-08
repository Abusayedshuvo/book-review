import { Link } from "react-router-dom";
import img404 from "../../assets/4042.png";

const NotFound = () => {
  return (
    <div className="text-center not-found">
      <img className="mx-auto" src={img404} alt="" />
      <p className="text-4xl font-semibold my-3">Oops!</p>
      <p className="mb-5">{`We're sorry, The page you were looking for doesn't exist anymore.`}</p>
      <Link to="/">
        <button className=" bg-[#23BE0A] px-7 py-4 text-white rounded-lg text-lg font-semibold">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
