import './index.css' 
const Skills = (props) => {
    const {skillsDetails} = props; 
    return(
        <li className='skill-items'>
            {skillsDetails}
        </li>
    )
}

export default Skills; 