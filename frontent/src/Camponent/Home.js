import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Style/Home.css"
import ChatBox from './ChatBox'

<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

const Home = () => {
    const router = useNavigate()

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
        <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1TwEfE7baajNo8FwczgcnMPaimoHVJjTaFk4dQSRyBt7Yyev-'/>
        
        {/* <ChatBox/> */}
    
         </div>



      {/* Home Banner */}


      <section class="home" id="home">
            <div class="home-content">
                <h3>Gaming</h3>
                  <h1>New Home </h1>
                  <h3> For GameLovers <span class="multiple-text"></span></h3>
                  <p   style={{color:"white"}}> 
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
                <img src='https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg'/>
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
                    {/* <h2 style={{color:"black"}}>CODEX GAMES</h2> */}
                    <p style={{color:"white"}}>Volleyball is an engaging and dynamic sport suitable for players of all ages and skill levels. Whether played competitively or recreationally,
                         it offers numerous physical, social, and mental benefits...</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>

            <div class="cbox">
                <img src="https://st2.depositphotos.com/1046535/7980/i/450/depositphotos_79804048-stock-photo-badminton-sport-in-gym-hand.jpg" alt="title"/>
                <div class="cboxde">
                    <h5>Badminton </h5>
                    {/* <h2 style={{color:"black"}}>CODEX GAMES</h2> */}
                    <p style={{color:"white"}}>Badminton is a fast-paced and engaging sport that can be enjoyed by people of all ages and skill levels. Whether played casually or competitively,
                         it offers numerous physical, mental, and social benefits...</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>

            <div class="cbox">
                <img src="https://st4.depositphotos.com/1446098/39943/i/450/depositphotos_399439086-stock-photo-pickleball-balls-paddle-sport-pickleball.jpg" alt="title"/>
                <div class="cboxde">
                    <h5>Pickaleball</h5>
                    {/* <h2 style={{color:"black"}}>CODEX GAMES</h2> */}
                    <p style={{color:"white"}}>Pickleball is a fun, fast-paced game that offers a great workout and a chance to socialize. Whether you're a beginner or an 
                        experienced player, it's easy to pick up and enjoy...</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>

                    <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            <div class="cbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                 
                    <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            <div class="cbox">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GqY5SxAZRelkzcxzyHdD39s6HziOE0yCZA&s" alt="title"/>
                <div class="cboxde">
                    <h5>OUR ALL GAMES</h5>
                    <p style={{color:"white"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsa modi soluta nam error
                        deleniti neque impedit earum omnis.</p>
                  <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            
            </div>


     

           
         




            </div>
            </div>
        </div>
      </div>
   
  )
}

export default Home