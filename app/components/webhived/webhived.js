import React from 'react'
import './webhived.css'
import Link from 'next/link'
function  Webhived() {
  return (
    <div className='webhived_container'>
<div className='webhived_content'>
    <p className='webhived_text'>
    "Transform your online presence with Webhived Agency's 
top-notch Web Design, Development SEO, and Ads Management
 services. Elevate your brand, enhance visibility
 and drive growth 
through our tailored digital solutions.
 Join us for a journey of limitless success in the digital realm."

    </p>
    <Link  href='https://webhived.com/' className='webhived_button' >Visit Us</Link>
</div>
<div className='webhuved_container_image'>
    <img  src='/office.svg' alt='webhived' className='webhived_image'/>
</div>
    </div>
  )
}

export default Webhived