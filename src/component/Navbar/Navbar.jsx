import React from 'react'
import "./navbar.css"
export const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="container">
        <div class="logo-wrapper">
            <a class="logo" href="/"> <strong>MA</strong> Mohammed Al-Masri </a>
        </div>

        <ul class="navbar-links">
            <li class="nav-item"><a class="nav-link active" href="/">HOME</a></li>
            <li class="nav-item"><a class="nav-link" href="/portfolio">PORTFOLIO</a></li>
            <li class="nav-item"><a class="nav-link" href="/artprints">ART PRINTS</a></li>
            <li class="nav-item"><a class="nav-link" href="#works">WORKSHOPS & LESSONS</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">BLOG</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">CONTACT</a></li>
        </ul>
    </div>
</nav>
  )
}

