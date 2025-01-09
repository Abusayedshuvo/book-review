import PropTypes from "prop-types";
import Books from "./Books";

const ListedBooks = (props) => {
  return (
    <>
      <div className="bg-[#131313]/5 rounded-2xl p-8 mx-[135px] text-center">
        <p className="text-3xl font-bold">Books</p>
      </div>
      <div className="text-center mt-8">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Published year</option>
        </select>
      </div>
      <Books></Books>
    </>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
