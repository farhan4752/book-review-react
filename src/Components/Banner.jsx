import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="flex gap-20 container mx-auto bg-gray-200 my-10 py-20 px-32 justify-between items-center rounded-2xl ">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-extrabold font-serif">
          Explore the Pages of Stories That
        </h1>
        <h1 className="text-4xl font-extrabold font-serif">Shape Lives,</h1>
        <h1 className="text-4xl font-extrabold font-serif">Ignite Dreams,</h1>
        <h1 className="text-4xl font-extrabold font-serif">Broaden Outlook,</h1>
        <h1 className="text-4xl font-extrabold font-serif">
          and Inspire Journeys
        </h1>
        <button></button>
        <div>
          <Link
            to={"/listedBooks"}
            className="text-white bg-green-400 w-40 text-center py-2 px-5 font-semibold rounded-xl  hover:bg-green-600"
          >
            View The List
          </Link>
        </div>
      </div>
      <div>
        <img
          className="rounded-3xl shadow-2xl shadow-black"
          src="https://i.ibb.co.com/HNN5Q90/bannerbook.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
