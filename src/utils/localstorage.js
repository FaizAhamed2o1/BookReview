import removeArrayElementByValue from "./removeArrayElementByValue";

// Info: To get the items from the local storage
const getStoredBooks = (fieldName) => {
  const storedBooks = localStorage.getItem(fieldName);

  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const setBooksToLocalStorage = (fieldName, bookId) => {
  // Note: fetching the books from the local storage
  const fetchedBooks = getStoredBooks(fieldName);

  const alreadyReadOrWishlisted = fetchedBooks.find(
    (fetchedBookId) => fetchedBookId === bookId
  );

  if (!alreadyReadOrWishlisted) {
    fetchedBooks.push(bookId);
    localStorage.setItem(fieldName, JSON.stringify(fetchedBooks));
    return false;
  } else {
    return true;
  }
};

const removeFromWishlist = (bookId) => {
  const wishlistedBooks = getStoredBooks("wishlistedBook");

  removeArrayElementByValue(wishlistedBooks, bookId);

  localStorage.setItem("wishlistedBook", JSON.stringify(wishlistedBooks));
};

export { getStoredBooks, setBooksToLocalStorage, removeFromWishlist };
