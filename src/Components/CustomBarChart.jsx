import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../Utility/LocalStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function CustomBarChart() {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBookIds = getStoredReadBook();
    if (books && books.length > 0) {
      const readBook = books.filter((book) =>
        storedReadBookIds.includes(book.Id)
      );
      const readbookData = readBook.map((item) => {
        return {
          name: item.bookName,
          pages: item.totalPages,
        };
      });
      setReadBooks(readbookData);
    }
  }, [books]);
  console.log(readBooks);

  return (
    <div className="container mx-auto w-fit">
      <BarChart
        width={1400}
        height={700}
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="text-[10px]" dataKey="name" />
        <YAxis />
        <Bar
          dataKey="pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readBooks.map((data, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
