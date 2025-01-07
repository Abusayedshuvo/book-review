import React from "react";
import PropTypes from "prop-types";
import bookImg from "../../assets/pngwing.png";

const BookDetails = () => {
  return (
    <div className="mx-[135px] my-20">
      <div className="grid grid-cols-12 gap-12">
        <div className="bg-[#131313]/5 p-[74px] rounded-2xl col-span-4">
          <img className="mx-auto" src={bookImg} alt="" />
        </div>
        <div className="col-span-8">
          <h1 className="text-[24px] font-bold playfair">
            The Catcher in the Rye
          </h1>
          <p className="font-medium mt-4 text-[#131313]/80 mb-6">
            By : Awlad Hossain
          </p>
          <hr />
          <p className="text-[#131313]/80 font-medium my-4">Fiction </p>
          <hr />

          <p className="mt-6">
            <b> Review :</b> Sit amet consectetur. Interdum porta pulvinar non
            sit aliquam. Aenean pulvinar blandit vel non enim elementum
            penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing
            lectus. Morbi elementum a auctor erat diam tellus. Fermentum
            faucibus nulla enim ornare. Id neque neque pretium enim platea urna
            non dictum. Faucibus dignissim ridiculus nibh tristique massa non.
          </p>

          <div className="flex items-center  my-6">
            <span className="font-bold me-4">Tag</span>
            <span className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px]">
              #Young Adult
            </span>
          </div>
          <hr />
          <div className="mt-6">
            <table>
              <tbody className="space-y-5">
                <tr>
                  <td>Number of Pages:</td>
                  <td className="font-bold pl-5">
                    <b>281</b>
                  </td>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold pl-5">J.B Lippincott & Co.</td>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold pl-5">1960</td>
                </tr>
                <tr>
                  <td>1960</td>
                  <td className="font-bold pl-5">4.8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <button className="btn btn-outline">Read</button>
            <a className="ml-4 bg-[#59C6D2] px-7 py-3 text-white rounded-lg text-lg font-semibold">
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
