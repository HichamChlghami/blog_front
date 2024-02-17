"use client"

import React,{useState , useEffect , useContext}from 'react';
import './Navbar.css'
import '../search/search.css'
import {RiCloseLine,RiMenu3Line}from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { Context } from '@/app/context/context';
function Navbar() {
    

    const { dispatch , user , isAdmin } = useContext(Context);
    const [searchWord, setSearchWord] = useState('');
    const onSearch = (word) => {
        const trimmedWord = (word || '').trim();
        console.log('Search word:', trimmedWord);
        if (trimmedWord === '') {

        dispatch({ type: "CHECK_DATA", payload:true  , word:trimmedWord});

        } else {
         
        dispatch({ type: "CHECK_DATA", payload:false , word:trimmedWord });

        }
      };
      const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            // Enter key is pressed, send the dynamically entered search word
            onSearch(searchWord);
        }
    };
        const [isFixed, setIsFixed] = useState(false);
        const [searchMenu , setSearchMenu] = useState(true)
const handleSearchClick = ()=>{
    setSearchMenu(false)
    setMenu(true)

}

const handleMenuBar = ()=>{
    setSearchMenu(true)
    setMenu(false)


}

useEffect(()=>{
const searchBarCheck = ()=>{
  dispatch({ type: "CHECK_DATA", payload:true  , word:''});

}
if(searchMenu){
  searchBarCheck()
  setSearchWord('')
}
},[searchMenu])

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
        const handleOutClick = (event)=>{
            if(!event.target.closest('.close')){
                setMenu(false)
            }
            if(!event.target.closest('.open')){
                setMenu(true)
            }
        }

        useEffect(() => {
            document.addEventListener('click', handleOutClick);
            return () => {
              document.removeEventListener('click', handleOutClick);
            };
          }, []);

      
        const [Menu,setMenu]=useState(true)
            const Menu1 = ()=>(
            <>
               {/* <Link href='/' className='button_links'>Webhived</Link> */}
               <Link href='/Technology' className='button_links'>Technology</Link>
               <Link href='/Economie_Finance' className='button_links'>Economie & Finance</Link>
                <Link href='/Marketing_Sales' className='button_links'>Marketing & Sales</Link>
              <Link href='/Self_Development' className='button_links'>Self Development</Link>
               { isAdmin &&(  <Link href='/write' className='button_links'>write</Link>)}







            </>
        )
    return (
        <div  className={`navbar  ${isFixed ? 'navfixed' : ''}`}>
             <div className='Navbar_logo0'>
              <Link href='/'> <img src='/webhived_logo.svg' alt='webhived_logo'/> </Link>
             
</div>
             <div  className={`gpt3__Navbar  ${isFixed ? 'fixed' : ''}`} >
             <div  className='gpt3__Navbar-container'  >



                < div className='gpt3__Navbar-links'>
            <div className='gpt3__Navbar-logo'>
            <Link href='/'>
            <img src='/webhived_logo.svg' alt='webhived_logo' className='navbar_logo'/>
            </Link>

            </div>
            <div className='gpt3__Navbar-content'>
            <Menu1/>
            </div>
            </div>

         {
    searchMenu ? (< FaSearch className='FaSearch' onClick={handleSearchClick}/>):(<RiCloseLine className='FaSearchX'  onClick={()=>setSearchMenu(true)} />)
         }
            

            <div className='gpt3__Navbar-contact'>
{
 user ? (<p className='user'>{user}</p>):(
  <>
    <Link href='/logIn' className='navbar_login'>log in</Link>
           <Link href='/sginUp'  className='navbar_sginup'>Sgin up</Link>
  </>
 ) 
}
{/* <Link href='/logIn' className='navbar_login'>log in</Link>
           <Link href='/sginUp'  className='navbar_sginup'>Sgin up</Link>         */}
            </div>
            </div>
            <div className='gpt3__Navbar-menu'>
                { 
                    Menu?<RiMenu3Line color='#fff' size={27} onClick={handleMenuBar} className='open'/>
                    :< RiCloseLine color='#fff' size={27} onClick={()=>setMenu(true)} className='close'/>
                }

                {
                !Menu &&(
                    <div className='gpt3__Navbar-menu__container'>
                    <div className='gpt3__Navbar-menu__container-links'>

                    {
            user &&(
          
          <p className='user'>{user}</p>
          
         
            )
           }

            <Menu1/>
            
           
           

            {
            !user &&(
              <div className='gpt3__Navbar-sgin'>
          
           
           <Link href='/logIn'  className='navbar_login'>log in</Link>
          <Link href='/sginUp' className='navbar_sginup'>Sgin up</Link>
         
            </div>
            )
           }


            
                        </div>
                    </div>
                    )
                }
            </div>

            
        </div>
       
       {
        !searchMenu && (
            <div   className={`navbar_search   ${isFixed ? 'fixeding' : ''}`} >
   
            <div className="search_place">
             {/* <input type="text"  
             onChange={(e)=>onSearch(e.target.value)}
              className='search_input' placeholder='Type a Topic / Keyword...'/> */}
              <input
                            type="text"
                            onKeyPress={handleEnterKey} // Add this line for Enter key handling
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                            className='search_input'
                            placeholder='Type a Topic / Keyword...'
                        />

             <div  className='search_bar'><FaSearch/></div>
            </div>
         </div>
        )
       }

<>
{/* <p className='search_pragraph'>
    Bridging the Gap Between Tech and Education
    </p> */}
</>
        </div>
       
    )
    }

    export default Navbar
    