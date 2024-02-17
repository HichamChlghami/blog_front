import React from 'react'
import { FaFacebook ,FaTwitter,FaInstagram ,FaYoutube} from 'react-icons/fa';
import Link from 'next/link';
import './footer.css'
function Footer() {
  return (
    <footer  className='footer'>
        <div className='footer_container'>

        <div className='footer_image_container'>
            <Link href='/'>
    <img src='/webhived_logo.svg' className='footer_img' alt='blog_logo'/>
    </Link>
</div>

 <ul className='footer_sections_container'>
        <h2 className='footer_sections-title'>sections</h2>

        <Link className='footer_section'href='/Technology'><li className='footer_section1'>Technology</li></Link>
        <Link className='footer_section' href='/Economie_Finance'><li className='footer_section1' >Economie & Finance</li></Link>
        <Link className='footer_section' href='/Marketing_Sales'><li className='footer_section1'>Marketing & Sales</li></Link>
        <Link className='footer_section' href='/Self_Development'><li className='footer_section1'>Self Development</li></Link>
</ul>
    
 
 

    <ul className='footer_sections_container'>
        <h2 className='footer_sections-title'>Company</h2>
        <Link className='footer_section' href='https://webhived.com/about-us.html'><li className='footer_section1'>About-Us</li></Link>
        <Link className='footer_section' href='https://webhived.com/contact-us.html'><li className='footer_section1'>Contact-Us</li></Link>
        <Link className='footer_section' href='https://webhived.com/offers.html'><li className='footer_section1'>Offers</li></Link>
        <Link className='footer_section' href='https://webhived.com/'><li className='footer_section1'>webhived</li></Link>
    </ul>


    <ul className='footer_sections_container'>
        <h2 className='footer_sections-title'>Services</h2>
        <Link className='footer_section' href='https://webhived.com/Web-development.html'><li className='footer_section1'>Web Development</li></Link>
        <Link className='footer_section' href='https://webhived.com/Web-development.html'><li className='footer_section1'>Web Design</li></Link>
        <Link className='footer_section' href='https://webhived.com/Digital-marketing&SEO.html'><li className='footer_section1'>SEO Services</li></Link>
        <Link className='footer_section' href='https://webhived.com/Digital-marketing&SEO.html'><li className='footer_section1'>Digital Marketing</li></Link>

    </ul>
    

        </div>



            
    <div className="footer-icons">
                <Link href='https://www.facebook.com/profile.php?id=100090340773259&mibextid=9R9pXO'>
                <FaFacebook className='footer_icon'  />
                </Link>
                <Link href='https://www.linkedin.com/in/saad-el-bouazaoui-41933027b'>
                <FaTwitter className='footer_icon'/>
                </Link>
                <Link href='https://instagram.com/web_hived18?igshid=OGQ5ZDc2ODk2ZA=='>
                <FaInstagram  className='footer_icon' />
                </Link>
                <Link href='https://www.youtube.com/@WebHivedAgencyTalks'>
                <FaYoutube  className='footer_icon' />
                </Link>
            </div>


  </footer>
  )
}

export default Footer