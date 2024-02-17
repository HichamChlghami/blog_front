import Link from 'next/link';
import React from 'react'

function Ecosmall({item}) {
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
  const imageContent = item?.content.find(data => data.type === 'image');
  const titleContent = item?.content.find(data => data.type === 'title1');

  return (
    <Link href={`/blog/${item?._id}`} className='techsmall link'>
    <div className='techsmall_card'>
      
      {
  imageContent &&(
    <div className='techsmall_card_img'>
<img src={`/${imageContent.value}`} alt='' className='techsmall_card_image'/>
</div>
  )
}

{titleContent&& (<h1 className='techsmall_card_title' dangerouslySetInnerHTML={{__html:titleContent.value}} />)
}

{item && (<div className='techsmall_card_author'>{formatDate(item.createdAt)}</div>)}

    </div>
    </Link>
  )
}


export default Ecosmall