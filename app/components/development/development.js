
// "use client"
// import React, { useEffect, useState } from 'react';
// import Devbig from './devbig'
// import Devsmall from './devsmall'
// import Devtitle from './devtitle'
// import axios from 'axios';

// function Development() {

//   const [data, setData] = useState(null);
//   const [dataCategoryDevelopment, setDataCategoryDevelopment] = useState([]);
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
//       const item=  element.content.some((item) => item.value === 'Technology')
//       return item
//       }
//       );
//       setDataCategoryDevelopment(filteredData.reverse());
//       console.log('Filtered items: ', filteredData);
//     }
//   }, [data]);
  
  
  


// // it's for get the index from index1 to  index7  for get six elements
// const indexStartDevelopment = 1
// const indexEndDevelopment = 7
// const newDataDevelopment = dataCategory.slice(indexStartDevelopment, indexEndDevelopment);

// // this for  get  element from 7 for smallCards
// const smallCardsStartIndexDevelopment = 7;
// const smallCardsDataDevelopment = dataCategoryDevelopment.slice(smallCardsStartIndexDevelopment);
// const [visibleDevelopment, setVisibleDevelopment] = useState(4);
// const moreDevelopment = () => {
//   // setVisible(prev => prev + 4);
//   setVisibleDevelopment(smallCardsDataDevelopment.length);

// };



//   return (



// <>
// {
//   loading ? (
//     <></>
//   ):(
    
//     <div className='technology'>
//         <div className='definition'>
//             <p className='definition_p'>
//             Development
//             </p>
//             <div className='definition_line'></div>
//         </div>
        
//         <div className='big_titles'>
//   <Devbig item={dataCategoryDevelopment[0]} />
//   <div className='titles_post'>

// {
//   newDataDevelopment.map((item , index)=>(
//     <Devtitle item={item} key={index}  />
//   ))
// }

//   </div>
// </div>
// <div className='technology_smll_card'>


//   {smallCardsDataDevelopment.slice(0, visibleDevelopment).map((item, index) => (
//         <Devsmall item={item} key={index}  className='TechsmallHome'/>
//       ))}
     
    

//       {/* {lastCardssmallData.map((item, index) => (
//         <Techsmall item={item} key={index + visible} />
//       ))} */}
// </div>
// {visibleDevelopment < smallCardsDataDevelopment.length && (
//         <button onClick={moreDevelopment} className='show'>
//           load More
//         </button>
//       )}

//     </div>
//   )
// }
// </>


//   )
// }

// export default Development




