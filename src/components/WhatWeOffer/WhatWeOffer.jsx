import OfferCards from "../OfferCards/OfferCards";

const WhatWeOffer = () => {
  const offers = [
    {
      offerImage: "https://i.ibb.co.com/WWtkFk7/discover-next-read.png",
      offerName: "Discover Your Next Read",
      offerDescription:
        "Explore an extensive list of books with details like title, author, reviews, and pages.",
    },
    {
      offerImage: "https://i.ibb.co.com/ck3WYkB/stay-organized.png",
      offerName: "Stay Organized",
      offerDescription:
        "Add books to your Wish List or Read List and keep track of your progress effortlessly.",
    },
    {
      offerImage: "https://i.ibb.co.com/VDnGN4R/personalized-sorting.png",
      offerName: "Personalized Sorting",
      offerDescription:
        "Sort books by pages, ratings, or publish date to find what suits your mood.",
    },
    {
      offerImage: "https://i.ibb.co.com/pzQg2yW/track-journey.png",
      offerName: "Track Your Journey",
      offerDescription:
        "Visualize your reading habits with our custom bar chart, designed to keep you motivated.",
    },
    {
      offerImage: "https://i.ibb.co.com/SNh2Dwd/data-stays-with-you.png",
      offerName: "Data That Stays With You",
      offerDescription:
        "Thanks to local storage integration, your book lists are always with you, even after refreshing the page.",
    },
    {
      offerImage: "https://i.ibb.co.com/hmKPB6y/engaging-user-experience.png",
      offerName: "Engaging User Experience",
      offerDescription:
        "Enjoy a clutter-free, minimalistic design that puts the focus on books and your reading preferences.",
    },
  ];

  return (
    <div className="md:mb-24 mb-16">
      <h2 className="text-2xl sm:text-[2rem] font-heading font-bold text-center mb-6 md:mb-10">
        What We Offer
      </h2>

      <div className="sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-5">
        {offers.map((offer, index) => (
          <OfferCards key={index} offer={offer}></OfferCards>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
