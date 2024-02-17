"use client"
import './search.css'
import React ,{useState , useEffect}from 'react'
import { FaSearch } from 'react-icons/fa';

function Search() {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 150) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
   
  return (
    <div   className={`navbar_search   ${isFixed ? 'fixeding' : ''}`}>
    {/* <p className='search_pragraph'>
    Bridging the Gap Between Tech and Education
    </p> */}
   <div className="search_place">
    <input type="text"  className='search_input' placeholder='Type a Topic / Keyword...'/>
    <div  className='search_bar'><FaSearch/></div>
   </div>
</div>
  )
}

export default Search