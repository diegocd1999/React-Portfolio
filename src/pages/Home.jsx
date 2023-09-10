import Typewriter from "../components/Typewriter"
import AnimatedPage from "../components/AnimatedPage"
import linkedin from '../assets/linred.svg'
import github from '../assets/gitred.svg'
import indeed from '../assets/indeed.svg'
import arrow from '../assets/arrow.svg'
import resume from '../assets/Resume.pdf'

import red from '../assets/red.png'
import blue from '../assets/blue.png'
import cutie from '../assets/me.png'

export default function Home() {
    return (
    <AnimatedPage>
    <div className="home">
        <div className="home-left">
            <h1 class='text'>Diego 
                <Typewriter  text=" Ceniceros" delay={250} infinite></Typewriter>
            </h1>
            <h2 class="text2"> Web-developer, Analyst  <br /></h2>
                <a class='text3' href={resume} target="_blank" rel="noopener noreferrer">Download CV</a>
                
                <div className="icons">
                <a href="https://www.linkedin.com/in/diego-ceniceros-a833961a6/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a> 
                <a href="https://github.com/diegocd1999" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a> 
                <a href="https://www.linkedin.com/in/diego-ceniceros-a833961a6/" target="_blank" rel="noopener noreferrer"><img src={indeed} alt="" /></a> 
            </div>
        </div>
        <div className="home-right">
          <img src={cutie} alt="" />
        </div>
            
        
    </div>
    
    </AnimatedPage>
    )
  }