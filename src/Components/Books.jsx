import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/BooksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10 italic font-serif">
        Total Books: {books.length}
      </h1>

      <div className="grid grid-cols-3 gap-10 container mx-auto my-20">
        {books.map((book) => (
          <Link to={`book/${book.Id}`} key={book.Id}>
            <div className="border-gray-300 rounded-3xl border-2 p-10">
              <div className="bg-gray-100 rounded-3xl">
                <img
                  className="w-[134px] h-[250px] container mx-auto py-5"
                  src={book.image}
                />
              </div>
              <div className="flex gap-5 my-5">
                <p className="bg-green-100 text-green-600 font-bold px-5 py-2 rounded-xl">
                  {book.tags[0]}
                </p>
                <p className="bg-green-100 text-green-600 font-bold px-5 py-2 rounded-xl">
                  {book.tags[1]}
                </p>
              </div>
              <p className="text-2l font-semibold font-serif">
                {book.bookName}
              </p>
              <p className="text-gray-500 font-serif"> By: {book.author}</p>

              <div className="border-t-2 border-gray-300 border-dotted mt-5 pt-5 flex justify-between text-gray-400">
                <p>{book.category}</p>
                <p className="flex gap-2 items-center">
                  {book.rating}
                  <span>
                    <IoIosStarOutline></IoIosStarOutline>
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
