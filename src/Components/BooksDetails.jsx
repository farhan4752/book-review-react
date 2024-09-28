import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBook, saveWishBook } from "../Utility/LocalStorage";

const BooksDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.Id === idInt);

  const handleReadBtn = () => {
    saveReadBook(idInt);
    // toast(`Great, you have completed reading this book.`);
  };
  const handleWishBtn = () => {
    saveWishBook(idInt);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-between gap-10">
        <div className="border-red border-2 bg-gray-200 p-20 rounded-2xl w-1/2">
          <img className="w-full h-full" src={book.image} alt="" />
        </div>

        <div className="w-1/2">
          <p className="text-4xl font-serif font-bold my-5 italic">
            {book.bookName}
          </p>
          <p className="text-2xl font-semibold font-mono text-gray-400 mb-5 ">
            By: {book.author}
          </p>
          <div className="border-y-2 border-gray-200 py-5 text-2xl font-semibold font-mono text-gray-600 mb-5 flex gap-10">
            <p>Category: {book.category}</p>
            <p>Genre: {book.genre}</p>
          </div>
          <p className="text-lg font-serif text-gray-500">{book.review}</p>
          <div className="flex gap-5 my-5 items-center">
            <p className="font-bold text-2xl">Tags</p>
            <p className="bg-green-50 text-green-500 font-bold px-5 py-2 rounded-xl">
              {book.tags[0]}
            </p>
            <p className="bg-green-50 text-green-500 font-bold px-5 py-2 rounded-xl">
              {book.tags[1]}
            </p>
          </div>
          <div className="border-t-2 border-gray-200 pt-5">
            <p className="flex justify-between w-[300px] text-gray-300">
              Number of Pages:
              <span className="text-black font-bold w-[100px]">
                {book.totalPages}
              </span>
            </p>
            <p className="flex justify-between w-[500px]  text-gray-300 mt-3">
              Publisher:
              <span className="text-black font-bold w-[300px]">
                {book.publisher}
              </span>
            </p>
            <p className="flex justify-between w-[300px] text-gray-300 mt-3">
              Year of Publishing:
              <span className="text-black font-bold w-[100px]">
                {book.yearOfPublishing}
              </span>
            </p>
            <p className="flex justify-between w-[300px]  text-gray-300 mt-3">
              Rating:
              <span className="text-black font-bold w-[100px]">
                {book.rating}
              </span>
            </p>
          </div>
          <div className="flex gap-5 mt-10">
            <div>
              <Link
                onClick={handleReadBtn}
                className="text-white bg-green-400 w-40 text-center py-2 px-5 font-semibold rounded-xl  hover:bg-green-600"
              >
                Read
              </Link>
            </div>
            <div>
              <Link
                onClick={handleWishBtn}
                className="text-white bg-blue-400 w-40 text-center py-2 px-5 font-semibold rounded-xl  hover:bg-blue-600"
              >
                Wishlist
              </Link>
            </div>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
