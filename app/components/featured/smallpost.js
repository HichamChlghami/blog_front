import Link from 'next/link';
import React from 'react'

function Smallpost({item}) {
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
    <Link href={`/blog/${item?._id}`} className='link smallpost' >

    {/* <div className='smallpost'> */}

      <div className='small_card'>
        {
          imageContent&&(
            <div className='small_card_img'>
            <img src={`/${imageContent.value}`} alt='' className='small_card_image'/>
          </div>
          )
        }


{titleContent&&(<h1 className='small_card_title'>{titleContent.value}</h1>)}

{item && (<div className='small_card_author'>{formatDate(item.createdAt)}</div>)}

      {/* </div> */}
      </div>
      </Link>

  )
}

export default Smallpost