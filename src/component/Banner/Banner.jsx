import bookImg from "../../assets/pngwing.png";

const Banner = () => {
  return (
    <div className="bg-[#131313]/5 rounded-3xl py-20 px-[120px] mx-[135px]">
      <div className="grid grid-cols-2">
        <div className="my-auto">
          <h1 className="text-[56px] font-bold leading-[84px] playfair">
            Books to freshen up your bookshelf
          </h1>
          <div className="mt-12">
            <a className=" bg-[#23BE0A] px-7 py-4 text-white rounded-lg text-lg font-semibold">
              View The List
            </a>
          </div>
        </div>
        <div className="text-right">
          <img className="ml-auto" src={bookImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
