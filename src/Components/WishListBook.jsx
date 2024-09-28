import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBook } from "../Utility/LocalStorage";
import { IoIosArrowDown } from "react-icons/io";

const WishListBook = () => {
  const books = useLoaderData();
  const [wishListBooks, setWishListBooks] = useState([]);
  const [sortWishListBooks, setSortWishListBooks] = useState([]);

  useEffect(() => {
    const storedWishListBookIds = getStoredWishBook();
    if (books.length > 0) {
      const wishListBook = books.filter((book) =>
        storedWishListBookIds.includes(book.Id)
      );
      setWishListBooks(wishListBook);
      setSortWishListBooks(wishListBook);
    }
  }, [books]);

  const handleSortBtn = (criteria) => {
    const sortedBooks = [...wishListBooks].sort((a, b) => {
      if (criteria === "rating") {
        return b.rating - a.rating; // Sort by rating in descending order
      } else if (criteria === "year") {
        return b.yearOfPublishing - a.yearOfPublishing; // Sort by year of publishing
      } else if (criteria === "totalPages") {
        return b.totalPages - a.totalPages; // Sort by total pages
      }
      return 0;
    });
    setSortWishListBooks(sortedBooks); // Update sorted books in state
  };
  return (
    <div>
      <div className="bg-blue-200 py-2 rounded-2xl shadow-black shadow-lg text-2xl font-bold font-mono text-center italic">
        <h2 className="">Wishlist Books</h2>
      </div>

      <div className="flex justify-center my-10">
        <details className="dropdown ">
          <summary className="btn px-10 bg-blue-500 text-green-50">
            Sort By{" "}
            <span>
              <IoIosArrowDown></IoIosArrowDown>
            </span>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li
              onClick={() => {
                handleSortBtn("rating");
              }}
            >
              <a>Rating</a>
            </li>
            <li
              onClick={() => {
                handleSortBtn("totalPages");
              }}
            >
              <a>Number of Pages</a>
            </li>
            <li
              onClick={() => {
                handleSortBtn("year");
              }}
            >
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>

      <div>
        {sortWishListBooks.map((book) => (
          <div
            key={book.Id}
            className="border-gray-300 border-2 p-10 my-5 flex items-center gap-20 rounded-3xl"
          >
            <div className="bg-gray-400 p-10 rounded-2xl shadow-black shadow-2xl">
              <img src={book.image} />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold my-3 italic">
                {book.bookName}
              </p>
              <p className="text-2xl font-semibold font-mono text-gray-600 mb-3 ">
                By: {book.author}
              </p>
              <div className="flex gap-3 my-5 items-center">
                <p className="bg-green-100 text-black italic font-bold px-2 py-1 rounded-xl">
                  Tags
                </p>
                <p className="bg-green-100 text-blue-500 italic font-bold px-2 py-1 rounded-xl">
                  #{book.tags[0]}
                </p>
                <p className="bg-green-100 text-blue-500 italic font-bold px-2 py-1 rounded-xl">
                  #{book.tags[1]}
                </p>
              </div>
              <div className="flex gap-5 mb-3 border-b-2 border-gray-300 pb-3">
                <p className="bg-gray-50 text-gray-500 px-2 py-1 rounded-2xl font-mono ">
                  Publisher: {book.publisher}
                </p>
                <p className="bg-gray-50 text-gray-500 px-2 py-1 rounded-2xl font-mono ">
                  Published: {book.yearOfPublishing}
                </p>
                <p className="bg-gray-50 text-gray-500 px-2 py-1 rounded-2xl font-mono ">
                  Pages: {book.totalPages}
                </p>
              </div>
              <div className="flex gap-5 mb-3 ">
                <p className="bg-green-50 text-green-400 px-2 py-1 rounded-2xl font-mono">
                  Category: {book.category}
                </p>
                <p className="bg-amber-100 text-amber-500 px-2 py-1 rounded-2xl font-mono">
                  Ratings: {book.rating}
                </p>
                <button className="bg-blue-600 text-green-100 px-2 py-1 rounded-2xl font-mono">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListBook;
