import { FiStar } from "react-icons/fi";
import bookImg from "../../assets/pngwing.png";

const Books = () => {
  return (
    <div className="my-[100px] mx-[135px]">
      <p className="text-center font-bold text-[40px]">Books</p>
      <div className="mt-9 grid grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 border border-[#131313]/15">
          <div className="bg-[#F3F3F3] rounded-2xl p-8">
            <img className="mx-auto" src={bookImg} alt="" />
          </div>
          <div className="mt-6">
            <div className="flex mb-4">
              <span className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px]">
                Young Adult
              </span>
              <span className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px] ml-3">
                Identity
              </span>
            </div>
            <h2 className="text-[24px] font-bold playfair">
              The Catcher in the Rye
            </h2>
            <p className="font-medium mt-4 text-[#131313]/80">
              By : Awlad Hossain
            </p>
            <div className="border border-dashed border-[#131313]/15 my-5"></div>
            <div className="flex justify-between">
              <p className="text-[#131313]/80 font-medium">Fiction</p>
              <div className="flex gap-2 items-center">
                <p className="text-[#131313]/80 font-medium">5.00</p>
                <FiStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
