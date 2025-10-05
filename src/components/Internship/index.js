import { CiHeart } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { LuTarget } from "react-icons/lu";
import './index.css';
const Internship =  () => {
    return(
        <div className='internship-main-container'>
            <h1 className='internship-heading'>Internship Preparation Guidance</h1>
            <p className='internship-para'>Internships are your golden bridges to real-world success. Step forward with confidence! ✨</p>
            <div className='internship-box-container'>
                <div className='build-container'>
                    <IoMdBook className='book-icon'/>
                    <h1 className='build-heading'>Build Foundation</h1>
                    <p className='master-para'>Master basic skills and complete 2-3 projects before applying</p>
                </div>
                <div className='build-container-1'>
                    <LuTarget className='book-icon-1'/>
                    <h1 className='build-heading-1'>Apply Strategically</h1>
                    <p className='master-para-1'>Target companies that align with your chosen domain</p>
                </div>
                <div className='build-container-2'>
                    <CiHeart className='book-icon-2'/>
                    <h1 className='build-heading-2'>Stay Consistent</h1>
                    <p className='master-para-2'>Practice coding daily and build your portfolio</p>
                </div>
            </div>
        </div>
    )
}

export default Internship