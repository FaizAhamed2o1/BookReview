import { useState } from "react";

import { successToast } from "../../utils/toasts";

const RequestBooks = () => {
  const [bookName, setBookName] = useState("favorite book");
  const [authorName, setAuthorName] = useState("Jon Doe");
  const [publishDate, setPublishDate] = useState("publish year");

  const handleSubmit = (e) => {
    e.preventDefault();

    successToast(
      "Thank you for your request❤️. We will notify you as soon as the book is available."
    );
  };

  const handleBookNameChange = (e) => setBookName(e.target.value);
  const handleAuthorNameChange = (e) => setAuthorName(e.target.value);
  const handlePublishDateChange = (e) => setPublishDate(e.target.value);

  return (
    <div>
      <h1 className="text-[1.75rem] font-bold text-customBlack py-4 sm:py-8 text-center rounded-2xl bg-[#1313130c] mb-8">
        Request your favorite books!
      </h1>

      <div className=" px-6 py-12 bg-[#23be0a0c] rounded-2xl md:mb-24 mb-16">
        <form
          action=""
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Book name"
            name="bookName"
            className="input input-bordered w-full"
            value={bookName}
            onChange={handleBookNameChange}
          />

          <input
            type="text"
            placeholder="Author name"
            name="authorName"
            className="input input-bordered w-full"
            value={authorName}
            onChange={handleAuthorNameChange}
          />

          <input
            type="text"
            placeholder="Publish Date"
            name="publishDate"
            className="input input-bordered w-full"
            value={publishDate}
            onChange={handlePublishDateChange}
          />

          <div className="text-end">
            <input
              type="submit"
              value="Submit"
              className="btn md:py-4 md:px-5 md:text-lg bg-customPrimaryGreen h-fit hover:bg-green-500 sm:text-base text-sm font-semibold text-white outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestBooks;
