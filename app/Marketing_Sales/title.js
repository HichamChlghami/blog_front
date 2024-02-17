import Link from 'next/link';
import React from 'react'

function Cattitle({item}) {
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
    <Link href={`/blog/${item?._id}`} className='cattitle link'>
      <div className='cattitle_card'>
    

{
  titleContent&& (
    <h1 className='cattitle_card_title' dangerouslySetInnerHTML={{__html:titleContent.value}} />
  )
}
{item && (<div className='cattitle_card_date'>{formatDate(item.createdAt)}</div>)}



        <div className='cattitle_card_line'></div>
      </div>
    </Link>
  )
}

export default Cattitle