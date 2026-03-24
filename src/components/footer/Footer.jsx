import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Check out our social media pages</h2>
        <ul>
            <a href="/" aria-label="Visit our Instagram page" target="_blank" rel="noreferrer"><img src="./src/assets/instagram.svg" alt="Instagram" /></a>
            <a href="/" aria-label="Visit our YouTube page" target="_blank" rel="noreferrer"><img src="./src/assets/youtube.svg" alt="Youtube" /></a>
            <a href="/" aria-label="Visit our Twitter page" target="_blank" rel="noreferrer"><img src="./src/assets/twitter.svg" alt="Twitter" /></a>
            <a href="/" aria-label="Visit our TikTok page" target="_blank" rel="noreferrer"><img src="./src/assets/tiktok-1.svg" alt="TikTok" /></a>
        </ul>
    </div>
  )
}

export default Footer