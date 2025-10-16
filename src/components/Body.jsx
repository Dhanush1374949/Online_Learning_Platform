import React from 'react'

export const Body = (props) => {





const showCourse=props.course?.map((i,index)=>{
  if (index) 
    return (
      <div
  key={index}
  className="font-sans flex flex-col justify-between w-[230px] bg-white m-3 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1"
>
  {/* Image */}
  <img
    className="w-full h-[140px] object-cover"
    src={i.pic}
    alt={i.title}
  />

  {/* Content */}
  <div className="p-3 flex flex-col flex-grow">
    {/* Title */}
    <h2 className="text-[16px] font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">
      {i.title}
    </h2>

    {/* Category + Duration */}
    <div className="flex justify-between text-gray-500 text-sm mb-2">
      <span className="bg-blue-50 text-blue-600 px-2 py-[2px] rounded-lg text-xs font-medium">
        {i.category}
      </span>
      <span className="text-xs">⏱ {i.duration} hrs</span>
    </div>

    {/* Rating & Language */}
    <div className="flex justify-between items-center text-sm mb-3">
      <span className="text-yellow-500 font-medium flex items-center">
        ⭐ {i.rating}
      </span>
      <span className="text-gray-500">{i.language}</span>
    </div>

    {/* Price */}
    <p className="text-green-600 text-lg font-bold mb-3">
      {i.org_price}
    </p>

    {/* Buttons */}
    <div className="flex justify-between items-center gap-2 mt-auto">
      <a href={i.coupon} target="_blank" rel="noopener noreferrer"
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

    )
})



 return (
    <div className=' bg-gradient-to-b from-white/5 to-blue-100 '>
        <h1 className=' align-middle text-center font-bold border-2 border-blue-600' >All Course</h1>
        <h1 className=' align-middle text-center mt-10 m-3  font-bold' >Course Detials</h1>
        <h1 className=' align-middle text-center  font-bold' > “Do your Course today — don’t miss it!” </h1>


        <div className='flex flex-wrap  justify-center gap-2 p-4'>
         {showCourse}
        </div>
    </div>
  )
}