import './footer.css'
import {FaBitbucket, FaInstagram, FaLinkedin} from 'react-icons/fa6'
function Footer() {
    return (
        <div className="footer">
            <div className='contact'>
                <p>&#9993; adityaraam7@gmail.com</p>
                <p>&#9990; +91 7993856009</p>
            </div>
            <div className='social-media'>
                <a href='#'><FaLinkedin /> Linked In</a>
                <a href='#'><FaBitbucket /> Bitbucket</a>
                <a href='#'><FaInstagram /> Instagram</a>
            </div>
        </div>
    )
}

export default Footer