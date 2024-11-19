import PropTypes from "prop-types";

const OfferCards = ({ offer }) => {
  const { offerImage, offerName, offerDescription } = offer;
  return (
    <div className="rounded-2xl px-6 py-8 border shadow">
      <div className="flex items-center justify-center w-full mb-5">
        <img src={offerImage} alt="" className="size-40 object-cover" />
      </div>

      <div className=" text-center">
        <h3 className="mb-4 text-xl font-semibold">{offerName}</h3>
        <p className="text-customGray07">{offerDescription}</p>
      </div>
    </div>
  );
};

OfferCards.propTypes = {
  offer: PropTypes.object,
};

export default OfferCards;
