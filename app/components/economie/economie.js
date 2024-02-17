// "use client"
// import React, { useEffect, useState } from 'react';
// import Ecobig from './ecobig'
// import Ecotitle from './ecoTitle'
// import Ecosmall from './ecoSmall'
// import axios from 'axios';
// function Economie() {
//   const [data, setData] = useState(null);
//   const [dataCategoryEconomie, setDataCategoryEconomie] = useState([]);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/get');
//         console.log('categories Economi:', res.data);
//         setData(res.data); // Set the data received from the API
//         setLoading(false)

//       } catch (error) {
//         console.log(`Error fetching technology data: ${error}`);
//       }
//     };

//     fetchData(); // Call the function to fetch data when the component mounts
//   }, []);

 
//   // we use this second useEffect for filtering and avoid  the  rerundering 
//   // it will  work  just  when reload or data change  when  reload
//   useEffect(() => {
//     if (data) {
//       const filteredData = data.filter((element) =>{
//       const item = element.content.some((item) => item.value === 'Technology')
//       return item
//       }
//       );
//       setDataCategoryEconomie(filteredData.reverse());
//       console.log('Filtered items E: ', filteredData);
//     }
//   }, [data]);

//   // it's for get the index from index1 to  index7  for get six elements
// const indexStartEconomie = 1
// const indexEndEconomie = 7
// const newDataEconomie = dataCategoryEconomie.slice(indexStartEconomie, indexEndEconomie);
// // this for  get  element from 7 for smallCards
// const smallCardsStartIndexEconomie = 7;
// const smallCardsDataEconomi = dataCategoryEconomie.slice(smallCardsStartIndexEconomie);
// const [visibleEconomie, setVisibleEconomie] = useState(4);
// const moreEconomie = () => {
//   setVisibleEconomie(smallCardsDataEconomi.length);

// };

//   return (

// <>
// {
//   loading ? (
//     <></>
//   ):(
//     <div className='technology'>
//     <div className='definition'>
//         <p className='definition_p'>
//        Economie & Finance
//         </p>
//         <div className='definition_line'></div>
//     </div>
    
//     <div className='big_titles'>
// <Ecobig item={dataCategoryEconomie[0]} />
// <div className='titles_post'>
// {
// newDataEconomie.map((item , index)=>(
// <Ecotitle item={item} key={index}  />
// ))
// }

// </div>
// </div>
// <div className='technology_smll_card'>
// {smallCardsDataEconomi.slice(0, visible).map((item, index) => (
//     <Ecosmall item={item} key={index}  className='TechsmallHome'/>
//   ))}
 

// </div>

// {visibleEconomie < smallCardsDataEconomi.length && (
//     <button onClick={moreEconomie} className='show'>
//       load More
//     </button>
//   )}
// </div>
//   )
// }
// </>


//   )
// }

// export default Economie