import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineStickyNote2 } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ReadBooks = ({ data }) => {
  return (
    <div>
      {data.map((readBook) => (
        <div
          key={readBook.id}
          className="border border-[#131313]/15 p-6 rounded-2xl my-10"
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-2">
              <div className="bg-[#1313130D] rounded-2xl py-7 px-12">
                <img src={readBook.image} alt="" />
              </div>
            </div>
            <div className="col-span-10 space-y-4">
              <p className="text-2xl font-bold playfair">{readBook.bookName}</p>
              <p>By : {readBook.author} </p>
              <div className="flex items-center  my-6">
                <span className="font-bold me-4">Tag</span>
                {readBook.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px]"
                  >
                    #{tag}
                  </span>
                ))}

                <div className="flex gap-2 items-center ml-4">
                  <CiLocationOn className="text-2xl font-medium" />
                  <p>Year of Publishing: {readBook.yearOfPublishing} </p>
                </div>
              </div>
              <div className="flex text-[#13131399] gap-4">
                <div className="flex gap-2 items-center">
                  <HiOutlineUsers />
                  <p>Publisher: {readBook.publisher} </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdOutlineStickyNote2 />
                  <p>Page {readBook.totalPages} </p>
                </div>
              </div>
              <hr />
              <div className="flex gap-3">
                <button className="text-[#328EFF] bg-[#328EFF26] py-3 px-5 rounded-full">
                  Category: {readBook.category}
                </button>
                <button className="text-[#FFAC33] bg-[#FFAC3326] py-3 px-5 rounded-full">
                  Rating: {readBook.rating}
                </button>
                <Link
                  className="cursor-pointer"
                  to={`/book-details/${readBook.id}`}
                >
                  <button className="text-[#fff] bg-[#23BE0A] py-3 px-5 rounded-full font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="my-10 "></div>
    </div>
  );
};

ReadBooks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ReadBooks;
