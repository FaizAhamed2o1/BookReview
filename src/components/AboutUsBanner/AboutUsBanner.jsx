import { Link } from "react-router-dom";

const AboutUsBanner = () => {
  return (
    <div
      className="hero lg:rounded-3xl rounded-xl md:mb-24 min-h-[50vh] mb-16"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/BZS6mSN/about-us-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 lg:rounded-3xl rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="font-heading mb-5 text-5xl font-bold">
            Welcome to Book Vibe
          </h1>
          <p className="mb-5">
            Your Personalized Reading Companion. At Book Vibe, we make
            discovering, tracking, and organizing your reading journey a breeze.
          </p>
          <Link to="/">
            <button className="btn btn-primary bg-customPrimaryGreen hover:bg-green-600 hover:border-transparent text-lg border-transparent outline-none">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
