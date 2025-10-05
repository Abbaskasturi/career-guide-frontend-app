import './index.css'
const Roles = (props) => {
    const {roleDetaile} = props 
    return(
       <li className='role-items'>
        {roleDetaile}
       </li>
    )
}

export default Roles