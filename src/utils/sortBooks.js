const sortBooks = (arrayToSort, selectedProperty) => {
  let sortedReadBooks = [];

  if (selectedProperty === "rating") {
    return (sortedReadBooks = [...arrayToSort].sort(
      (a, b) => b.rating - a.rating
    ));
  } else if (selectedProperty === "numberOfPages") {
    return (sortedReadBooks = [...arrayToSort].sort(
      (a, b) => b.totalPages - a.totalPages
    ));
  } else if (selectedProperty === "publishYear") {
    return (sortedReadBooks = [...arrayToSort].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    ));
  } else {
    return (sortedReadBooks = [...arrayToSort]);
  }
};

export default sortBooks;
