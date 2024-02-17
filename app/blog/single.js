

"use client"
import React, { useEffect, useState , useRef , useContext } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Navbar } from '../components';
import './[id]/blog.css'
import '.././write/write.css'
import { Context } from '../context/context';
import { FaDownload , FaFacebook , FaLinkedin , FaWhatsapp ,FaTwitter , FaFacebookMessenger , } from 'react-icons/fa';
import Catsmall from '@/app/Economie_Finance/small1';
import Loading from '@/app/loading';
import Footer from '@/app/components/footer/footer';
import Webhived from '@/app/components/webhived/webhived';
import Books from '@/app/components/books/books';
import Loadsearch from '@/app/components/loading/loadSearch';
function Single({id}) {

const {user , isAdmin , check , word} = useContext(Context)
console.log(user , 'user')
console.log(isAdmin , 'isadmin')

  const [content, setContent] = useState([]);
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);
  const[showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  const [dataRelated , setDataRelated] = useState([])
  const [searchResults, setSearchResults] = useState([]);
  const [dataSearchfound, setDataSearchfound] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  

// this code reated to single_post




  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(`https://bored-flannel-nightgown-tick.cyclic.app/get/${id}`);
        setData(res.data);
        setContent(res.data.content)
        setLoadingData(false)
        setLoading(false)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    const fetchDataRelated = async () => {
      try {
        const res = await axios.get(`https://bored-flannel-nightgown-tick.cyclic.app/get/${id}/related`);
        setDataRelated(res.data);
        console.log(res.data , 'related')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


      fetchData();
      fetchDataRelated()

  }, [id]);



console.log('the content work' , content )


// code for download
const iconDownload = data?.content.find((item)=> item.type === 'filePdf')

const download = (iconDownload) => {
if(user){
const link = document.createElement('a');
link.href = iconDownload.value; // Access the first item in the 'xll' array and then its 'value' property
link.download = `${iconDownload.value}`;
// document.body.appendChild(link);
link.click();
// document.body.removeChild(link);
}
else{
window.location.href = '/sginUp';

}

};

// this the end of single_post code



// this the code  for serach bar 

useEffect(() => {
  const checkSearch = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://bored-flannel-nightgown-tick.cyclic.app/search?query=${word}`);
      setSearchResults(response.data.posts);
      setLoading(false)
      console.log('Search results:', response.data.posts);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  checkSearch();
}, [check, word]);

useEffect(() => {
  // Update dataSearchfound when searchResults change
  setDataSearchfound(searchResults.length > 0);
}, [searchResults])

// this the end for search bar









// this code for  update related to the Admin
  const addContent = type => {
    setContent([...content, { type, value: '', placeholder: true }]);
  };

  const handleImageChange = (value , type) => {
    setContent([...content, { type, value} , ]);

    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset file input value
    }
  };
 
