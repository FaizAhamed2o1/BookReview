import PropTypes from "prop-types";

const Hashtag = ({ tag, hash = true }) => {
  return (
    <div className="rounded-full bg-[#23be0a0c] py-2 px-4 text-customPrimaryGreen text-sm sm:text-base font-medium flex">
      <span className={`${hash ? "block" : "hidden"}`}>#</span>
      <span>{tag}</span>
    </div>
  );
};

Hashtag.propTypes = {
  tag: PropTypes.string,
  hash: PropTypes.bool,
};

export default Hashtag;
