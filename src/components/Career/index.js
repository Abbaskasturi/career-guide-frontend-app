import './index.css'; 

const Career = (props) => {
    const {careerDetails} = props; 
    return(
        <li className='career-items'>
            {careerDetails}
        </li>
    )
}

export default Career; 