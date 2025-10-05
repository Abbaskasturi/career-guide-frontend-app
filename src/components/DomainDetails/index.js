import { CiHeart } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp, FaLaptopCode, FaUserGroup } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";
import { IoMdBulb, IoMdTime } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import Career from '../Career';
import Companies from "../Companies";
import Projects from '../Projects';
import Roles from '../Roles';
import SalaryRange from '../SalaryRange';
import Skills from '../Skills';
import Sources from "../Sources";
import './index.css';

const DomainDetails = (props) => {
    const {data}  = props
   const {
    domain, stable, whatItIs, whyChoose,bestTimeForInternship, 
    careerOpportunities, globalSalaryExp, globalSalaryFre,indiaSalaryExp,  indiaSalaryFre,
     keyRolesResponsibilities, motivationalNote, 
    proTip , projectsYouCanBuild , skillsRequired, topCompanies , whereToLearn} = data 
    console.log(keyRolesResponsibilities)
    return(
        <li className='domain-data-container'>
            <div className="all-data-of-domain-container">
            <div className='domain-heading-inside-container'>
                <h1 className='domain-name'>{domain}</h1>
                <button className='stable-btn'>{stable}</button>
            </div>
            <div className='botton-data-container'>
                <div className='what-container-outer'>
                    <div className='what-container'>
                        <GoLightBulb className='bulb-icon'/>
                        <h1 className='what-heading'>What it is</h1>
                    </div>
                    <p className='what-paragraph'>
                        {whatItIs}
                    </p>
                </div>
                <hr className='horizontal-line'/>
                <div className='what-container-outer'>
                    <div className='what-container'>
                        <CiHeart className='love-icon'/>
                        <h1 className='what-heading'>Why Choose This Domain</h1>
                    </div>
                    <p className='what-paragraph'>
                        {whyChoose}
                    </p>
                </div>
                <hr className='horizontal-line'/>
               <div className='what-container-outer'>
                   <div className='what-container'>
                        <FaUserGroup className='group-icon'/>
                        <h1 className='what-heading'>Key Roles & Responsibilities</h1>
                    </div> 
                    <ul className='key-roles-container'>
                        {
                            keyRolesResponsibilities.map((role) => (
                                <Roles key={uuidv4()} roleDetaile = {role}/>
                            )) 
                        }
                    </ul>
               </div>
               <hr className='horizontal-line'/>
               <div className='what-container-outer'>
                    <div className='what-container'>
                       <FaLaptopCode className='skill-icon'/>
                       <h1 className='what-heading'>Skills Required</h1>
                    </div>
                    {
                        <ul className='skills-container'>
                            {
                                skillsRequired.map((skill) => (
                                    <Skills key={uuidv4()} skillsDetails ={skill}/>
                                ))
                            }
                        </ul>
                    }
               </div>
               <hr className='horizontal-line'/>
               <div className='salary-range-main-container'>
                    <SalaryRange indiaExp={indiaSalaryExp} indiaFre={indiaSalaryFre} globalFre={globalSalaryFre} globalExp={globalSalaryExp}/>
               </div>
               <hr className='horizontal-line'/>
               <div className='what-container-outer'>
                     <div className='what-container'>
                       <FiBriefcase className='briefcase-icon'/>
                       <h1 className='what-heading'>Career Opportunities</h1>
                    </div>
                    <ul className='career-container'>
                        {
                            careerOpportunities.map((career) => (
                                <Career key={uuidv4()} careerDetails={career}/>
                            ))
                        }
                    </ul>
               </div>
                <hr className='horizontal-line'/>
               <div className="what-container-outer">
                    <div className='what-container'>
                       <FaArrowTrendUp className='arrow-icon'/>
                       <h1 className='what-heading'>Apps or Projects You Can Build</h1>
                    </div>
                    <ul className="project-container">
                        {
                            projectsYouCanBuild.map((project) => (
                                <Projects key={uuidv4()} app={project}/>
                            ))
                        }
                    </ul>
                </div>
                <hr className='horizontal-line'/>
                <div className="what-container-outer">
                    <div className='what-container'>
                        <IoMdTime className='time-icon'/>
                        <h1 className='what-heading'>Best Time for Internship</h1>
                    </div>
                    <div className="time-container">
                        <p className="time-para">{bestTimeForInternship}</p>
                    </div>
                </div>
                <hr className='horizontal-line'/>
                <div className="what-container-outer">
                    <div className='what-container-time'>
                        <CiHeart className='love-icon'/>
                        <h1 className='what-heading'>Motivational Note</h1>
                    </div>
                    <div className="note-container">
                        <p className="note-para">{motivationalNote}</p>
                    </div>
                </div>
                <hr className='horizontal-line'/>
                <div className="what-container-outer">
                   <div className='what-container'>
                        <FaGraduationCap  className='cap-icon'/>
                        <h1 className='what-heading'>Where to Learn</h1>
                    </div> 
                    <div className="source-main-container">
                        <h1 className="resoures-heading">Top 3 best resources for mastering this domain:</h1>
                        <ul className="unorder-source-container">
                            {
                                whereToLearn.map((each) => (
                                    <Sources key={uuidv4()} source={each}/>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <hr className='horizontal-line'/>
                <div className="what-container-outer">
                    <div className='what-container'>
                        <LuBuilding2  className='company-icon'/>
                        <h1 className='what-heading'>Top Companies</h1>
                    </div> 
                    <h1 className="resoures-heading">DSA is required for cracking the highest packages in these top companies:</h1>
                    <ul className="top-companies-main-container">
                        {
                            topCompanies.map((com) => (
                                <Companies key={uuidv4()} eachCom={com}/>
                            ))
                        }
                    </ul>
                </div>
                <div className="pro-tip-container">
                    <IoMdBulb className="pro-icon"/>
                    <p className="pro-para">
                        <span className="pro-span">Pro Tip: </span>
                        {proTip}
                    </p>
                </div>
            </div>
          </div>
        </li>
    )
}
export default DomainDetails