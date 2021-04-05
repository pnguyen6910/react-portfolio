import React from 'react'
import "./style.css"
import img from "./img.jpg"

const About = () => {
    <div>
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Designer & developer based out of Chicago</p>
            <div class="about-me__body">
                <p class="big-text">My name is Paul Nguyen & I build things on the internet.</p>
                <p class="big-text">As it says above, I'm based out of Chicago. I'm a young passionate developer using his knowledge in the arts and applying it to web development. Creating websites was a newfound passion that I didn't even know I was going to enjoy, but nonetheless I absolutely love it.</p>
            </div>
            <img src="./paulandmom.jpg" alt="paul nguyen" class="about-me__image">
        </section>
    </div>
}