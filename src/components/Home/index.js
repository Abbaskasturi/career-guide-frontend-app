import Cookies from 'js-cookie';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { SpinnerCircular } from "spinners-react";
import Contact from '../Contact';
import DomainDetails from '../DomainDetails';
import Internship from '../Internship';
import Logout from '../Logout';
import Practices from '../Practices';
import './index.css';
const appUrl = process.env.REACT_APP_API_URL
const apiConstants = {
    initial: "INITIAL", 
    progress: "PROGRESS", 
    fail: "FAIL", 
    success: "SUCCESS"
}
class Home extends Component{
    state = {endpoint: '', exporeBtn: false, domainData: {} , apiStatus: apiConstants.initial}
    handleEndpoint = (event) => {
        this.setState({
            endpoint: event.target.value
        }, () => this.getDomainData() )
    }
    getDomainData = async () => {
        const token = Cookies.get('jwt_token')
        this.setState({
            apiStatus: apiConstants.progress
        })
        const {endpoint} = this.state 
        const domainEndpoint = `${appUrl}/api/${endpoint}`
        const options ={
            method: "GET", 
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const data = await fetch(domainEndpoint, options) 
        try{
        if(data.ok){
            const response = await data.json()
            const camelCaseData = response.dbData.map((each) => ({
                id: each._id, 
                domain: each.domain, 
                stable: each.stable, 
                whatItIs: each.what_it_is, 
                whyChoose: each.why_choose, 
                keyRolesResponsibilities: each.key_roles_responsibilities, 
                skillsRequired: each.skills_required, 
                indiaSalaryExp: each.salary_range.india.experienced,
                indiaSalaryFre: each.salary_range.india.fresher, 
                globalSalaryExp: each.salary_range.global.experienced, 
                globalSalaryFre: each.salary_range.global.fresher, 
                careerOpportunities: each.career_opportunities, 
                projectsYouCanBuild: each.projects_you_can_build, 
                bestTimeForInternship: each.best_time_for_internship,
                motivationalNote: each.motivational_note, 
                whereToLearn: each.where_to_learn, 
                topCompanies: each.top_companies, 
                proTip: each.pro_tip, 
                practicePlateforms: each.coding_practice_platforms, 
                internshipGuide: each.internship_guidance
            }))
            this.setState({
                apiStatus: apiConstants.success,
                domainData: camelCaseData
            })
        }else{
            this.setState({
                apiStatus: apiConstants.fail
            })
        }
       }catch(e){
        this.setState({
            apiStatus: apiConstants.fail
        })
       }
    }
    renderProgress =() => (
        <div className='spinner-container'>
          <SpinnerCircular
          size={80}
          thickness={100}
          speed={100}
          color="#36d7b7"
          secondaryColor="rgba(0, 0, 0, 0.1)"
        />
        </div>
    )
    renderFail = () => (
        <div className='fail-container'>
            <h1 className='api-error'>The API request failed. Please try again later.</h1>
        </div>
    )
    renderSuccess = () => {
        const {domainData} = this.state 
        return(
            <div>
               {
                    domainData.length > 0 ? (
                    <div className='specific-domain-details'>
                        <ul className='unordered-container-items'>
                            {
                                domainData.map((eachdetails) => (
                                    <DomainDetails key={eachdetails.id} data={eachdetails}/>
                                ))
                            }
                        </ul>
                    </div>
                    ) : ('')
                } 
            </div>
        )
    }
    renderAllTheCase = () => {
        const {apiStatus} = this.state 
        switch(apiStatus){
            case apiConstants.progress:
                return this.renderProgress()
            case apiConstants.fail:
                return this.renderFail()
            case apiConstants.success:
                return this.renderSuccess()
            default:
                return null; 
        }

    }
    render(){
        const {endpoint} = this.state 
        const token = Cookies.get('jwt_token')
        if(token === undefined){
            return <Navigate to='/signup'/>
        }
        return(
            <div className='home-container'>
                <Logout />
                <h1 className='welcome-heading'>Welcome back,<span className='span-future-heading'>Future Innovator!</span></h1>
                <p className='choose-heading'>Choose your domain to build your future today. Every expert was once a beginner. Your time is now! 🚀</p>
                <div className='domain-container'>
                    <h1 className='domain-heading'>Choose Your Domain to Build Your Future</h1>
                    <p className='tech-para'>Explore the most in-demand tech domains and discover your perfect career path</p>
                    <select className='selection-dropdown' onChange={this.handleEndpoint}>
                        <option value="">
                            Select a domain that excites you...
                        </option>
                        <option value='ai'>
                            Artifical Intelligence & Machine Learning
                        </option>
                        <option value='cyber'>
                            Cybersecurity
                        </option>
                        <option value='cloud'>
                            Cloud Computing & DevOps
                        </option>
                        <option value='MobileApplication'>
                            Mobile Application Development
                        </option>
                        <option value='ds'>
                            Data Science & Big Data Analytics
                        </option>
                        <option value='blockchain'>
                            Blockchain & Decentralized Apps
                        </option>
                        <option value='fullstack'>
                            Full Stack Web Development
                        </option>
                        <option value='IOT'>
                            IOT
                        </option>
                        <option value='automation'>
                            Automation & Robotics 
                        </option>
                    </select>
                    {
                        endpoint.length >0 ? (<button className='explore-btn'>Expore This Domain</button>) : ('')
                    }
                </div>
                {
                    this.renderAllTheCase()
                }
                <Practices/>
                <Internship />
                <Contact />
            </div>
        )
    }
}

export default Home; 