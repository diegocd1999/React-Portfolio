import { NavLink, Outlet } from "react-router-dom"
import { useRef } from "react"
import AnimatedPage from "../components/AnimatedPage"

export default function Portfolio() {


  return (
    <AnimatedPage>
    <div className="projects-layout">

      <h2><span>PROJECTS</span></h2>
      <p>Series of personal projects consisting of full stack web apps, data analytics and system design with UML</p>

      <nav id="vite">
        <NavLink to="WorkoutTracker">Workout Tracker <br></br> Application </NavLink>
        <NavLink to="PortfolioWebsite">Portfolio <br></br> Website </NavLink>
        <NavLink to="Hotel">
         Hotel UML<br></br> System Design
        </NavLink>
        <NavLink to="DataAnalytics">Data analytics:<br></br> Heart Disease CDC</NavLink>
      </nav>

      <Outlet />

    </div>
    </AnimatedPage>
  )
}