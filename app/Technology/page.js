"use client"
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Catbig from './big1'
import Catbig2 from './big2'
import Catsmall from './small1'
import Catsmall2 from './small2'
import Cattitle from './title'
import { Navbar } from '../components'
import Loading from '../loading';
import { Context } from '../context/context';
import Footer from '../components/footer/footer';
import Books from '../components/books/books';
import Webhived from '../components/webhived/webhived';
import Loadsearch from '../components/loading/loadSearch';
function page() {
  const { check, word } = useContext(Context);

  const [data, setData] = useState(null);
  const [dataCategory, setDataCategory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
   const[checkData , setCheckData] = useState(true)
   const [dataSearchfound, setDataSearchfound] = useState(true);
   const [loading, setLoading] = useState(true);


  
 
  

  useEffect(() => {
    const checkSearch = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://bored-flannel-nightgown-tick.cyclic.app/search?query=${word}`);
        setSearchResults(response.data.posts);
        console.log('Search results:', response.data.posts);
        if(check){
        setSearchResults([]);
        console.log(check , 'check')

        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
  
    checkSearch();
  }, [word]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/get');
        console.log('categories:', res.data);
        setData(res.data); // Set the data received from the API
      } catch (error) {
        console.log(`Error fetching technology data: ${error}`);
      }
    };
  
    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array to trigger the effect only on initial mount

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((element) =>{
      const item=  element.content.some((item) => item.value === 'Technology')
      return item
      }
      );
      setDataCategory(filteredData.reverse());
      setCheckData(false)

    }
  }, [data]);

  useEffect(() => {
    // Update dataSearchfound when searchResults change
    setDataSearchfound(searchResults.length > 0);
  }, [searchResults])



  const titlePostcards = dataCategory.slice(12)
  const [visible , setVisible]=useState(2)
  const more = ()=>{
    setVisible(prev => prev+ 4)
  }
  return (
<>


{
  checkData?(
    <Loading/>

  ):(
    <div className='hidden'>
<Navbar/>
    
    {
      check ? (
        <>
        <div className='category_page'>
  <div className='category_big1'>
    <Catbig item={dataCategory[0]} />
   <Catbig2 item={dataCategory[1]}/>
  
  </div>
  <div className='category_small1'>
    <Catsmall item={dataCategory[2]}/>
    <Catsmall item={dataCategory[3]}/>
    <Catsmall item={dataCategory[4]}/>
    <Catsmall item={dataCategory[5]}/>
  
  </div>
  <Webhived/>
  
  {/* the  second  small  posts */}
  <div className='category_small1'>
  <Catsmall2 item={dataCategory[6]}/>
    <Catsmall2 item={dataCategory[7]}/>
    <Catsmall2 item={dataCategory[8]}/>
    <Catsmall2 item={dataCategory[9]}/>
  
  </div>
  {/* the  second  big posts */}
  <div className='category_big1'>
    <Catbig2 item={dataCategory[10]}/>
    <Catbig item={dataCategory[11]} />
  </div>
  <Books/>
  <div className='category_title'>
    {
      titlePostcards.slice(0 , visible).map((item , index)=>(
  <Cattitle item={item} key={index + 12}/>
  
      ))
    }
   
   
  
  </div>
  {visible < titlePostcards.length && (
          <button onClick={more} className='show'>
            load More
          </button>
        )}
  
  
  
      </div>
        <Footer/>
        </>
      ):(
        <>
        {
            loading?(
          <Loadsearch />
            
            ):(
             <>
             {
              dataSearchfound ? (
                <div className='category_small1 '>
                {searchResults.map((item, index) => (
                  <Catsmall item={item} key={index} />
                ))}
              </div>
              ):(
<>
<div className='data_not_found'>
<h1 className='data_not' >Oops! No results found.</h1>
<h1 className='data_not'>Try a different keyword or topic?</h1>

</div>
</>              )
              
             }
             </>
            )
          }
      </>
      )
    }
    </div>

  )
}

</>
  )



}

export default page