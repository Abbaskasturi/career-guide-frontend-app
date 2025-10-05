import './index.css';
const Sources = (props) => {
    const {source} = props; 
    const {name, type, link} = source 
    return(
        <li className='each-source-container'>
            <div className='source-main-container-items'>
                <div className='source-name-container'>
                    <h1 className='source-name'>{name}</h1>
                    <button className='source-type-btn'>{type}</button>
                </div>
                <div>
                <a href ={link} target="_blank" rel="noopener noreferrer">
                    <button className='link-btn'>
                        Learn Now
                    </button>
                </a>
                </div>
            </div>
        </li>
    )
}
export default Sources 