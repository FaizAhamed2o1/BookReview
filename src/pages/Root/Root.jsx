import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-[73.125rem] mx-auto xl:px-0 px-4">
        <Navbar></Navbar>

        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
