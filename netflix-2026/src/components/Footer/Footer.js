import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div>
<div className="social_icons">
    <ul>
        <li className="fb"><FacebookIcon/></li>
        <li className="ig"><InstagramIcon/></li>
        <li className="you"><YouTubeIcon/></li>
    </ul>
</div>
 <div className="main_footer">
  <div className="first_footer">
     <ul> 
          <li>Audio Descriptions</li>
          <li>Investor Relations</li>
          <li>Legal Notice</li>
          <li>Service Code</li>
          <li id="copy_right"><CopyrightIcon/> 1997-2024 Netflix license</li>
     </ul>
        </div>
        <div className="second_footer">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preferences</li>
         </ul>
        </div>
        <div className="third_footer">
          <ul>
             <li>Gift Cards</li>
             <li>Terms of Use</li>
             <li>Corporate Informations</li>
         </ul>
        </div>
    <div className="forth">
      <ul>
         <li>Media Center</li>
         <li>Privacy</li>
         <li>Contact Us</li>
      </ul>
    </div>
</div>

    </div>
  )
}
export default Footer
