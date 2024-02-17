
"use client"
import './loading.css'
import React, { useEffect, useState, useContext } from 'react';
import { Navbar, Technology, Economie, Marketing, Development } from "./components";
import Catsmall from './Economie_Finance/small1';
import axios from 'axios';
import Loading from './loading';
import Footer from './components/footer/footer';
import { Context } from './context/context';
import Loadsearch from './components/loading/loadSearch';
// the logic for featured
import Pigpost from './components/featured/bigpost';
import Smallpost from './components/featured/smallpost';
import './components/featured/feature.css'
// the logic for technology 
import './components/technology/tech.css'
import Techbig from './components/technology/techbig';
import Techtitle from './components/technology/techtitle';
import Techsmall from './components/technology/techsmall';
import Webhived from './components/webhived/webhived';
// the logic for Economi 
import Ecobig from './components/economie/ecobig';
import Ecotitle from './components/economie/ecoTitle';
import Ecosmall from './components/economie/ecoSmall';
//  the logic for Marketing
import Markbig from './components/marketing/markbig';
import Marktitle from './components/marketing/marktitle';
import Marksmall from './components/marketing/marksmall';
import Books from './components/books/books';
// the logic for self_development
import Devbig from './components/development/devbig';
import Devsmall from './components/development/devsmall';
import Devtitle from './components/development/devtitle';
import { Truculenta } from 'next/font/google';
function Page() {
// the logic for featured page 
  const [data, setData] = useState([]);
  const [loading1, setLoading1] = useState(true);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    // Fetch data from local storage on component mount
    const storedData = localStorage.getItem('featuredData');
    const storedTimestamp = localStorage.getItem('featuredTimestamp');
    const currentTime = new Date().getTime();

    if (storedData && storedTimestamp) {
      // Check if data is within the last 24 hours
      if (currentTime - parseInt(storedTimestamp, 10) < 24 * 60 * 60 * 1000) {
      setData(JSON.parse(storedData));
        return; // Don't fetch new data
      }
    }

    // Fetch new data if not in local storage or if data is outdated
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bored-flannel-nightgown-tick.cyclic.app/get');
        console.log('Received Data featured:', response.data);
        const shuffledData = shuffleArray(response.data.slice());
        setData(shuffledData);

        
        // Save new data and timestamp to local storage
        localStorage.setItem('featuredData', JSON.stringify(shuffledData));
        localStorage.setItem('featuredTimestamp', currentTime.toString());
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    // Update data every 24 hours
    const interval = setInterval(() => {
      fetchData();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clear interval on component unmount or cleanup
    return () => clearInterval(interval);
  }, []);
                         // the logic for technolgy 
const [FullData, setFullData] = useState(null);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://bored-flannel-nightgown-tick.cyclic.app/get');
        console.log('categories:', res.data);
        setFullData(res.data); // Set the data received from the API
        setLoading1(false);


        
      } catch (error) {
        console.log(`Error fetching technology data: ${error}`);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array to trigger the effect only on initial mount


  useEffect(() => {
    if (FullData) {
      const filteredData = FullData.filter((element) =>{
      const item=  element.content.some((item) => item.value === 'Technology')
      return item
      }
      );
      setDataCategory(filteredData.reverse());
    }
  }, [FullData]);
  
  
  


// it's for get the index from index1 to  index7  for get six elements
const indexStart = 1
const indexEnd = 7
const newData = dataCategory.slice(indexStart, indexEnd);

// this for  get  element from 7 for smallCards
const smallCardsStartIndex = 7;
const smallCardsData = dataCategory.slice(smallCardsStartIndex);
const [visible, setVisible] = useState(4);
const more = () => {
  setVisible(prev => prev + 4);
  // setVisible(smallCardsData.length);

};

              //  the logic for Economi&finance#############
const [dataCategoryEconomie, setDataCategoryEconomie] = useState([]);

useEffect(() => {
  if (FullData) {
    const filteredData = FullData.filter((element) =>{
    const item = element.content.some((item) => item.value === 'Economie_Finance')
    return item
    }
    );
    setDataCategoryEconomie(filteredData.reverse());
   

  }
}, [FullData]);
// it's for get the index from index1 to  index7  for get six elements
const indexStartEconomie = 1
const indexEndEconomie = 7
const newDataEconomie = dataCategoryEconomie.slice(indexStartEconomie, indexEndEconomie);
// this for  get  element from 7 for smallCards
const smallCardsStartIndexEconomie = 7;
const smallCardsDataEconomie = dataCategoryEconomie.slice(smallCardsStartIndexEconomie);
const [visibleEconomie, setVisibleEconomie] = useState(4);
const moreEconomie = () => {
setVisibleEconomie(prev => prev + 4);

};

            // the Marketing logic ###########
const [dataCategoryMarketing, setDataCategoryMarketing] = useState([]);

useEffect(() => {
  if (FullData) {
    const filteredData = FullData.filter((element) =>{
    const item=  element.content.some((item) => item.value === 'Marketing_Sales')
    return item
    }
    );
    setDataCategoryMarketing(filteredData.reverse());
  }
}, [FullData]);

// it's for get the index from index1 to  index7  for get six elements
const indexStartMarketing = 1
const indexEndMarketing = 7
const newDataMarketing = dataCategory.slice(indexStartMarketing, indexEndMarketing);

// this for  get  element from 7 for smallCards
const smallCardsStartIndexMarketing = 7;
const smallCardsDataMarketing = dataCategoryMarketing.slice(smallCardsStartIndexMarketing);
const [visibleMarketing, setVisibleMarketing] = useState(4);
const moreMarketing = () => {
// setVisible(prev => prev + 4);
setVisibleMarketing(prev => prev + 4);

};

               // the logic for self_development ############

const [dataCategoryDevelopment, setDataCategoryDevelopment] = useState([]);
useEffect(() => {
  if (FullData) {
    const filteredData = FullData.filter((element) =>{
    const item=  element.content.some((item) => item.value === 'Self_Development')
    return item
    }
    );
    setDataCategoryDevelopment(filteredData.reverse());
  }
}, [FullData]);

// it's for get the index from index1 to  index7  for get six elements
const indexStartDevelopment = 1
const indexEndDevelopment = 7
const newDataDevelopment = dataCategory.slice(indexStartDevelopment, indexEndDevelopment);

// this for  get  element from 7 for smallCards
const smallCardsStartIndexDevelopment = 7;
const smallCardsDataDevelopment = dataCategoryDevelopment.slice(smallCardsStartIndexDevelopment);
const [visibleDevelopment, setVisibleDevelopment] = useState(4);
const moreDevelopment = () => {
  // setVisible(prev => prev + 4);
  setVisibleDevelopment(prev => prev + 4);

};



                               // the logic for the page
  const { check, word } = useContext(Context);

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSearchfound, setDataSearchfound] = useState(true);

  useEffect(() => {
    const checkSearch = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://bored-flannel-nightgown-tick.cyclic.app/search?query=${word}`);
        setSearchResults(response.data.posts);

        setLoading(false);
        if(check){
          setSearchResults([]);
          console.log(check , 'check')
  
          }
        console.log('Search results:', response.data.posts);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
  
    checkSearch();
  }, [word]);
  

  useEffect(() => {
   
    setDataSearchfound(searchResults.length > 0)
    
  }, [searchResults ])

 
  

  return (
    <>


{
  loading1 ? (
    <Loading />
  ):(
    <div className='hidden'>
    
    <Navbar />

{check ? (

<>
{/* the logic for featured */}
<>


<div className='featured '   >
  <Pigpost item={data[0]} />
     
  <div className='small_posts'>
  <Smallpost className='smallpost' item={data[1]}/>
   <Smallpost className='smallpost' item={data[2]}/>
   <div className='ok'>
   <Smallpost className='smallpost1' item={data[3]}/>
   <Smallpost className='smallpost2'item={data[4]}/>
   </div>
  </div>
    
     
  </div>

</>
 {/* the logic for Technology */}
 <>
      <div className='technology'>
      <div className='definition'>
          <p className='definition_p'>
          Technology
          </p>
          <div className='definition_line'></div>
      </div>
      
      <div className='big_titles'>
<Techbig item={dataCategory[0]} />
<div className='titles_post'>

{
newData.map((item , index)=>(
  <Techtitle item={item} key={index}  />
))
}

</div>
</div>
<div className='technology_smll_card'>


{smallCardsData.slice(0, visible).map((item, index) => (
      <Techsmall item={item} key={index}  className='TechsmallHome'/>
    ))}
   
   
    {/* {lastCardssmallData.map((item, index) => (
      <Techsmall item={item} key={index + visible} />
    ))} */}
</div>
{visible < smallCardsData.length && (
      <button onClick={more} className='show'>
        load More
      </button>
    )}


  </div>

<Webhived/>
  </>
{/* the logic for Economie */}
<>
<div className='technology'>
    <div className='definition'>
        <p className='definition_p'>
       Economie & Finance
        </p>
        <div className='definition_line'></div>
    </div>
    
    <div className='big_titles'>
<Ecobig item={dataCategoryEconomie[0]} />
<div className='titles_post'>
{
newDataEconomie.map((item , index)=>(
<Ecotitle item={item} key={index}  />
))
}

</div>
</div>
<div className='technology_smll_card'>
{smallCardsDataEconomie.slice(0, visibleEconomie).map((item, index) => (
    <Ecosmall item={item} key={index}  className='TechsmallHome'/>
  ))}
 

</div>

{visibleEconomie < smallCardsDataEconomie.length && (
    <button onClick={moreEconomie} className='show'>
      load More
    </button>
  )}
</div>
</>
{/* the logic for Marketing */}
<>
   
   <div className='technology'>
    <div className='definition'>
        <p className='definition_p'>
        Marketing&sales
        </p>
        <div className='definition_line'></div>
    </div>
    
    <div className='big_titles'>
<Markbig item={dataCategoryMarketing[0]} />
<div className='titles_post'>

{
newDataMarketing.map((item , index)=>(
<Marktitle item={item} key={index}  />
))
}

</div>
</div>
<div className='technology_smll_card'>


{smallCardsDataMarketing.slice(0, visibleMarketing).map((item, index) => (
    <Marksmall item={item} key={index}  className='TechsmallHome'/>
  ))}
 



</div>

{visibleMarketing < smallCardsDataMarketing.length && (
    <button onClick={moreMarketing} className='show'>
      load More
    </button>
  )}
</div>

<Books/>
   </>
   {/* the logic for  self_development */}
   <>
   <div className='technology'>
        <div className='definition'>
            <p className='definition_p'>
           Self Development
            </p>
            <div className='definition_line'></div>
        </div>
        
        <div className='big_titles'>
  <Devbig item={dataCategoryDevelopment[0]} />
  <div className='titles_post'>

{
  newDataDevelopment.map((item , index)=>(
    <Devtitle item={item} key={index}  />
  ))
}

  </div>
</div>
<div className='technology_smll_card'>


  {smallCardsDataDevelopment.slice(0, visibleDevelopment).map((item, index) => (
        <Devsmall item={item} key={index}  className='TechsmallHome'/>
      ))}
     
    

      {/* {lastCardssmallData.map((item, index) => (
        <Techsmall item={item} key={index + visible} />
      ))} */}
</div>
{visibleDevelopment < smallCardsDataDevelopment.length && (
        <button onClick={moreDevelopment} className='show'>
          load More
        </button>
      )}

    </div>
   
   </>
<Footer />
</>



):(
  <>
  {loading ? (
    <Loadsearch />
  ) : (
    <>
      {dataSearchfound ? (
        <div className='category_small1'>
          {searchResults.map((item, index) => (
            <Catsmall item={item} key={index} />
          ))}
        </div>
      ) : (

<>
<div className='data_not_found'>
<h1 className='data_not' >Oops! No results found.</h1>
<h1 className='data_not'>Try a different keyword or topic?</h1>

</div>
</>
      )}
    </>
  )}
</>
)

}   
    </div>
  )
}


     



    </>
  );
}

export default Page;
