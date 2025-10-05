import { CiPhone } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import './index.css';
const Contact = () => {
    return(
        <div className='contact-main-container'>
           <h1 className='have-heading'>Have Any Queries for Career Advice?</h1>
           <p className='contact-para'>I'm here to help you succeed! Get personalized career guidance and mentorship.</p>
           <div className='contact-form-container'>
               <div className='phone-container'>
                   <CiPhone className="phone-icon"/>
                   <p className="contact-h">Contact Me</p>
                </div>
                <div className='email-container'>
                    <MdOutlineMailOutline className="email-icon"/>
                    <p className="email-para">kasturiabbaspatel@gmail.com</p>
                </div> 
                <div className='linkedin-container'>
                    <FaLinkedinIn className="linkedin-icon"/>
                    <a href='https://www.linkedin.com/in/kasturiabbas/' target='_blank' rel="noopener noreferrer" className="link">
                       www.linkedin.com/in/kasturiabbas 
                    </a>
                </div>
                <p className="end-para">"Your success is my mission. Let's build your dream career together!" 🚀</p>
           </div>
        </div>
    )
}

export default Contact 