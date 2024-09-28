import { toast } from "react-toastify";

// Function to get stored read books
const getStoredReadBook = () => {
  const storedItem = localStorage.getItem("read_book");
  if (storedItem) {
    return JSON.parse(storedItem);
  }
  return [];
};

// Function to save a book to the read list and remove from wishlist
const saveReadBook = (id) => {
  const storedItems = getStoredReadBook();
  const exists = storedItems.find((bookId) => bookId === id);

  if (exists) return toast.error("This book is already in the read list");

  if (!exists) {
    // Add to read books list
    storedItems.push(id);
    localStorage.setItem("read_book", JSON.stringify(storedItems));
    toast.success("Great, you have completed reading this book.");

    // Remove from wishlist if it exists
    const wishBooks = getStoredWishBook();
    const updatedWishBooks = wishBooks.filter((bookId) => bookId !== id);
    localStorage.setItem("wish_book", JSON.stringify(updatedWishBooks));
    if (wishBooks.length !== updatedWishBooks.length) {
      toast.info("This book has been removed from the wish list.");
    }
  }
};

export { getStoredReadBook, saveReadBook };

// Function to get stored wishlist books
const getStoredWishBook = () => {
  const storedItem = localStorage.getItem("wish_book");
  if (storedItem) {
    return JSON.parse(storedItem);
  }
  return [];
};

// Function to save a book to the wishlist
const saveWishBook = (id) => {
  const readBooks = getStoredReadBook();
  const existsReadBook = readBooks.find((bookId) => bookId === id);

  if (existsReadBook) return toast.error("This book has been read already.");

  const storedItems = getStoredWishBook();
  const exists = storedItems.find((bookId) => bookId === id);

  if (exists) return toast.error("This book is already in the wish list");

  if (!exists) {
    storedItems.push(id);
    localStorage.setItem("wish_book", JSON.stringify(storedItems));
    toast.success("This book is added to the wish list.");
  }
};

export { getStoredWishBook, saveWishBook };
