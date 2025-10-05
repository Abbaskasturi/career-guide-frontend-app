import { IoMdCode } from "react-icons/io";
import './index.css';
const data = [
  {
    "name": "LeetCode",
    "link": "https://leetcode.com",
    "quotation": "The more you practice, the luckier you get."
  },
  {
    "name": "HackerRank",
    "link": "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
    "quotation": "Code is like humor. When you have to explain it, it’s bad."
  },
  {
    "name": "GeeksforGeeks",
    "link": "https://www.geeksforgeeks.org/data-structures/arrays/",
    "quotation": "Dream in algorithms, build in logic."
  },
  {
    "name": "CodeSignal",
    "link": "https://codesignal.com/",
    "quotation": "Every great coder was once a beginner who didn’t quit."
  }
]

const Practices = () => { 
    return(
        <div className='practice-plateform-container'>
            <h1 className='coding-heading'>Sharpen Your Coding Skills Here</h1>
            <p className='coding-para'>Consistent practice builds confidence. Begin your journey today! 💪</p>
            <div className='each-plateform-container-outer'>
            {
                data.map((each) => (
                       <div className='each-plateform-container' key={each.name}>
                           <button className='coding-btn'>
                              <IoMdCode className='coding-icon'/>
                           </button>
                           <h1 className="plateform-heading">{each.name}</h1>
                           <p className="quotation">{each.quotation}</p>
                           <a href={each.link} target="_blank" rel="noopener noreferrer" className="start-link">
                            <button className="start-btn-practice">Start Practing</button>
                           </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Practices 