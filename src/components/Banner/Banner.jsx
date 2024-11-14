const Banner = () => {
  return (
    <div className="hero bg-customGrayBg lg:rounded-3xl rounded-xl md:mb-24 mb-16">
      <div className="hero-content w-full md:flex-row-reverse flex-col justify-between sm:px-12 sm: py-8 lg:py-20 lg:px-[7.5rem]">
        <img
          src="https://i.ibb.co.com/R0g4PwK/pngwing-com.png"
          className="max-w-52 md:max-w-72 lg:max-w-80 aspect-[2/3] drop-shadow-2xl"
        />
        <div className="max-w-[32.875rem] text-center md:text-start">
          <h1 className="font-heading lg:text-[3.5rem] md:text-5xl md:leading-relaxed lg:leading-normal leading-normal text-4xl font-bold mb-6 lg:mb-12">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn h-fit md:px-7 bg-customPrimaryGreen hover:bg-green-500 md:text-xl md:py-5 text-lg font-bold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
