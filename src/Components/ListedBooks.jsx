import { useState } from "react";
import ReadBook from "./ReadBook";
import WishListBook from "./WishListBook";

const ListedBooks = () => {
  // State to track which div is visible (default is 'read')
  const [visibleSection, setVisibleSection] = useState("read");

  return (
    <div className="container mx-auto">
      {/* Buttons to toggle between Read and Wishlist */}
      <div className="text-2xl font-mono flex gap-5 mt-10">
        <button
          onClick={() => setVisibleSection("read")}
          className={`text-white bg-green-400 w-40 text-center py-1 px-5 italic rounded-xl hover:bg-green-600 active:bg-black ${
            visibleSection === "read" ? "border-b-4 border-black" : ""
          }`}
        >
          Read
        </button>
        <button
          onClick={() => setVisibleSection("wishlist")}
          className={`text-white bg-blue-400 w-40 text-center py-1 px-5 italic rounded-xl hover:bg-blue-600 active:bg-black ${
            visibleSection === "wishlist" ? "border-b-4 border-black" : ""
          }`}
        >
          Wishlist
        </button>
      </div>

      {/* Conditionally render the Read or Wishlist section based on state */}
      {visibleSection === "read" && (
        <div className="bg-green-50 p-10 rounded-3xl mb-20">
          <ReadBook></ReadBook>
        </div>
      )}

      {visibleSection === "wishlist" && (
        <div className="bg-blue-50 p-10 rounded-3xl mb-20">
          <WishListBook></WishListBook>
        </div>
      )}
    </div>
  );
};

export default ListedBooks;
