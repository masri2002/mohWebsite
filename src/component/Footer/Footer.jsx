import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <>
    <footer class="footer">
    <div class="second-footer">
        <div class="container">
            <div class="box">
                <div class="logo-wrapper">
                    <a class="logo" href="index.html"> <strong>Ma</strong> Mohammed Almasri </a>
                </div>
                <div class="text">
                    <p>Photography inila miss uman saten eliten finus vivera alacus miss the drudean seneice
                        miss notumane tonec a fermen.</p>
                </div>
            </div>
            <div class="box">
                <h3 class="title">Quick Links</h3>
                <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="works.html">Works</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
            </div>

            <div class="box">
                <h3 class="title">Contact</h3>
                <ul>
                    <li>
                        <i class="fa fa-phone"></i>
                        <span>
                            +1 123-090-4040
                        </span>
                    </li>
                    <li>
                        <i class="fa fa-at"></i>
                        <span>
                        Email @ email.com
                        </span>
                    </li>
                    <li>
                        <span>
                            XX xxxx St, Jordan, CA 94114, JO
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <div class=" copyright">
        <div class="box">
            <p class="">Copyright ©2024 by <a href="#">Ahmad Almasri</a>. All rights reserved.</p>
        </div>
        <div class="box">
            <ul class="social-icons">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                </ul>
        </div>
    </div>
   
</footer>
</>
  )
}
