"use client"
import React ,{useState} from 'react'
import axios from 'axios'
import { Navbar } from '../index.js';
import Small from './small.js';
function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);

    const HandleSearch = async (word) => {
        try {
          const response = await axios.get(`http://localhost:5000/search?query=${word}`);
          setSearchResults(response.data.posts);
          console.log('searchly' , response.data.posts)
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
  return (
    <>
<Navbar HandleSearch={HandleSearch}/>
<div className='category_small1'>
  {
    searchResults.map((item, index) => (
      <Small item={item} key={index} />
    ))
  }
</div>
    </>
  )
}

export default SearchPage