import { useState } from "react";
import ReadAndWishlistBooksTabs from "../../components/ReadAndWishlistBooksTabs/ReadAndWishlistBooksTabs";

const ListedBooks = () => {
  const [selectedProperty, setSelectedProperty] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedProperty(event.target.value);
  };

  return (
    <div>
      <h1 className="text-[1.75rem] font-bold text-customBlack py-4 sm:py-8 text-center rounded-2xl bg-[#1313130c] mb-8">
        Books
      </h1>

      {/* Select Tag */}
      <div className="mb-14 w-52 mx-auto">
        <select
          className="select bg-customPrimaryGreen w-full max-w-xs text-lg font-semibold text-white"
          value={selectedProperty}
          onChange={handleSelectionChange}
        >
          <option
            value={""}
            disabled
            className="text-customGray06 text-base bg-gray-200"
          >
            Sort By
          </option>
          <option
            className="text-customGray08 text-base bg-gray-200"
            value={"rating"}
          >
            Rating
          </option>
          <option
            className="text-customGray08 text-base bg-gray-200"
            value={"numberOfPages"}
          >
            Number of pages
          </option>
          <option
            className="text-customGray08 bg-gray-200"
            value={"publishYear"}
          >
            Publish year
          </option>
        </select>
      </div>

      <ReadAndWishlistBooksTabs
        selectedProperty={selectedProperty}
      ></ReadAndWishlistBooksTabs>
    </div>
  );
};

export default ListedBooks;
