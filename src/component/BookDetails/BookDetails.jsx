import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addToLS } from "../../utilities/localstorage";
import { useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const [readBooks, setReadBooks] = useState([]);

  const handleRead = (id) => {
    const isExist = readBooks.find((readBook) => readBook == id);
    console.log(isExist);
    if (!isExist) {
      setReadBooks([...readBooks, id]);
      addToLS(id);
      toast("The book is listed to your reading list.");
    } else {
      toast.warn("Already added this one");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mx-[135px] my-20">
        <div className="grid grid-cols-12 gap-12">
          <div className="bg-[#131313]/5 p-[74px] rounded-2xl col-span-4 flex justify-center items-center">
            <img className="mx-auto" src={`../${image}`} alt="" />
          </div>
          <div className="col-span-8">
            <h1 className="text-[24px] font-bold playfair">{bookName}</h1>
            <p className="font-medium mt-4 text-[#131313]/80 mb-6">
              By : {author}
            </p>
            <hr />
            <p className="text-[#131313]/80 font-medium my-4"> {category} </p>
            <hr />

            <p className="mt-6">
              <b> Review :</b> {review}
            </p>

            <div className="flex items-center  my-6">
              <span className="font-bold me-4">Tag</span>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px] mr-3"
                >
                  {tag}
                </span>
              ))}
            </div>
            <hr />
            <div className="mt-6">
              <table>
                <tbody className="space-y-5">
                  <tr>
                    <td>Number of Pages:</td>
                    <td className="font-semibold pl-5">{totalPages}</td>
                  </tr>
                  <tr>
                    <td>Publisher:</td>
                    <td className="font-semibold pl-5"> {publisher} </td>
                  </tr>
                  <tr>
                    <td>Year of Publishing:</td>
                    <td className="font-semibold pl-5"> {yearOfPublishing} </td>
                  </tr>
                  <tr>
                    <td> Rating </td>
                    <td className="font-semibold pl-5"> {rating} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleRead(id)}
                className="btn btn-outline  border-[#131313]/30  rounded-lg text-lg font-semibold px-7 py-3 h-[57px]"
              >
                Read
              </button>
              <button
                onClick={() => handleRead(id)}
                className="ml-4 bg-[#59C6D2] px-7 py-3 text-white rounded-lg text-lg font-semibold h-[57px]"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
