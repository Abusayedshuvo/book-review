import { FiStar } from "react-icons/fi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, image, tags, bookName, author, category, rating } = book;
  return (
    <Link className="cursor-pointer" to={`/book-details/${id}`}>
      <div className="rounded-2xl p-6 border border-[#131313]/15">
        <div className="bg-[#F3F3F3] rounded-2xl p-8">
          <img className="mx-auto max-h-36" src={image} alt="" />
        </div>
        <div className="mt-6">
          <div className="flex mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[#23BE0A] font-medium bg-[#23BE0A]/5 px-4 py-2 rounded-[30px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-[24px] font-bold playfair">{bookName}</h2>
          <p className="font-medium mt-4 text-[#131313]/80">By : {author}</p>
          <div className="border border-dashed border-[#131313]/15 my-5"></div>
          <div className="flex justify-between">
            <p className="text-[#131313]/80 font-medium"> {category} </p>
            <div className="flex gap-2 items-center">
              <p className="text-[#131313]/80 font-medium"> {rating} </p>
              <FiStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
