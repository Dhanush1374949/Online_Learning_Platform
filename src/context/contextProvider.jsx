import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Body } from '../components/Body';
import { FilteredCourse } from '../components/FilteredCourse';
import { Loading } from '../components/Loading';



const Context = () => {

const[course,setCourse]=useState([]);
const[loading,setLoading]=useState(true);

const options = {
  method: 'GET',
  url: 'https://paid-udemy-course-for-free.p.rapidapi.com/',
  params: {page: '0'},
  headers: {
    'x-rapidapi-key': '8bf26d899cmsh2a81dd6a92a9116p10370bjsn8077a6943037',
    'x-rapidapi-host': 'paid-udemy-course-for-free.p.rapidapi.com'
  }
};



async function getCourse() {

try{
	const {data}= await axios.request(options);
	console.log(data);
  setLoading(false)
  setCourse(data)

}catch{
   <div className="text-gray-500 text-center font-semibold my-10">
          Not found 
   </div>
}
} 





	


useEffect(()=>{

    getCourse();
  

},[])












    
  return (
    <div>
    {!loading?<div>
     <Body course={course} />
    <FilteredCourse course={course} />
    </div>:<Loading/>}
    
    </div>
  )
}

export default Context