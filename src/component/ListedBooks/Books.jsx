import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoreCart, getStoreWishlist } from "../../utilities/localstorage";
import ReadBooks from "./ReadBooks";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  useEffect(() => {
    if (books.length > 0) {
      const storeWishlist = getStoreWishlist();
      const saveWishlist = [];
      for (const id of storeWishlist) {
        const wishlist = books.find((book) => book.id == id);
        if (wishlist) {
          saveWishlist.push(wishlist);
        }
      }
      setWishlist(saveWishlist);
    }
  }, [books]);

  return (
    <>
      <div className="mx-5 lg:mx-[135px]">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks data={readBooks}></ReadBooks>
          </TabPanel>
          <TabPanel>
            <ReadBooks data={wishlist}></ReadBooks>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Books;
