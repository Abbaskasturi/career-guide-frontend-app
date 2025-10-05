import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { TbTargetArrow } from "react-icons/tb";
import './index.css';

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('jwt_token'); 
    navigate('/signup', { replace: true })
  }

  return (
    <div className='logout-container'>
      <div className='logout-icon-container'>
        <TbTargetArrow  className='log-target-icon'/>
         <h1 className='logout-heading'>Smart Career Guide</h1>
      </div>
      <button className='logout-btn' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