// in first  the  value  be  ''  so empty  this   who change  the value  from empty to
//  real  content 
  const handleInputChange = (index, value) => {
    const newContent = content.map((item, i) => {
      if (i === index) {
        return { ...item, value, placeholder: false };
      }
      return item;
    });
   
    setContent(newContent);
  };

  const handleImageChanged = (value , index ) => {
    
    const newContent = content.map((item, i) => {
      if (i === index) {
        return { ...item, value };
      }
      return item;
    });

    setContent(newContent);
  };
  
  const  handledelte = (index) =>{
    const updatedContent = content.filter((_ , i)=> index !== i)
    setContent(updatedContent)

  }

  const handleCategory = (value) => {
    // setCat([...cat, { type: 'category', value }]);
    
    // Find the index of the last 'category' item in 'content'
    const lastIndex = content.slice().reverse().findIndex(item => item.type === 'category');
    const indexToReplace = lastIndex >= 0 ? content.length - 1 - lastIndex : -1;
  
    // Update 'content' by replacing the last 'category' item or adding a new one
    const updatedContent = [...content];
    if (indexToReplace >= 0) {
      updatedContent[indexToReplace] = { type: 'category', value };
    } else {
      updatedContent.push({ type: 'category', value });
    }
    
    setContent(updatedContent);
  }
  
  const handlename = (value)=>{
    
    const lastIndex = content.slice().reverse().findIndex(item => item.type === 'name');
    const indexToReplace = lastIndex >= 0 ? content.length - 1 - lastIndex : -1;
  
    // Update 'content' by replacing the last 'category' item or adding a new one
    const updatedContent = [...content];
    if (indexToReplace >= 0) {
      updatedContent[indexToReplace] = { type: 'name', value };
    } else {
      updatedContent.push({ type: 'name', value });
    }
    
    setContent(updatedContent);
  }

  const updated = async e => {

    // e.preventDefault();

    
  //   // Reverse the array
  // formattedContent.reverse();

    const formData = new FormData();

    formData.append('content', JSON.stringify(content));
    // formData.append('content', formattedContent);

    content.forEach(item => {
      if ( item.value instanceof File  ) {
       
          formData.append('files', item.value);

       
      }

    });

  

    try {
      await axios.put( `https://bored-flannel-nightgown-tick.cyclic.app/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };
// this logic for delete the post
const handleDelete = async ()=>{
  try {
    await axios.delete(`https://bored-flannel-nightgown-tick.cyclic.app/delete/${id}`)
  setShowModal(false);

    window.location.href = '/';

  } catch (error) {
    console.log('error ' , error)
  }
}
const handleDeleteClick = () => {
  setShowModal(true);
};

const handleCancel = () => {
  setShowModal(false);
};
// here the finish of delete logic 

const handleupdate = ()=>{
setUpdate(true)
}

// finish code  who related to the Admin
const shareOnFacebook = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  // const shareUrl = encodeURIComponent("https://webhived.com/");

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  // Open a new tab for the Facebook share dialog
  window.open(facebookShareUrl, '_blank');
};



const shareOnLinkedIn = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  // Open the LinkedIn sharing dialog in a new window
  window.open(linkedInShareUrl, '_blank');
};

const shareOnWhatsApp = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  const whatsAppShareUrl = `https://api.whatsapp.com/send?text=${shareUrl}`;

  // Open the WhatsApp app or web page with the pre-filled content
  window.open(whatsAppShareUrl, '_blank');
};

