import React from 'react'
import "./Style/Home.css"


const Home = () => {

//   const typed = new Typed(".multiple-text",{
//     strings:["Softwere devloper","Frontend ","Backend"],
//     typeSpeed:70,
//     backSpeed:70,
//     backDelay:1000,
//     loop:true
// });
  return (


    // start main Screen************

    <div className='home-page-screen'>

     {/* ********************** slider ********************** */}

      <div className='container-page'>
      <div class="mainDiv"></div>

      {/* Home Banner */}


      <section class="home" id="home">
            <div class="home-content">
                {/* <h3>Gaming</h3>
                  <h1>New Home </h1>
                  <h3> For GameLovers <span class="multiple-text"></span></h3> */}
                   <h3>Gaming</h3>
                  <h1>A New Home For GameLovers</h1> 
                   <h3>A New Home For GameLovers  <span class="multiple-text"></span></h3> 
                  <p> 
                  Gaming is usually played individually 
              or with multiple players locally or online
               on either a dedicated video game console,
                PC or mobile device. A video game console,
                 such as an Xbox, PlayStation or Switch is
                  commonly connected to a TV, and the player
                   uses a
               controller to interact with the game.</p>
                  <div class="socail-media">
                        <a href="#"><i class="fa-brands fa-facebook "></i></a>
                        <a href="#"><i class="fa-brands fa-instagram "></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin "></i></a>
                  </div>
                  {/* <button className='btn'>Join Now</button> */}
                  <a href="#" class="btn">Join Now</a>

            </div>
            <div class="Home-img">
                  <img src="https://wallpapers.com/images/hd/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg"/>
            </div>
        
      </section>

      {/* Gaming Section */}
      <div className='gaming-section'>
      <h2>All Games</h2>

      <div class="threebox-container-flex">
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2>CODEX GAMES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                    <a href="/">All GAMES</a>
                </div>
            </div>

            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2>CODEX GAMES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                    <a href="/">All GAMES</a>
                </div>
            </div>

            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2>CODEX GAMES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                    <a href="/">All GAMES</a>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2>CODEX GAMES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                    <a href="/">All GAMES</a>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2>CODEX GAMES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                    <a href="/">All GAMES</a>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2>CODEX GAMES</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                    <a href="/">All GAMES</a>
                </div>
            </div>
            
            </div>

            <div class="container-filter-flex">

            <div className="active"><p>All</p></div>
            <div className="active"><p>Play</p></div>
            <div className="active"><p>Uplay</p></div>
            <div className="active"><p>Origin</p></div>

            <div className="active"><p>Steam</p></div>
        </div>

            {/* FEATURE GAMES */}

            <div className='feature-games'>
              <h1>FEATURE GAMES </h1>

                <div class="gamecards-container-flex">
            <div class="cardsection">
                <div class="cardimg">
             
                        <img src="https://cdn.mos.cms.futurecdn.net/Kuuyu5VZoVxqZxy48swupn-650-80.jpg.webp" alt=""/>
               
                    <div class="tegs">
                        <a href="/">ACTION</a>
                        <a href="/">ADVANTURE</a>
                        <i class="fa-solid fa-tags"></i>
        
                </div>
                <div class="cardinfo">
                    <h2>EGYPT AND WORLD</h2>
                    <div class="playteg flex">
                        <i class="fa-solid fa-tv"></i>
                        <h3 class="flex">
                            <a href="/">PLAYSTATION </a>
                        </h3>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
                </div>
            </div>
         

 <div class="cardimg">
             
             <img src="https://cdn.mos.cms.futurecdn.net/Kuuyu5VZoVxqZxy48swupn-650-80.jpg.webp" alt=""/>
    
         <div class="tegs">
             <a href="/">ACTION</a>
             <a href="/">ADVANTURE</a>
             <i class="fa-solid fa-tags"></i>

     </div>
     <div class="cardinfo">
         <h2>EGYPT AND WORLD</h2>
         <div class="playteg flex">
             <i class="fa-solid fa-tv"></i>
             <h3 class="flex">
                 <a href="/">PLAYSTATION </a>
             </h3>
         </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
     </div>
 </div>

  <div class="cardimg">
             
             <img src="https://cdn.mos.cms.futurecdn.net/Kuuyu5VZoVxqZxy48swupn-650-80.jpg.webp" alt=""/>
    
         <div class="tegs">
             <a href="/">ACTION</a>
             <a href="/">ADVANTURE</a>
             <i class="fa-solid fa-tags"></i>

     </div>
     <div class="cardinfo">
         <h2>EGYPT AND WORLD</h2>
         <div class="playteg flex">
             <i class="fa-solid fa-tv"></i>
             <h3 class="flex">
                 <a href="/">PLAYSTATION </a>
               
             </h3>
         </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
     </div>
 </div>
            </div>
              </div>
              </div>
            {/* Contact Section */}
            <div className='contact-section'>

            <div  class="contact" id="contact">
                              <h2 class="heading" > Contact <span>Me</span></h2>
                              <form action="#">
                                    <div class="input-box">
                                          <input type="text" placeholder="Full Name"/>
                                          <input type="email" placeholder="Email Adress"/>
                                    </div>
                                    <div class="input-box">
                                          <input type="number" placeholder=" Mobile Number"/>
                                          <input type="text" placeholder="Email Subject"/>
                                    </div>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                                    <input type="submit" value="Send Message" class="btn"/>
                              </form>
                        </div>
            </div>
            <div >

            </div>
            {/* ****************Tournaments******************* */}

            <div  className='Tournaments'>

            </div>


            




        </div>
      </div>
      </div>
  )
}

export default Home