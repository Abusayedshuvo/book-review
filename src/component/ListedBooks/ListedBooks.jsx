import React from "react";
import PropTypes from "prop-types";
import bookImg from "../../assets/pngwing.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineStickyNote2 } from "react-icons/md";

const ListedBooks = (props) => {
  return (
    <>
      <div className="bg-[#131313]/5 rounded-2xl p-8 mx-[135px] text-center">
        <p className="text-3xl font-bold">Books</p>
      </div>
      <div className="my-20 mx-[135px]">
        <div className="border border-[#131313]/15 p-6 rounded-2xl">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-2">
              <div className="bg-[#1313130D] rounded-2xl py-7 px-12">
                <img src={bookImg} alt="" />
              </div>
            </div>
            <div className="col-span-10 space-y-4">
              <p className="text-2xl font-bold playfair">
                The Catcher in the Rye
              </p>
              <p>By : Awlad Hossain</p>
              <div className="flex items-center  my-6">
                <span className="font-bold me-4">Tag</span>
                <span className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px]">
                  #Young Adult
                </span>
                <div className="flex gap-2 items-center ml-4">
                  <CiLocationOn className="text-2xl font-medium" />
                  <p>Year of Publishing: 1924</p>
                </div>
              </div>
              <div className="flex text-[#13131399] gap-4">
                <div className="flex gap-2 items-center">
                  <HiOutlineUsers />
                  <p>Publisher: Scribner</p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdOutlineStickyNote2 />
                  <p>Page 192</p>
                </div>
              </div>
              <hr />
              <div className="flex gap-3">
                <button className="text-[#328EFF] bg-[#328EFF26] py-3 px-5 rounded-full">
                  Category: Classic
                </button>
                <button className="text-[#FFAC33] bg-[#FFAC3326] py-3 px-5 rounded-full">
                  Rating: 4.5
                </button>
                <button className="text-[#fff] bg-[#23BE0A] py-3 px-5 rounded-full font-semibold">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
