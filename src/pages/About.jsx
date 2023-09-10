import html from '../assets/html.svg';
import css from '../assets/css.svg';
import javascript from '../assets/js.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';
import mysql from '../assets/mysql.svg';
import git from '../assets/git.svg';
import python from '../assets/python.svg';
import express from '../assets/express.svg'
import AnimatedPage from '../components/AnimatedPage';


export default function About() {

  return (
    <AnimatedPage>
    <div className="about">
      <h1><span>Hey </span>there<span>!</span></h1> 
      <p className='intro'>My name is Diego Ceniceros. I'm from Laredo in southern Texas and I'm interested in helping develop the web in addition to data analytics.</p>     
      
      <h2>Technical Specs</h2>
      <div className='img-container'>
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={javascript} alt="" />
      <img src={react} alt="" />
      <img src={node} alt="" />
      <img src={mysql} alt="" />
      <img src={git} alt="" />
      <img src={python} alt="" />
      </div>
     
      <p>I developed my love and passion for programming midway through my degree doing visualization with data in R. Since then, I've gravitated towards web development with my strongest language being JavaScript. I enjoy learning various aspects of programming, from developing simple static designs, full stack applications, web scraping, or creating models.
      </p>

      <h3>A Brief History</h3>
      <p>I am graduating this fall with a bachelors of business in Management Information Systems and Data Analytics from Texas A&M International University as a first generation student. I decided to pursue this degree because it combined both my interests in computer science and business to lay the foundation of my knowledge. During my time here, I simultaneously managed to become a front desk supervisor at a Hilton Hotel given my previous experience and other roles.
      </p>
      <h4>Plans upon graduation</h4>
      <p>I plan on pursuing a role either as a developer or analyst given my skill set. Secondly, I want to pursue a masters degree in computer science to learn more about the theoretical aspects while further solidifying my skills. Having worked in various projects in academia both independent and with groups I've come to develop a lifelong passion for learning this field.</p>
    </div>
    </AnimatedPage>
  )
}