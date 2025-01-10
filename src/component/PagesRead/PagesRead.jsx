import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getStoreCart } from "../../utilities/localstorage";
import PropTypes from "prop-types";

const colors = [
  "#0085F6",
  "#00C29C",
  "#FBB929",
  "#FF8042",
  "#FC8042",
  "#FB0100",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesRead = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      const storedBook = getStoreCart();
      const saveBook = [];
      for (const id of storedBook) {
        const book = books.find((book) => book.id == id);
        if (book) {
          saveBook.push(book);
        }
      }
      setReadBooks(saveBook);
    }
  }, [books]);

  return (
    <div className="mx-[135px]">
      <div className="bg-[#131313]/5 rounded-3xl p-20 flex flex-col justify-center items-center">
        <BarChart
          width={1000}
          height={500}
          data={readBooks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

PagesRead.propTypes = {
  fill: PropTypes.string,
};

export default PagesRead;
