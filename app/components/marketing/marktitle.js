import Link from 'next/link';
import React from 'react'

function Marktitle({item}) {
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
  const titleContent = item?.content.find(data => data.type === 'title1');
  
  return (
    <Link href={`/blog/${item?._id}`} className='techtitle link'>
      <div className='titlepost'>
        
{
  titleContent&& (
    <h1 className='titlepost_title' dangerouslySetInnerHTML={{__html:titleContent.value}} />
  )
}
{item && (<div className='titlepost_date'>{formatDate(item.createdAt)}</div>)}

        <div className='titlepost_line'></div>
      </div>
    </Link>
  )
}

export default Marktitle