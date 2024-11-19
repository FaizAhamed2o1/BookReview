const OurMission = () => {
  return (
    <div className="md:mb-24 md:grid-cols-2 grid items-center grid-cols-1 gap-6 mb-16">
      <div>
        <img
          src="https://i.ibb.co.com/z7VWWhf/young-couple-dancing-livingroom.png"
          alt=""
          className="w-full max-h-[450px]"
        />
      </div>

      <div className=" space-y-4">
        <h2 className="text-2xl sm:text-[2rem] font-heading font-bold">
          Our Mission
        </h2>

        <ul className="text-customGray07 space-y-3 leading-relaxed list-disc list-inside">
          <li>
            <strong>Inspire a Love for Reading:</strong> At Book Vibe, we aim to
            cultivate a passion for books by making it easy to explore and
            discover your next favorite read.
          </li>

          <li>
            <strong>Simplify Book Tracking:</strong> We believe in helping
            readers stay organized by providing intuitive tools to manage Wish
            Lists and Read Lists.
          </li>

          <li>
            <strong>Empower with Insights:</strong> Gain valuable insights into
            your reading habits through interactive statistics and custom bar
            charts.
          </li>

          <li>
            <strong>Encourage Personalized Experiences:</strong> Tailor your
            book exploration with sorting options that align with your
            preferences, such as pages, ratings, or publish date.
          </li>

          <li>
            <strong>Foster Accessibility:</strong> Our responsive design ensures
            a seamless and enjoyable experience across all devices, from
            desktops to smartphones.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurMission;
