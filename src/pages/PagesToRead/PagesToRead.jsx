import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utilities/addToDB";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const PagesToRead = () => {
  const [chartData, setChartData] = useState([]);
  const booksData = useLoaderData();

  useEffect(() => {
    const storedBookIds = getStoredBook();
    const readBooks = booksData.filter((book) =>
      storedBookIds.includes(book.bookId),
    );
    setChartData([...readBooks]);
  }, [booksData]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} 
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    // Give the container a height so ResponsiveContainer can fill it
    <div className="h-150 w-full bg-gray-50 p-5 rounded-2xl mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }} // Added margin for rotated labels
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="bookName"
            interval={0}
            angle={-10}
            textAnchor="end" // Better for long book titles
          />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={TriangleBar} // Added the custom shape here
            label={{ position: "top" }}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
