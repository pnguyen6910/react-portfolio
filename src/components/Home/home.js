import React from 'react'
import "./style.css"

const Home = () => {
    <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hi, I'm <strong>Paul Nguyen</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">FULL-STACK DEV</p>
        <img src="./paul6.png" alt="paul nguyen" class="intro__image">
    </section>

        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>

            <div class="serviecs">
                <div class="service">
                    <h3>Design + Development</h3>
                    <p>Building, creating, and maintaining fully functional websites using languages such as HTML, Python, CSS, JavaScript, Node.js and many more. </p>
                </div>


                <div class="service">
                    <h3>E-Commerce</h3>
                    <p>Making products easier to discover and purchase through online retailers and marketplaces. Services for Business to Consumer (B2C), Business to Business (B2B), Consumer to Consumer (C2C), and Consumer to Business (C2B).</p>
                </div>


                <div class="service">
                    <h3>WordPress</h3>
                    <p>Storing content and enables a user to create and publish webpages, requiring nothing beyond a domain and a hosting service. Many different simple and clean templates on demand.</p>
                </div>
            </div>

            <a href="pages/portfolio.html" class="btn">My Work</a>
        </section>
}
