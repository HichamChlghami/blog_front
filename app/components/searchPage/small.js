import React from 'react'

function Small({item}) {

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
    
    <div className='catsmall'>
    <div className='catsmall_card'>
      
      {
  imageContent &&(
    <div className='catsmall_card_img'>
<img src={`/${imageContent.value}`} alt='' className='catsmall_card_image'/>
</div>
  )
}


      
{titleContent&& (<h1 className='catsmall_card_title'
 dangerouslySetInnerHTML={{__html:titleContent.value}} />)
}
{item && (<div className='catsmall_card_author'>{formatDate(item.createdAt)}</div>)}

    </div>
    </div>
  )
}

export default Small