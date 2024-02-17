import Link from 'next/link';
import React from 'react'

function Catbig2({item}) {
  const formatDate = (createdAt) => {
    if (createdAt) {
      const date = new Date(createdAt);
      const year = date.getFullYear();
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');

      return `${year}/${day}/${month}`;
    }
    return '';
  };

  // Find the first occurrence of each content type
  const imageContent = item?.content.find(data => data.type === 'image');
  const titleContent = item?.content.find(data => data.type === 'title1');
  const textContent = item?.content.find(data => data.type === 'text');
const authorContent = item?.content.find(data => data.type === 'name')
  return (
    <Link href={`/blog/${item?._id}`}  className='catbig1 catbig1Disappear link'>
        
    <div className='catbig1_card'>


{
  imageContent &&(
    <div className='catbig1_card_img'>
<img src={`/${imageContent.value}`} alt='' className='catbig1_card_image'/>
</div>
  )
}


{
  titleContent&& (
    <h1 className='catbig1_card_title' dangerouslySetInnerHTML={{__html:titleContent.value}} />
  )
}



{
  textContent && (
    <p className='catbig1_card_description' dangerouslySetInnerHTML={{
      __html: textContent.value && textContent.value.split(' ').slice(0, 30).join(' ') + '...' 
    }} />
  )
}


<div className='catbig1_authorDate'>

{authorContent&&(<div className='catbig1_author'>{authorContent.value}</div>)}

{item && (<div className='catbig1_date'>{formatDate(item.createdAt)}</div>)}
</div>
    </div>
</Link>
  )
}

export default Catbig2