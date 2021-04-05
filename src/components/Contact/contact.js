import React from 'react'
import "./contact.css"

const Contact = () => {
    <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
            <div class="contact-info">
                <h3 class="title">Let's get in touch</h3>
                <p class="text">
                    For more information, please feel free to reach out to me on any platform.
            </p>

                <div class="info">
                    <div class="information">
                        <img src="img/location.png" class="icon" alt="" />
                        <p>1100 W. Ainslie Chicago, IL 60640</p>
                    </div>
                    <div class="information">
                        <img src="img/email.png" class="icon" alt="" />
                        <p>pnguyen6910@gmail.com</p>
                    </div>
                    <div class="information">
                        <img src="img/phone.png" class="icon" alt="" />
                        <p>773-865-0462</p>
                    </div>
                </div>

                <div class="social-media">
                    <p>Connect with us :</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/paul.p.nguyen">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://github.com/pnguyen6910">
                            <i class="fab fa-github-square"></i>
                        </a>
                        <a href="https://www.instagram.com/macenguyendu/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/paul-nguyen-740051138/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>

                <form action="index.html" autocomplete="off">
                    <h3 class="title">Contact</h3>
                    <div class="input-container">
                        <input type="text" name="name" class="input" placeholder="Name" />
                    </div>
                    <div class="input-container">
                        <input type="email" name="email" class="input" placeholder="Email" />
                    </div>
                    <div class="input-container">
                        <input type="tel" name="phone" class="input" placeholder="Phone" />
                    </div>
                    <div class="input-container textarea">
                        <textarea name="message" class="input" placeholder="Message"></textarea>
                    </div>
                    <input type="submit" value="Send" class="btn my-form-button" />
                </form>
            </div>
        </div>
    </div>
}