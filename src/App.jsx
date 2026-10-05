import React, { useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillUniverse from './components/SkillUniverse'
import InteractiveTerminal from './components/InteractiveTerminal'
import RecruiterSnapshot from './components/RecruiterSnapshot'
import ProjectCaseStudies from './components/ProjectCaseStudies'
function WorldChapter({ children, className = '' }) {
  return <div className={`world-chapter ${className}`}>{children}</div>
}

function RevealOnScroll({ children, className = '' }) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.world-chapter')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  return <div className={`world-chapter ${className}`}>{children}</div>
}

function App() {
  return (
    <>
      <Preloader />
      <div className="world-chrome" aria-hidden="true"><span className="world-chrome-line"/><span className="world-chrome-dot"/></div>
      <Navbar />
      <RevealOnScroll><Hero /></RevealOnScroll>
      <RevealOnScroll><About /></RevealOnScroll>
      <RevealOnScroll><RecruiterSnapshot /></RevealOnScroll>
      <RevealOnScroll><TechnicalSkills /></RevealOnScroll>
      <RevealOnScroll className="world-portal"><SkillUniverse /></RevealOnScroll>
      <RevealOnScroll><InteractiveTerminal /></RevealOnScroll>
      <RevealOnScroll><Services /></RevealOnScroll>
      <RevealOnScroll><Projects /></RevealOnScroll>
      <RevealOnScroll><ProjectCaseStudies /></RevealOnScroll>
      <RevealOnScroll><ContentCreator /></RevealOnScroll>
      <RevealOnScroll><Leadership /></RevealOnScroll>
      <RevealOnScroll><SoftSkills /></RevealOnScroll>
      <RevealOnScroll><Contact /></RevealOnScroll>
      <RevealOnScroll><Footer /></RevealOnScroll>
    </>
  )
}

export default App
