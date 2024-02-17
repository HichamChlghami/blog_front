// "use client"


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pigpost from './bigpost';
// import Smallpost from './smallpost';
// import Loading from '@/app/loading';
// import './feature.css'

// function Featured() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/get');
//         console.log('Received Data featured:', response.data);
//         setData(shuffleArray(response.data.slice()));
//         setLoading(false); // Set loading to false when data is received
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Set loading to false in case of error
//       }
//     };

//     fetchData();
//   }, []);


 
//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//         <div className='featured '   >
//         <Pigpost item={data[0]} />
           
//         <div className='small_posts'>
//         <Smallpost className='smallpost' item={data[1]}/>
//          <Smallpost className='smallpost' item={data[2]}/>
//          <div className='ok'>
//          <Smallpost className='smallpost1' item={data[3]}/>
//          <Smallpost className='smallpost2'item={data[4]}/>
//          </div>
//         </div>
          
           
//         </div>
//         </>
//       )}
//     </>
//   );
// }

// export default Featured;
