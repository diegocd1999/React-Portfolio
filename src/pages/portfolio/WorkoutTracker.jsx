import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import mysql from '../../assets/mysql.svg'
import github from '../../assets/github.svg'
import exicon from '../../assets/exicon.svg'
import orangeWeight from '../../assets/orangeWeight.svg'

export default function WorkoutTracker() {
    return (
       <div class="workoutApp">
       
            
            <div class="workoutContent">
                <div class="column left">
                    <h7>Technologies used</h7>
                    <p>HTML, CSS, React, NodeJS, EXPRESS, MySQL </p>
                    <div className='workoutTech'>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        
                        <img src={react} alt="" />
                        <img src={node} alt="" />
                        <img src={mysql} alt="" />
                        <img className='exicon' src={exicon} alt="" />
                   
                    </div>
                </div>
                <div class="column right">
                    <h7>About Project</h7>
                        <p>Crud application that tracks my personal workouts. Developed using rest api, utilizing REACT, NODE, EXPRESS, MYSQL</p>
                        <div className='buttonContainer'>
                            <button><h1>GitHub Code</h1><a href="https://github.com/diegocd1999/tracking-app"><img className='github' src={github} alt="" /></a></button>
                            <button><h1>Live Demo</h1><a href="https://github.com/diegocd1999/tracking-app"><img className='github' src={orangeWeight } alt="" /></a></button>
                        </div>
                </div>
            </div>
      
     </div>       
     )
  
}
