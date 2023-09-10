import github from '../../assets/github.svg'
import orangeWeight from '../../assets/orangeWeight.svg'
import link from '../../assets/link.svg'
import bottomArrow from '../../assets/bottomArrow.svg'

export default function WorkoutTracker() {
    return (
       <div class="workoutApp">
       
            
            <div class="workoutContent">
               
                    <div className='workoutTop'>
                      <h1>Workout Tracking Application</h1>
                      
                    </div>
                    <div className='workoutMid'>
                    <img src={orangeWeight} alt="" />
                   
                    </div>
                    
                    <div className='workoutBot'>
                      <ul className='stack'>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL</li>
                      </ul>
                      <div className='launchers'>
                    <a href="https://github.com/diegocd1999/tracking-app" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a> 
                    <a href="https://github.com/diegocd1999/tracking-app" target="_blank" rel="noopener noreferrer"><img src={link} alt="" /></a> 
                    </div>
                    </div>    
                           
            </div>
      
     </div>       
     )
  
}
