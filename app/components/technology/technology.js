// "use client"
// import React, { useEffect, useState } from 'react';
// import './tech.css'
// import Techbig from './techbig'
// import Techtitle from './techtitle'
// import Techsmall from './techsmall'
// import axios from 'axios';
// import Webhived from '../webhived/webhived';
// function Technology() {

//   const [dataTchnolgy, setDataTechnology] = useState(null);
//   const [dataCategory, setDataCategory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/get');
//         console.log('categories:', res.data);
//         setDataTechnology(res.data); // Set the data received from the API
//         setLoading(false)
//       } catch (error) {
//         console.log(`Error fetching technology data: ${error}`);
//       }
//     };

//     fetchData(); // Call the function to fetch data when the component mounts
//   }, []); // Empty dependency array to trigger the effect only on initial mount


//   useEffect(() => {
//     if (dataTchnolgy) {
//       const filteredData = dataTchnolgy.filter((element) =>{
//       const item=  element.content.some((item) => item.value === 'Technology')
//       return item
//       }
//       );
//       setDataCategory(filteredData.reverse());
//       console.log('Filtered items: ', filteredData);
//     }
//   }, [dataTchnolgy]);
  
  
  


// console.log('categoljhg',dataCategory)
// // it's for get the index from index1 to  index7  for get six elements
// const indexStart = 1
// const indexEnd = 7
// const newData = dataCategory.slice(indexStart, indexEnd);

// // this for  get  element from 7 for smallCards
// const smallCardsStartIndex = 7;
// const smallCardsData = dataCategory.slice(smallCardsStartIndex);
// const [visible, setVisible] = useState(4);
// const more = () => {
//   // setVisible(prev => prev + 4);
//   setVisible(smallCardsData.length);

// };



//   return (
//    <>
//    {
//     loading ? (
//       <></>
//     ):(
//       <>
//       <div className='technology'>
//       <div className='definition'>
//           <p className='definition_p'>
//           Technology
//           </p>
//           <div className='definition_line'></div>
//       </div>
      
//       <div className='big_titles'>
// <Techbig item={dataCategory[0]} />
// <div className='titles_post'>

// {
// newData.map((item , index)=>(
//   <Techtitle item={item} key={index}  />
// ))
// }

// </div>
// </div>
// <div className='technology_smll_card'>


// {smallCardsData.slice(0, visible).map((item, index) => (
//       <Techsmall item={item} key={index}  className='TechsmallHome'/>
//     ))}
   
   
//     {/* {lastCardssmallData.map((item, index) => (
//       <Techsmall item={item} key={index + visible} />
//     ))} */}
// </div>
// {visible < smallCardsData.length && (
//       <button onClick={more} className='show'>
//         load More
//       </button>
//     )}


//   </div>

// <Webhived/>
//       </>
//     )
//    }
//    </>
//   )
// }

// export default Technology