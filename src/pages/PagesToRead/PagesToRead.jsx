import CustomShapeBarChart from "../../components/CustomShapeBarChart/CustomShapeBarChart";
import useBookData from "../../hooks/useBookData";

const PagesToRead = () => {
  const readBooksData = useBookData("readBooks");

  // Note: Extracted the bookName and totalPages from the readBooksData and kept then in a separate array of object
  const barChartData = readBooksData.map(({ bookName, totalPages }) => ({
    bookName,
    totalPages,
  }));

  return (
    <div>
      <div className="sm:p-5 md:p-11 bg-customGrayBg rounded-2xl md:mb-24 mb-16">
        <CustomShapeBarChart barChartData={barChartData}></CustomShapeBarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