const shareOnTwitter = () => {
  const tweetUrl = encodeURIComponent(window.location.href);
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${tweetUrl}`;

  // Open the Twitter sharing dialog in a new window
  window.open(twitterShareUrl, '_blank');
};


const shareOnMessenger = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  const messengerShareUrl = `https://www.facebook.com/dialog/send?link=${shareUrl}`;

  // Open the Messenger dialog in a new window
  window.open(messengerShareUrl, '_blank');
};




  return (
    

<>

{
  loadingData?(
  <Loading/>

  ):(

<>

{
  update ? (
    <div className='write_page'>
    <div className='list_buttons'>
    <Link href='/'className='add_button' >Home</Link>
<button onClick={() => addContent('title1')} className='add_button'>Title1</button>
 <button onClick={() => addContent('title2')} className='add_button'>Title2</button>
    <button onClick={() => addContent('title3')} className='add_button'>Title3</button>
    
          <button onClick={() => addContent('quote')} className='add_button'>Quote</button>
          <button onClick={() => addContent('text')} className='add_button'>Text</button>
          <label htmlFor="fileInput" style={{ cursor: 'pointer' }} className='add_button'>
            image
          </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e)=>handleImageChange(e.target.files[0],'image')}
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }} 
              className='add_button'
            />


<label htmlFor="filePdf" style={{ cursor: 'pointer' }} className='add_button'>
    File_p
  </label>

    <input
      type="file"
      id="filePdf"
      onChange={(e)=>handleImageChange(e.target.files[0],'filePdf')}
      ref={fileInputRef}
      style={{ display: 'none' }} 
      className='add_button'
    />


  <button onClick={() => addContent('MetaTitle')} className='add_button'>Meta_T</button>

  <button onClick={() => addContent('MetaDescription')} className='add_button'>Meta_D</button>


          {/* <button onClick={() => addContent('subtitle')} className='add_button'>subtitle</button> */}
    </div>
    
          
    <div className='options1'>
    <label htmlFor='category'  className='option' >
      Choose:
    </label>
    <select id='category' onChange={(e)=> handleCategory(e.target.value)} className='options'>
      <option value='' className='option'>categories</option>
      <option value='Technology' className='option'>Technology</option>
      <option value='Economie & Finance' className='option'>Economie & Finance</option>
      <option value='Marketing & Sales' className='option'>Marketing & Sales</option>
      <option value='Self Development' className='option'>Self Development</option>
    </select>
    </div>
    
    <div style={{display:"none"}}></div>
    <div className='options'>
    <label htmlFor='name' className='option'>
      Choose:
    </label>
    <select id='name' onChange={(e)=> handlename(e.target.value)}>
    <option value='' className='option'>author</option>
      <option value='Saad El Bouazaoui' className='option'>Saad El Bouazaoui</option>
      <option value='Hicham Ech-Chalghami' className='option'>Hicham Ech-Chalghami</option>
    </select>
    </div>
    
          <form onSubmit={updated}>
            <div>
              {content.map((item, index) => (
                <div key={index}>
    {/* the  add  title 1 2 3 4 */}
    
                  {item.type === 'title1' && (
                    <div className='title_input'>
                    <input
                    className='title'
                      type="text"
                      value={item.value}
                      // onMouseDown={() => handleItemClick(index)}
                      onChange={e => handleInputChange(index, e.target.value)}
                      placeholder="Enter title 1"
                    />
                    <button onClick={()=>handledelte(index)} className='button_input'> delete</button>
                    </div>
                  )}
    
                  
    {item.type === 'title2' && (
                    <div className='title_input'>
                    <input
                    className='title2'
                      type="text2"
                      value={item.value}
                      // onMouseDown={() => handleItemClick(index)}
                      onChange={e => handleInputChange(index, e.target.value)}
                      placeholder="Enter title 2 "
                    />
                    <button onClick={()=>handledelte(index)} className='button_input'> delete</button>
                    </div>
                  )}
    
    
    
    {item.type === 'title3' && (
                    <div className='title_input'>
                    <input
                    className='title3'
                      type="text"
                      value={item.value}
                      // onMouseDown={() => handleItemClick(index)}
                      onChange={e => handleInputChange(index, e.target.value)}
                      placeholder="Enter title 3"
                    />
                    <button onClick={()=>handledelte(index)} className='button_input'> delete</button>
                    </div>
                  )}
    
    

    
    {/* here  will be meta title &  desription and file */}

{item.type === 'MetaTitle' && (
          <div className='title_input'>
          <input
          className='title'
            type="text"
            value={item.value}
            // onMouseDown={() => handleItemClick(index)}
            onChange={e => handleInputChange(index, e.target.value)}
            placeholder="Meta Title"
          />
          <button onClick={()=>handledelte(index)} className='button_input'> delete</button>
          </div>
          )} 


{item.type === 'MetaDescription' && (
              <div className='textarea_input'>
            <textarea
              value={item.value}
              // onMouseDown={() => handleItemClick(index)}
              onChange={e => handleInputChange(index, e.target.value)}
              placeholder=" Meta Description "
              className='textarea MetaDescription'
            ></textarea>
            <button onClick={()=>handledelte(index)} className='button_input' > delete</button>
            </div>
          )}



{
item.type === 'filePdf' && (
<div className='input_image' key={index}>
{
    (item.value instanceof File) ? (
<span className='file_name'>{item.value.name}</span>    

  ) : (
<span className='file_name'>{item.value}</span>  
)
  }

  {/* <img src={URL.createObjectURL(item.value)} className='image_write' /> */}
  <button onClick={() => handledelte(index)} className='button_input'>delete</button>
  <label htmlFor={`filechange-${index}`} style={{ cursor: 'pointer' }} className='change'>
    Upload
  </label>
  <input
    style={{ display: 'none' }}
    id={`filechange-${index}`}
    type="file"
    onChange={(e) => handleImageChanged(e.target.files[0], index)}
  />
</div>
)
}




{/*this the end of  meta title & description and file */}

    
    
    
    
    
    
             {item.type === 'quote' && (
              <> 
              <div className='input_line'></div>
            <div className='quote_input'>
    
                    <input
                    className='quote'
    
                      type="text"
                      value={item.value}
                      // onMouseDown={() => handleItemClick(index)}
                      onChange={e => handleInputChange(index, e.target.value)}
                      placeholder="Enter quote"
                    />
              <div className='input_line1'></div>
    
                    <button onClick={()=>handledelte(index)} className='button_input'> delete</button>
                    </div>
              <div className='input_line2'></div>
    
                    </>
                  )}
    
                  {item.type === 'text' && (
                      <div className='textarea_input'>
                    <textarea
                      value={item.value}
                      // onMouseDown={() => handleItemClick(index)}
                      onChange={e => handleInputChange(index, e.target.value)}
                      placeholder="Enter text"
                      className='textarea'
                    ></textarea>
                    <button onClick={()=>handledelte(index)} className='button_input' > delete</button>
                    </div>
                  )}
    
    
    
    
    

    
    
    
    
   {
item.type === 'image' && (
<div className='input_image' key={index}>
  {
    !(item.value instanceof File) ? (
      <img src={`/${item.value}`} className='image_write' alt={`Uploaded Image ${index}`} />
    ) : (
      <img src={URL.createObjectURL(item.value)} className='image_write' alt={`New Image ${index}`} />
    )
  }
  <button onClick={() => handledelte(index)} className='button_input'>delete</button>
  <label htmlFor={`filechange-${index}`} style={{ cursor: 'pointer' }} className='change'>
    Upload
  </label>
  <input
    style={{ display: 'none' }}
    id={`filechange-${index}`}
    type="file"
    onChange={(e) => handleImageChanged(e.target.files[0], index)}
    accept="image/*"
  />
</div>
)
}

    
    
    
    
    
    
    
    
                </div>
              ))}
    
              
             
              
            </div>
            <button type="submit" className='submit_button'>Submit</button>
    
          </form>

          <button onClick={handleDeleteClick} className='delete_button_admin'>Delete</button>

{showModal && (
<div className="modal">
<div className="modal-content">
  <p>Are you sure you want to delete?</p>
  <div className='controle_button_delete'>
  <button onClick={handleDelete} className='button_admin_delete'>Delete</button>
  <button onClick={handleCancel} className='button_admin_cancel'>Cancel</button>
  </div>
</div>
</div>
)}

        </div>

  ) : (
    <>

<Navbar/>
    {
      check ?(
<>
{

    <>
  {
    data &&(
<>

<>

<div className='single_post'>
  
  <div className='single_content'>
 {isAdmin &&(  <button  className='update_button_admin'  onClick={handleupdate} >update</button>
 )}  
 {
 data?.content.map((item , index)=>(
   <div key={index}>

{index === 18 && <Webhived/>}
{index === 40 && <Books/>}

   
   {item.type === "title1"&&(<h1 className='single_h1' dangerouslySetInnerHTML={{__html:item.value}} />)}
   {item.type === "title2"&&(<h2 className='single_h2' dangerouslySetInnerHTML={{__html:item.value}} />)}
   {item.type === "title3"&&(<h3 className='single_h3' dangerouslySetInnerHTML={{__html:item.value}} />)}

 
   {item.type === "quote"&&(
 <div className='single_provider'>
 <hr class="single-line"/>
 <p className='single_quote'>{item.value}</p>
 <hr class="single-line"/>
 </div>
 )}

    
{item.type === "text"&&( <p className='single-text' dangerouslySetInnerHTML={{
      __html: item.value 
      
    }} />)}
 {item.type === "image"&&(
 <div className='single_container_image'><img src={`/${item.value}`} alt='' className='single_image'/></div>
 )}
 
 
 
   </div>
 
 )
 )
 }
 
 
  </div>
 <FaDownload  onClick={()=>download(iconDownload)}  className='download_button'/> 
 
<div className='social_media'>
<h1 className='social_media_title'>Don't forget to share it !</h1>
<div className='social_media-icons'>
<FaFacebook onClick={shareOnFacebook} className='icon_share_button' />
 <FaLinkedin onClick={shareOnLinkedIn} className='icon_share_button' />
 <FaWhatsapp onClick={shareOnWhatsApp} className='icon_share_button' />
 <FaTwitter onClick={shareOnTwitter} className='icon_share_button' />
 <FaFacebookMessenger onClick={shareOnMessenger} className='icon_share_button' />

</div>
</div>



   </div>

<div className='under_post'>
<h1 className='under_post_title'>Related Articles</h1>

<div className='category_small1 '>
    <Catsmall item={dataRelated[0]}  />
    <Catsmall item={dataRelated[1]}  />
    <Catsmall item={dataRelated[2]}  />
    <Catsmall item={dataRelated[3]}  />
</div>
</div>
</>

<Footer/>
</>

    )
  }

  

    </>
  
}



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

</>
  )
}


</>

  )
}





    
    </>
    
  );
}

export default Single;
