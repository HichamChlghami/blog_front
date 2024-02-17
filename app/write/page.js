"use client"
import './write.css'
import React, { useState  , useRef  , useContext} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Context } from '../context/context';
function WritePost() {
  const [content, setContent] = useState([]);
const {isAdmin} = useContext(Context)

  const fileInputRef = useRef(null);
  
  const addContent = type => {
    setContent([...content, { type, value: '', placeholder: true }]);
  };

  const handleImageChange = (value , type) => {
    // const files = e.target.files[0];
    setContent([...content, { type, value} , ]);
    // const files = e.target.files;
    // setContent([...content, { type: 'image', value:Array.from(files)}  ]);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset file input value
    }
  };
  console.log(content)


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
  

  const handleSubmit = async e => {

    
    e.preventDefault();

    // const formattedContent = content.map(item => ({
    //   type: item.type,
    //   value: item.type === 'image' ? item.value : String(item.value), // Ensure values are strings,
    // }));
  //   // Reverse the array
  // formattedContent.reverse();

    const formData = new FormData();

    formData.append('content', JSON.stringify(content));
    // formData.append('content', formattedContent);


    content.forEach(item => {
      if (item.type === 'image' || item.type === 'filePdf') {
       
          formData.append('files', item.value);

       
      }

    });

    try {
      await axios.post('https://bored-flannel-nightgown-tick.cyclic.app/write', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Handle success
      // window.location.href = 'http://localhost:3000/'


    } catch (error) {
      // Handle error
      console.log(error.message , 'error one')
    }
  };

  return (
<>
{
  isAdmin? (

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
        <input
          type="file"
          id="fileInput"
          onChange={(e)=>handleImageChange(e.target.files[0],'image')}
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }} 
          className='add_button'
        />
      </label>

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
</div>

      
<div className='options1'>
<label htmlFor='category'  className='option' >
  Choose:
</label>
<select id='category' onChange={(e)=> handleCategory(e.target.value)} className='options'>
  <option value='' className='option'>categories</option>
  <option value='Technology' className='option'>Technology</option>
  <option value='Economie_Finance' className='option'>Economie & Finance</option>
  <option value='Marketing_Sales' className='option'>Marketing & Sales</option>
  <option value='Self_Development' className='option'>Self Development</option>
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




      <form onSubmit={handleSubmit}>


{/* this code for other elements */}
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
                  type="text"
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
      {/* <img src={URL.createObjectURL(item.value)} className='image_write' /> */}
      <span className='file_name'>{item.value.name}</span>
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
      <img src={URL.createObjectURL(item.value)} className='image_write' />
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
    </div>
  ):(<></>)
}
</>


  );
}

export default WritePost;
    




