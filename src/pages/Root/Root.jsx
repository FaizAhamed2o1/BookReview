import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import BooksDataContext from "../../context/BooksDataContext/BooksDataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const books = useLoaderData();
  const { setBooksData } = useContext(BooksDataContext);

  useEffect(() => {
    if (books) {
      setBooksData([...books]);
    }
  }, [books, setBooksData]);

  return (
    <div>
      <div className="max-w-[73.125rem] mx-auto xl:px-0 px-4">
        <Navbar></Navbar>

        <Outlet></Outlet>

        <ToastContainer
          stacked
          style={{ maxWidth: "80%", marginTop: "22px" }}
        />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
