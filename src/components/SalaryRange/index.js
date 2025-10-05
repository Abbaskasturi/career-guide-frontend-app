import { FaDollarSign } from "react-icons/fa";
import './index.css';
const SalaryRange = (props) => {
    const {indiaExp, indiaFre, globalExp, globalFre} = props; 
    console.log(indiaExp)
    return(
        <div className='salary-container-outer'>
            <div className='salary-container'>
                <FaDollarSign className='dollar-icon'/>
                <h1 className='salary-heading'>Salary Range</h1>
            </div>
        <div className='large-size-container'>
            <div className='india-salary-container'>
                <p className='india-para'>IN India</p>
                <p className='india-exp-para'>Fresher: <span className='salary'>{indiaFre}</span></p>
                <p className='india-exp-para'> Experienced: <span className='salary'>{indiaExp}</span></p>
            </div>
             <div className='global-salary-container'>
                <p className='global-para'>Global</p>
                <p className='global-exp-para'>Fresher: <span className='salary-global'>{globalFre}</span></p>
                <p className='global-exp-para'> Experienced: <span className='salary-global'>{globalExp}</span></p>
            </div>
        </div>
        </div>
    )
}

export default SalaryRange; 