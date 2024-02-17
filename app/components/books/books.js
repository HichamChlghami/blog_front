import React from 'react'
import './books.css'
import Link from 'next/link'
function Books() {
  return (
    <div className='books'>
<div className='books_images'>
    <img src='/book1.svg' alt='book_SEO' className='book_image' />
    <img src='/book2.svg' alt='book_SEO'  className='book_image' />

</div>

       <div className='books_container-content'>
       <div className='books_content'>
            <h2 className='books_title'>Level Up Your SEO Skills With Our Free Ebooks</h2>
            <p className='books_text'> Explaining, case studies, checklists to learnand manage your audit</p>
        </div>
        <div className='books_buttons'>
        <Link href='/i1040tt.pdf' className='books_button' >Grab a free copy</Link>
        <Link href='/i1040tt.pdf' className='books_button'>Grab a free copy</Link>


        </div>
       </div>
    </div>
  )
}

export default Books