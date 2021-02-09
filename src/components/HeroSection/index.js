import React from "react"
import "./HeroSection.css"

function HeroSection() {
  let height = window.innerHeight
  const handleClick = () => {
    window.scrollBy(0, height)
  }

  return (
    <div className="hero-container">
      <h1>Hello!</h1>
      <p>i love photography</p>
      <div className="hero-btn">
        <button onClick={handleClick}>MY PHOTOS</button>
      </div>
    </div>
  )
}

export default HeroSection
