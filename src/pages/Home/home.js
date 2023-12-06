import App from '../../App'
import React from 'react'

import DOMPurify from "dompurify";
import './home.css'

function Home() {
    const myHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Raga. - Clone</title>
        <link rel="stylesheet" href="./home.css">
        <script type="text/javascript" src="jquery-3.3.1.js"></script>
    
    </head>
    <body>
        <header>
            <div class="sub-container">
                <div class="top-bar">
                    <div class="logo">
                        <div class="logo-img">
                            <div class="logo-bar" id="thin-bar"></div>
                            <div class="logo-bar" id="med-bar"></div>
                            <div class="logo-bar" id="thick-bar"></div>
                        </div>
                        <p class="logo-text">RAGA.</p>
                    </div>
                    <nav>
                        <ul class="nav-items">
                            <li class="nav-item"><a href="#">About.</a></li>
                            <li class="nav-item"><a href="#">Pricing.</a></li>
                            <li class="nav-item"><a href="#">Download.</a></li>
                            <li class="nav-item"><a href="#">Classes.</a></li>
                            <div class="nav-item cta"><a href="/Login">Get Started</a></div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    
        <main>
            <div class="sub-container" id="hero-section">
                <div class="floating-card" id="calories-card">
                    <p class="floating-card-title">Weekly Report</p>
                    <p class="floating-card-value">2591kcal</p>
                    <i class="fa-solid fa-chart-simple"></i>
                </div>
                <div class="floating-card" id="bpm-card">
                    <p class="floating-card-title">BPM</p>
                    <p class="floating-card-value">87 bpm</p>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="logo-img watermark" id="watermark">
                    <div class="logo-bar" id="thin-bar"></div>
                    <div class="logo-bar" id="med-bar"></div>
                    <div class="logo-bar" id="thick-bar"></div>
                </div>
                <img src="assets/images/Gym_Broski.png" alt="" class="hero-pic">
                <h1 class="main-heading">
                    <span id="catchy-text">Smart platform</span> to manage your work out!
                </h1>
                <div class="program-desc">
                    <div class="desc">
                        Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast.
                    </div>
                    
                    <div class="start-program">
                        <input type="email" class="email" placeholder="EMAIL ADDRESS">
                        <div class="cta"><a href="#">Start Program</a></div>
                    </div>
                </div>
                <div class="scroll">
                    <p class="banner-text light-banner-text">Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                </div>
            </div>
    
            <div class="sub-container" id="features-section">
                <div class="promo">
                    <h2 class="sub-heading">Easy-to-use <span> features to make your workout more </span>enjoyable!</h2>
                    <div class="cta"><a href="">Download App</a></div>
                </div>
                <div class="features-container">
                    <div class="features">
                        <div class="feature">
                            <div class="illustration"><i class="fa-solid fa-road"></i></div>
                            <p class="minor-heading feature-name">Easy to Follow Guide</p>
                            <p class="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae modi alias voluptatem minus quas saepe animi! Sint, dolorem expedita. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div class="feature">
                            <div class="illustration"><i class="fa-solid fa-folder-tree"></i></div>
                            <p class="minor-heading feature-name">Structured Programs</p>
                            <p class="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae modi alias voluptatem minus quas saepe animi! Sint, dolorem expedita. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div class="feature">
                            <div class="illustration"><i class="fa-solid fa-brain"></i></div>
                            <p class="minor-heading feature-name">Interesting AI Features</p>
                            <p class="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae modi alias voluptatem minus quas saepe animi! Sint, dolorem expedita. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="sub-container" id="how-to-use-section">
                    <div class="logo-img watermark" id="how-to-use-watermark">
                        <div class="logo-bar" id="thin-bar"></div>
                        <div class="logo-bar" id="med-bar"></div>
                        <div class="logo-bar" id="thick-bar"></div>
                    </div>
                
               
                <img src="assets/images/Iphone Mockup.png" alt="" class="device-mockup"  id="right-facing-device">
                <img src="assets/images/Iphone Mockup.png" alt="" class="device-mockup"  id="left-facing-device">
                
                <h2 class="sub-heading" id="how-to-use-heading"><span>How to use </span>Raga.</h2>
                <div class="steps-container">
                    <div class="step" id="step-one">
                        <div class="logo">
                            <div class="logo-img">
                                <div class="logo-bar" id="thin-bar"></div>
                                <div class="logo-bar" id="med-bar"></div>
                                <div class="logo-bar" id="thick-bar"></div>
                            </div>
                        </div>
                        <h3 class="minor-heading step-heading">Register and Fill In Your Data</h3>
                        <p class="step-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum, ullam debitis necessitatibus sed enim consequuntur recusandae quos earum deserunt dolorem ab neque facilis aliquam ipsa perferendis assumenda ducimus saepe tenetur! Ipsum veritatis minus dolores nam saepe. Perspiciatis, voluptate praesentium!
                        </p>
                    </div>
                    
                    <div class="step" id="step-two">
                        <div class="logo">
                            <div class="logo-img">
                                <div class="logo-bar" id="thin-bar"></div>
                                <div class="logo-bar" id="med-bar"></div>
                                <div class="logo-bar" id="thick-bar"></div>
                            </div>
                        </div>
                        <h3 class="minor-heading step-heading">Browse Classes and Create Schedule</h3>
                        <p class="step-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum, ullam debitis necessitatibus sed enim consequuntur recusandae quos earum deserunt dolorem ab neque facilis aliquam ipsa perferendis assumenda ducimus saepe tenetur! Ipsum veritatis minus dolores nam saepe. Perspiciatis, voluptate praesentium!
                        </p>
        
                    </div>
                    
                    <div class="step" id="step-three">
                        <div class="logo">
                            <div class="logo-img">
                                <div class="logo-bar" id="thin-bar"></div>
                                <div class="logo-bar" id="med-bar"></div>
                                <div class="logo-bar" id="thick-bar"></div>
                            </div>
                        </div>
                        <h3 class="minor-heading step-heading">Start Work Out!</h3>
                        <p class="step-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum, ullam debitis necessitatibus sed enim consequuntur recusandae quos earum deserunt dolorem ab neque facilis aliquam ipsa perferendis assumenda ducimus saepe tenetur! Ipsum veritatis minus dolores nam saepe. Perspiciatis, voluptate praesentium!
                        </p>
                        
                    </div>
                </div>
                
            </div>
            <div class="sub-container" id="classes-section">
                <div class="promo">
                    <h2 class="sub-heading"><span> Discover interesting </span>classes and guides <span> based on your preferences</span></h2>
                    <div class="cta"><a href="">See All Classes</a></div> 
                </div>
                <img src="assets/images/Iphone Mockup.png" alt="" class="device-mockup" id="classes-device-mockup">
    
                <div class="classes">
                    <div class="classes-blobs">
                        <div class="class" id="stretching-class">
                            <div class="class-icon"></div>
                            <div class="class-name">Stretching</div>
                            </div>
                        <div class="class" id="treadmill-class">
                            <div class="class-icon"></div>
                            <div class="class-name">Treadmill</div>
                            </div>
                        <div class="class" id="running-class">
                            <div class="class-icon"></div>
                            <div class="class-name">Running</div>
                            </div>
                        <div class="class" id="jump-class">
                            <div class="class-icon"></div>
                            <div class="class-name">Jump</div>
                            </div>
                        <div class="class" id="barbell-class">
                            <div class="class-icon"></div>
                            <div class="class-name">Barbell</div>
                        </div>
                    </div>
                    <div class="programs">
                        <div class="program">
                            <div class="program-pic"></div>
                            <h3 class="minor-heading">Regular Muscle Stretching</h3>
                            <div class="author">
                                <div class="author-pic"></div>
                                <div class="author-name">Guy Hawkins</div>
                            </div>
                        </div>
                        <div class="program">
                            <div class="program-pic"></div>
                            <h3 class="minor-heading">Warm Up Exercises</h3>
                            <div class="author">
                                <div class="author-pic"></div>
                                <div class="author-name">Brooklyn Simmons</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="sub-container" id="download-section">
                <div class="logo-img watermark" id="left-watermark">
                    <div class="logo-bar" id="thin-bar"></div>
                    <div class="logo-bar" id="med-bar"></div>
                    <div class="logo-bar" id="thick-bar"></div>
                </div>
                <div class="logo-img watermark" id="right-watermark">
                    <div class="logo-bar" id="thin-bar"></div>
                    <div class="logo-bar" id="med-bar"></div>
                    <div class="logo-bar" id="thick-bar"></div>
                </div>
                <div class="classes">
                    <h2 class="sub-heading"><span>Get </span>Raga. <span>now</span></h2>
                    <p class="download-prompt">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <div class="download-button">
                        <div class="cta"><a href="">Download</a></div>
                        <div class="cta" id="arrow"><b>&rightarrow;</b></div>
                    </div>
                
                </div>
                <div class="scroll">
                    <p class="banner-text light-banner-text">Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                    <p class="banner-text light-banner-text" >Start Workout Now</p>
                    <p class="banner-text dark-banner-text">Start Workout Now</p>
                </div>
            </div>
        </main>
        <footer>
            <div class="footer-components sub-container">
                <div class="company-desc">
                    <div class="logo">
                        <div class="logo-img">
                            <div class="logo-bar" id="thin-bar"></div>
                            <div class="logo-bar" id="med-bar"></div>
                            <div class="logo-bar" id="thick-bar"></div>
                        </div>
                        <p class="logo-text" style="color: white">RAGA.</p>
                    </div>
                    <p class="company-caption">She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
                <div class="footer-features">
                    <h3 class="footer-heading minor-heading">Features</h3>
                    <ul class="footer-links">
                        <li class="footer-link"><a href="" class="footer-links">Office</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Rooms</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Guests</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Meetings</a></li>
                    </ul>   
                </div>
                <div class="footer-about">
                    <h3 class="footer-heading minor-heading">About</h3>
                    <ul class="footer-links">
                        <li class="footer-link"><a href="" class="footer-links">About Us</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Contact Us</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Pricing</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-follow">
                    <h3 class="footer-heading minor-heading">Follow Us</h3>
                    <ul class="footer-links">
                        <li class="footer-link"><a href="" class="footer-links">Facebook</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Instagram</a></li>
                        <li class="footer-link"><a href="" class="footer-links">Twitter</a></li>
                        <li class="footer-link"><a href="" class="footer-links">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        
    </body>
    <script src="./home.js"></script>
    <script src="https://kit.fontawesome.com/6b6441b6bf.js" crossorigin="anonymous"></script>
    
    </html>`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

  return (
<div>

<div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
    <App/>

</div>
 
  )
}

export default Home