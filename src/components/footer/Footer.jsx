import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Check out our social media pages</h2>
        <ul>
            <a href="/"><img src="./src/assets/instagram.svg" alt="Instagram" /></a>
            <a href="/"><img src="./src/assets/youtube.svg" alt="Youtube" /></a>
            <a href="/"><img src="./src/assets/twitter.svg" alt="Twitter" /></a>
            <a href="/"><img src="./src/assets/tiktok-1.svg" alt="TikTok" /></a>
        </ul>
    </div>
  )
}

export default Footer