
import React from 'react';
import Link from 'next/link';
function Pigpost({ item }) {
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
    <Link  href={`/blog/${item?._id}`} className='bigpost link'>
      <div className='big_card'>
        {imageContent && (
          <div className='big_card_img'>
            <img src={`/${imageContent.value}`} alt='image' className='big_card_image' />
          </div>
        )}

        {titleContent && (
          <h1 className='big_card_title'>{titleContent.value}</h1>
        )}

        {textContent && (
          <p className='big_card_description' dangerouslySetInnerHTML={{
            __html: textContent.value && textContent.value.split(' ').slice(0, 30).join(' ') + '...' 
          }} />
        )}

        <div className='authorDate'>
          {authorContent&&(
          <div className='author'>{authorContent.value}</div>

          )}

          {item && (
            <div className='date'>
              {formatDate(item.createdAt)}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Pigpost;
