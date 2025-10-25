import React, { useState, useEffect } from "react";

export const FilteredCourse = (props) => {
  const [filter, setFilter] = useState([]);
  const [activeCategory, setActiveCategory] = useState(""); 

  const filterClick = (ClickCategory) => {
    const filtered = props.course?.filter((r) => r.category === ClickCategory);

    if (filtered.length > 0) {
      const FilteredCourse = filtered.map((i, index) => (
     <div
  key={index}
  className="font-sans flex flex-col justify-between w-[230px] bg-white m-3 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1"
>

  <img
    className="w-full h-[140px] object-cover"
    src={i.pic}
    alt={i.title}
  />


  <div className="p-3 flex flex-col flex-grow">
 
    <h2 className="text-[16px] font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">
      {i.title}
    </h2>

    <div className="flex justify-between text-gray-500 text-sm mb-2">
      <span className="bg-blue-50 text-blue-600 px-2 py-[2px] rounded-lg text-xs font-medium">
        {i.category}
      </span>
      <span className="text-xs">⏱ {i.duration} hrs</span>
    </div>


    <div className="flex justify-between items-center text-sm mb-3">
      <span className="text-yellow-500 font-medium flex items-center">
        ⭐ {i.rating}
      </span>
      <span className="text-gray-500">{i.language}</span>
    </div>


    <p className="text-green-600 text-lg font-bold mb-3">
       {Math.round(Number(i.org_price.replace('$', '')) * 83).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
    </p>


    <div className="flex justify-between items-center gap-2 mt-auto">
      <a
        href={i.coupon}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 w-1/2 text-center"
      >
        Buy Now
      </a>

      <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 w-1/2 flex items-center justify-center">
        🛒 Add
      </button>
    </div>
  </div>
</div>

      ));

      setFilter(FilteredCourse);
      setActiveCategory(ClickCategory); 
    } else {
      setFilter(
        <div className="text-gray-500 text-center font-semibold my-10">
          No course found 
        </div>
      );
      setActiveCategory(ClickCategory);
    }
  };

  // Automatically filter "Development" category when component loads
  useEffect(() => {
    if (props.course && props.course.length > 0) {
      const defaultCategory = "Development"; // fixed default category
      const categoryExists = props.course.some(
        (item) => item.category === defaultCategory
      );

     
      if (categoryExists) {
        filterClick(defaultCategory);
      } else {
        filterClick(props.course[0].category);
      }
    }
  }, [props.course]);
// Extract unique categories
const uniqueCategories = [
  ...new Set(props.course?.map((f) => f.category))
];

// Render buttons
const FilterCourse = uniqueCategories.map((category, index) => (
  <button
    key={index}
    onClick={() => filterClick(category)}
    className={`font-bold text-[14px] border-gray-200 shadow py-2 px-4 rounded transition-all duration-200 transform
      ${
        activeCategory === category
          ? "bg-black text-white scale-95"
          : "bg-white hover:bg-blue-600 hover:text-amber-50 hover:scale-105"
      }`}
  >
    {category}
  </button>
));


  return (
    <div className="bg-gradient-to-b from-white/5 to-blue-100">
      <h1 className="align-middle text-center font-bold border-2 border-blue-600">
        Filter Course
      </h1>
      <h1 className="text-center m-10 font-bold">
        ✨ Filter Your Course Now! ✨
      </h1>

      <div className="flex flex-wrap justify-center gap-5 m-5">{FilterCourse}</div>

      <div className="flex flex-wrap justify-center gap-5 m-5">{filter}</div>
    </div>
  );
};
