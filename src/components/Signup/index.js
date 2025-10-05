import Cookies from 'js-cookie';
import { Component } from 'react';
import { GoGoal } from "react-icons/go";
import { Navigate, useNavigate } from 'react-router-dom';
import './index.css';

const appUrl = process.env.REACT_APP_API_URL; 

class SignupClass extends Component {
  state = {
    userName: '',
    userEmail: '',
    userPassword: '',
    displaymsgSuc: '',
    displaymsgFail: '',
    condition: true, 
    loginEmail: '',
    loginpassWord: '',
    loginMsg: ''
  };

  handleUserSignup = async (event) => {
    event.preventDefault();
    const { userName, userEmail, userPassword } = this.state;

    const userObj = { name: userName, email: userEmail, password: userPassword };
    const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(userObj) };
    const endpoint = `${appUrl}/api/auth/signup`;

    const data = await fetch(endpoint, options);
    const response = await data.json();

    if (data.ok) {
      this.setState({ displaymsgSuc: response.message || "User Registration Successfully" });
    } else {
      this.setState({ displaymsgFail: response.message || "User already existing" });
    }
  }

  handlingTheName = (event) => this.setState({ userName: event.target.value });
  handlingTheEmail = (event) => this.setState({ userEmail: event.target.value });
  handlingThePassword = (event) => this.setState({ userPassword: event.target.value });
  handlingTheEmailLogin = (event) => this.setState({ loginEmail: event.target.value });
  handlingThePasswordLogin = (event) => this.setState({ loginpassWord: event.target.value });

 
  handleChange = () => this.setState((prev) => ({ condition: !prev.condition }));


  handleUserLogin = async (event) => {
    event.preventDefault();
    const { loginEmail, loginpassWord } = this.state;
    const loginObj = { email: loginEmail, password: loginpassWord };
    const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(loginObj) };
    const endpoint = `${appUrl}/api/auth/login`;

    const data = await fetch(endpoint, options);
    const response = await data.json();

    if (data.ok) {
      
      Cookies.set('jwt_token', response.token, { expires: 2 });

      this.props.navigate('/signup', { replace: true });
    } else {
      this.setState({ loginMsg: response.message });
    }
  }

  
  signupRender = () => {
    const { displaymsgSuc, displaymsgFail, userEmail, userName, userPassword } = this.state;

    return (
      <div className='signup-bg-container'>
        <div className='sign-up-card'>
          <GoGoal className="goal-icon"/>
          <h1 className='sing-up-heading'>Smart Career Guidance App</h1>
          <p className='sign-up-paragraph'>Your journey to success starts here. Let's build your future together! ✨</p>
          <h1 className='account-heading'>Create Your Account</h1>
          <form onSubmit={this.handleUserSignup} className='form-container'>
            <input type='text' placeholder='Enter your full name' value={userName} className='input-tag' required onChange={this.handlingTheName}/>
            <input type='text' placeholder='Enter your email' value={userEmail} className='input-tag' required onChange={this.handlingTheEmail}/>
            <input type='password' placeholder='Enter password' value={userPassword} className='input-tag' required onChange={this.handlingThePassword}/>
            
            {displaymsgSuc && <p className='suc-display-msg'>{displaymsgSuc}</p>}
            {displaymsgFail && <p className='fail-display-msg'>{displaymsgFail}</p>}

            <button type='submit' className='start-btn'>Start Your Journey</button>
            <p className='message-para'>Already have an account? <span className='msg-span' onClick={this.handleChange}>Login here</span></p>
          </form>
        </div>
      </div>
    );
  }

  
  loginRender = () => {
    const { loginEmail, loginpassWord, loginMsg } = this.state;

    return (
      <div className='signup-bg-container'>
        <div className='sign-up-card'>
          <GoGoal className="goal-icon"/>
          <h1 className='sing-up-heading'>Smart Career Guidance App</h1>
          <p className='sign-up-paragraph'>Your journey to success starts here. Let's build your future together! ✨</p>
          <h1 className='account-heading'>Login to Your Account</h1>
          <form onSubmit={this.handleUserLogin} className='form-container'>
            <input type='text' placeholder='Enter your email' value={loginEmail} className='input-tag' required onChange={this.handlingTheEmailLogin}/>
            <input type='password' placeholder='Enter password' value={loginpassWord} className='input-tag' required onChange={this.handlingThePasswordLogin}/>

            {loginMsg && <p className='fail-display-msg'>{loginMsg}</p>}

            <button type='submit' className='start-btn'>Start Your Journey</button>
            <p className='message-para'>Create New Account? <span className='msg-span' onClick={this.handleChange}>Signup</span></p>
          </form>
        </div>
      </div>
    );
  }

  render() {
    const { condition } = this.state;
    const token = Cookies.get('jwt_token')
    if(token !== undefined){
        return <Navigate to ='/' replace/>
    }
    return condition ? this.loginRender() : this.signupRender();
  }
}

const Signup = props => {
  const navigate = useNavigate();
  return <SignupClass {...props} navigate={navigate} />;
};

export default Signup;
