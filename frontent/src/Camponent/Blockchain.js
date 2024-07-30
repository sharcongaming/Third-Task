
import React from 'react';
import "./Style/blockchain.css"

const Blockchain = () => {
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

  return (

         <div>
        <div id="logo">
            <a href="./index.html">
            <img src="./img/logo-white.png" alt=""/>
            </a>
        </div>
       

        {/* <!-- Home page --> */}

        <section class="hero gridSection">
        <div class="sectionDesc">
            <h1 class="headline">
                Most popular way to trade <span class="cryptoText">CRYPTO</span>.
            </h1>
            <p class="sub-headline">
                You can see a record of all your transactions 
                anytime you want and never have to worry about 
                someone erasing or stealing your money!
            </p>
            <div class="btnContainer">
                {/* <button class="btn btn1">Contact Now</button>
                <button class="btn btn2">play video <i class="fa-solid fa-play"></i></button> */}
            </div>
        </div>
        <div class="sectionPic bouncepic" id="sectionPic">
            <img src="https://www.ezloyalty.io/wp-content/themes/ezloyalty/assets/images/industry-detail/on-demand/introduce/image-mobile.svg" alt=""/>
        </div>
    </section>

    
    <section>
        <div class="carouselContainer">
            <div class="eachCarousel eachCarouselBorder">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJvPOOPiI9gJi5ymL8KiK7UhyHzgX-YVrF-BlXEfUxDyCU0wx" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Bitcoin</h1>
                    <p class="carouselPara">Bitcoin is an innovative payment network</p>
                    <div class="carouselPrice">
                        <h3>$34,000</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">15%</h3>
                    </div>
                    {/* <button class="btn carouselBtn">Buy & Trade</button> */}
                </article>
            </div>
    
            
           
            
        </div>
        <div class="carouselIndicator">
            <div class="indicator activeIndicator" onclick="slideCarousel(0)"></div>
            <div class="indicator" onclick="slideCarousel(1)"></div>
            <div class="indicator" onclick="slideCarousel(2)"></div>
            <div class="indicator" onclick="slideCarousel(3)"></div>
            <div class="indicator" onclick="slideCarousel(4)"></div>
            <div class="indicator" onclick="slideCarousel(5)"></div>
        </div>
    </section>



    
    </div>
    
  )
}

export default Blockchain;