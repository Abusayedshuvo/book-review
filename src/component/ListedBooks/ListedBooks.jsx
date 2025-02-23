import PropTypes from "prop-types";
import Books from "./Books";

const ListedBooks = (props) => {
  return (
    <>
      <div className="bg-[#131313]/5 rounded-2xl p-8 mx-5 lg:mx-[135px] text-center">
        <p className="text-3xl font-bold">Books</p>
      </div>
      <div className="text-center mt-8">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected></option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Published year</option>
        </select>

        <details className="dropdown">
          <summary className="btn m-1"> Sort By </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a href="">Number of pages</a>
            </li>
            <li>
              <a> Published year </a>
            </li>
          </ul>
        </details>
      </div>
      <Books></Books>
    </>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
