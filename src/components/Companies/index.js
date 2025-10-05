import './index.css'; 
const Companies = (props) => {
    const {eachCom} =props;
    return(
        <li className='company-item'>
            {eachCom}
        </li>
    )
}
export default Companies; 