import { Outlet } from "react-router-dom";
import "./App.css";
import BookDetails from "./component/BookDetails/BookDetails";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <BookDetails></BookDetails>
    </>
  );
}

export default App;
