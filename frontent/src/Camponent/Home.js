import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Style/Home.css"
import ChatBox from './ChatBox'


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
                <h3  style={{color:"#0dcaf0",fontSize:"30px"}}>About </h3>
                  <h1  style={{color:"#0dcaf0",fontSize:"25px"}}>Blackhole Infiverse </h1>
                  <p style={{color:"white",fontSize:"19px"}}> 
                  BlackHole Infiverse isn't your average content creation company.
                   Founded in 2021, we emerged with a bold vision: to become a key player
                    in the burgeoning meta, AI and robotics space. 
                     We're a passionate team driven by
                     innovation, constantly pushing the boundaries of traditional 
                  media and diving headfirst into the future of immersive storytelling
                   through VR/AR experiences..</p>
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
{/* 
      **************slider****** */}
      {/* <div className='slider'>
      <div class="slider-container">
  <div class="slides">
    <div class="slide"><img src="https://assets.tatacliq.com/medias/sys_master/images/49641516630046.jpg" alt="Slide 1"/></div>
    <div class="slide"><img src="https://assets.tatacliq.com/medias/sys_master/images/49609610592286.jpg" alt="Slide 2"/></div>
    <div class="slide"><img src="https://assets.tatacliq.com/medias/sys_master/images/49631427756062.jpg" alt="Slide 3"/></div>
    <div class="slide"><img src="https://assets.tatacliq.com/medias/sys_master/images/49595531231262.jpg" alt="Slide 4"/></div>
    <div class="slide"><img src="https://assets.tatacliq.com/medias/sys_master/images/49641516400670.jpg" alt="Slide 5"/></div>
    <div class="slide"><img src="https://assets.tatacliq.com/medias/sys_master/images/49641513549854.jpg" alt="Slide 6"/></div>
  </div>
  <button className='sliderbutton' id="prevBtn" onclick="prevSlide()">❮</button>
  <button id="nextBtn" onclick="nextSlide()">❯</button>
</div> */}
{/* </div> */}





      {/* Gaming Section */}
      <div className='gaming-section'>
      <h2>Our Service</h2>

      <div class="threebox-container-flex">
            <div class="cbox">
                <div class="cboxde">
                    <img src='https://cdn.pixabay.com/photo/2019/04/15/11/50/blockchain-4129138_1280.jpg'/>
                   
                    <h5 style={{color:"#59b2f4",marginTop:"3%"}}>BlockChain</h5>
                    {/* <h2 style={{color:"black"}}>CODEX GAMES</h2> */}
                    <p style={{color:"white"}}>Blockchain is a decentralized digital ledger Introduction to Blockchain Technology Blockchain technology has revolutionized the way data is stored, verified, and transmitted, offering unparalleled security, transparency, and efficiency. Initially developed as the underlying technology for Bitcoin, blockchain's applications have expanded far beyond cryptocurrencies, impacting various industries, including finance, healthcare, supply chain, and more.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>

            <div class="cbox">
                <div class="cboxde">
                    <img src='https://media.istockphoto.com/id/519339600/photo/playing-shooter-game-on-console.jpg?s=612x612&w=0&k=20&c=3T8ATKr4KxT9-rIA4QzJlmfEO613AyQa0Fl71aPWKQw='/>
                  
                    <h5 style={{color:"#59b2f4",marginTop:"3%"}}>Gaming </h5>
                    {/* <h2 style={{color:"black"}}>CODEX GAMES</h2> */}
                    <p style={{color:"white"}}>Welcome to the future of gaming! BlackHole Infiverse isn't just creating content – we're crafting the next generation of gaming experiences that transcend traditional boundaries. We're diving headfirst into the Metaverse, but that doesn't mean we're leaving anyone behind. Our diverse portfolio of games bridges the gap, offering groundbreaking titles playable anywhere, on any platform.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>

            <div class="cbox">
                <img  src='https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg'/>
              
                <div class="cboxde">
                    <h5 style={{color:"#59b2f4",marginTop:"3%"}}>Robotics</h5>
                    {/* <h2 style={{color:"black"}}>CODEX GAMES</h2> */}
                    <p style={{color:"white"}}>BlackHole Infiverse isn't just about creating content – we're shaping the future through cutting-edge robotics advancements. One of our most exciting endeavors is the development of next-generation humanoid robots poised to revolutionize various sectors, seamlessly integrating into our world.</p>
                        <p  className='about-more'> <b>About More</b></p>
                </div>
            </div>
            {/* <div class="cbox">
                <img src='https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg'/>
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
            </div> */}
            
            </div>


     

           
         




            </div>
            </div>
        </div>
      </div>
   
  )
}

export default Home