import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import react from '../../assets/react.svg';
import portfolio from '../../assets/portfolio.svg'
import github from '../../assets/github.svg'
import exicon from '../../assets/exicon.svg'
import orangeWeight from '../../assets/orangeWeight.svg'
import link from '../../assets/link.svg'

export default function PortfolioWebsite() {
    return (
        <div class="workoutApp">
       
            
        <div class="workoutContent">
           
                <div className='workoutTop'>
                    <h1>Portfolio Website</h1>

                </div>
                <div className='workoutMid'>
                <img src={portfolio} alt="" />
                </div>
                
                <div className='workoutBot'>
                  <ul className='stack'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                 
                  </ul>
                  <div className='launchers'>
                <a href="https://github.com/diegocd1999/React-Portfolio" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a> 
                <a href="https://github.com/diegocd1999/React-Portfolio" target="_blank" rel="noopener noreferrer"><img src={link} alt="" /></a> 
                </div>
                </div>    
                       
        </div>
  
 </div>    
    )        
     
  
}
