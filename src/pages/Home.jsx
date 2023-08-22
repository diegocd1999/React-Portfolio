import Typewriter from "../components/Typewriter"
import AnimatedPage from "../components/AnimatedPage"

export default function Home() {
    return (
    <AnimatedPage>
    <div className="home">
        <h1 class='text'>Diego 
            <Typewriter  text=" Ceniceros" delay={250} infinite></Typewriter>
        </h1>
        <h2 class="text2"> Web-developer, Analyst  <br /></h2>
            <a class='text3' href="#">Download CV</a>
    </div>   
    </AnimatedPage>
    )
  }