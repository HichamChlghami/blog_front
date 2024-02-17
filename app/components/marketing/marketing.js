

// "use client"
// import React, { useEffect, useState } from 'react';
// import Markbig from './markbig'
// import Marktitle from './marktitle'
// import Marksmall from './marksmall'
// import axios from 'axios';
// import Books from '../books/books';
// function Marketing() {

//   const [data, setData] = useState(null);
//   const [dataCategoryMarketing, setDataCategoryMarketing] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/get');
//         console.log('categories:', res.data);
//         setData(res.data); // Set the data received from the API
//         setLoading(false)
//       } catch (error) {
//         console.log(`Error fetching technology data: ${error}`);
//       }
//     };

//     fetchData(); // Call the function to fetch data when the component mounts
//   }, []); // Empty dependency array to trigger the effect only on initial mount



//   useEffect(() => {
//     if (data) {
//       const filteredData = data.filter((element) =>{
//       const item=  element.content.some((item) => item.value === 'Marketing_Sales')
//       return item
//       }
//       );
//       setDataCategoryMarketing(filteredData.reverse());
//       console.log('Filtered items: ', filteredData);
//     }
//   }, [data]);
  
  
  


// // it's for get the index from index1 to  index7  for get six elements
// const indexStartMarketing = 1
// const indexEndMarketing = 7
// const newDataMarketing = dataCategory.slice(indexStartMarketing, indexEndMarketing);

// // this for  get  element from 7 for smallCards
// const smallCardsStartIndexMarketing = 7;
// const smallCardsDataMarketing = dataCategory.slice(smallCardsStartIndexMarketing);
// const [visibleMarketing, setVisibleMarketing] = useState(4);
// const moreMarketing = () => {
//   // setVisible(prev => prev + 4);
//   setVisibleMarketing(smallCardsDataMarketing.length);

// };



//   return (


// <>
// {
//   loading ? (
//     <></>
//   ):(
//    <>
   
//    <div className='technology'>
//     <div className='definition'>
//         <p className='definition_p'>
//         Marketing&sales
//         </p>
//         <div className='definition_line'></div>
//     </div>
    
//     <div className='big_titles'>
// <Markbig item={dataCategoryMarketing[0]} />
// <div className='titles_post'>

// {
// newDataMarketing.map((item , index)=>(
// <Marktitle item={item} key={index}  />
// ))
// }

// </div>
// </div>
// <div className='technology_smll_card'>


// {smallCardsDataMarketing.slice(0, visibleMarketing).map((item, index) => (
//     <Marksmall item={item} key={index}  className='TechsmallHome'/>
//   ))}
 


//   {/* {lastCardssmallData.map((item, index) => (
//     <Techsmall item={item} key={index + visible} />
//   ))} */}
// </div>

// {visibleMarketing < smallCardsDataMarketing.length && (
//     <button onClick={moreMarketing} className='show'>
//       load More
//     </button>
//   )}
// </div>

// <Books/>
//    </>
//   )
// }

// </>


//   )
// }
// export default Marketing
