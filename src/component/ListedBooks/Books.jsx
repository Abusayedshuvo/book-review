import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoreCart } from "../../utilities/localstorage";
import ReadBooks from "./ReadBooks";

const Books = () => {
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
    <>
      <div className="mx-[135px]">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks readBooks={readBooks}></ReadBooks>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Books;
