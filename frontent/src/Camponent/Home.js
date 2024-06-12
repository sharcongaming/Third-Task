import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'



import "./Style/Home.css"

<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

const Home = () => {
    const router = useNavigate()

      
//   const typed = new Typed(".multiple-text",{
//     strings:["Softwere devloper","Frontend ","Backend"],
//     typeSpeed:70,
//     backSpeed:70,
//     backDelay:1000,
//     loop:true
// });

// const cursor = document.querySelector(".cursor");
// let timeout; // Define timeout variable outside the event listener

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
//   cursor.style.display = "block";

//   // Clear any pending timeout before setting a new one
//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     cursor.style.display = "none";
//   }, 1000); // Set timeout to hide cursor after 1 second
// });

window.addEventListener("scroll",reveal);
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
for(var i = 0; i < reveals.length; i++){
var windowheight  = window.innerHeight;
var revealtop = reveals[i].getBoundingClientRect().revealtop
var revealpoint = 150;

if(revealtop < windowheight - revealpoint){
    reveals[i].classList.add("active")
}
else{
    reveals[i].clasList.remove("active")
}
}
}

  return (

    <div className="gradient-background">

    <div className='home-page-screen'>


      <div className='container-page'>
      <div class="mainDiv"> 
        <img src='https://img.freepik.com/premium-photo/young-gaming-team-epic-battles-multiplayer-action-neon-arena_1036975-110472.jpg?size=626&ext=jpg&ga=GA1.1.1069028106.1717068952&semt=sph'/>
        
         </div>

      {/* Home Banner */}


      <section class="home" id="home">
            <div class="home-content">
                <h3>Gaming</h3>
                  <h1>New Home </h1>
                  <h3> For GameLovers <span class="multiple-text"></span></h3>
                   {/* <h3>Gaming</h3>
                  <h1 className='gradient-text'>"Let's make this world our playground!"</h1> 
                   <h3 className='gradient-text'>A New Home For GameLovers  <span class="multiple-text"></span></h3>  */}
                  <p  className='gradient-text'> 
                  Gaming is usually played individually 
              or with multiple players locally or online
               on either a dedicated video game console,
                PC or mobile device. A video game console,
                 such as an Xbox, PlayStation or Switch is
                  commonly connected to a TV, and the player
                   uses a
               controller to interact with the game.</p>
                  <div className="socail-media">
                        <a href="#"><i class="fa-brands fa-facebook "></i></a>
                        <a href="#"><i class="fa-brands fa-instagram "></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin "></i></a>
                  </div>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mGGbXfKo3pAtUXxBSf_Ndmw9eZN7FqkT0g&s" alt="title"/>
                <div class="cboxde">
                    <h5>volleyball</h5>
                    <h2 style={{color:"black"}}>CODEX GAMES</h2>
                    <p className='gradient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>

            <div class="cbox">
                <img src="https://st2.depositphotos.com/1046535/7980/i/450/depositphotos_79804048-stock-photo-badminton-sport-in-gym-hand.jpg" alt="title"/>
                <div class="cboxde">
                    <h5>Badminton </h5>
                    <h2 style={{color:"black"}}>CODEX GAMES</h2>
                    <p className='gradient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>

            <div class="cbox">
                <img src="https://st4.depositphotos.com/1446098/39943/i/450/depositphotos_399439086-stock-photo-pickleball-balls-paddle-sport-pickleball.jpg" alt="title"/>
                <div class="cboxde">
                    <h5>Pickaleball</h5>
                    <h2 style={{color:"black"}}>CODEX GAMES</h2>
                    <p className='gradient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2 style={{color:"black"}}>CODEX GAMES</h2>
                    <p className='gradient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2 style={{color:"black"}}>CODEX GAMES</h2>
                    <p className='gradient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            <div class="cbox">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <h2 style={{color:"black"}}>CODEX GAMES</h2>
                    <p className='gradient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                  <p  className='about-more'> <b>About More</b></p>
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

                <div class="gamecards-container-flex ">
            <div class="cardsection">
                <div class="cardimg">
             
                        <img src="https://img.freepik.com/free-photo/futuristic-dj-using-virtual-reality-glasses-headline-party-play-music_23-2151418276.jpg" alt=""/>
               
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
                    <p className='gradient-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
                </div>
            </div>
         

 <div class="cardimg">
             
             <img src="https://www.shutterstock.com/image-vector/welcome-new-player-esports-gaming-600w-2194403005.jpg" alt=""/>
    
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
         <p className='gradient-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
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
         <p className='gradient-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
     </div>
 </div>
            </div>
              </div>
              </div>
            {/* Contact Section */}
           <div className='new-add-content'>

           </div>
            {/* ****************Tournaments******************* */}

            <div  className='Tournaments'>

              

            </div>





            </div>
            </div>
        </div>
      </div>
   
  )
}

export default Home