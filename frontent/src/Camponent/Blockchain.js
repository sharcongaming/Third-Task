
import React from 'react';
import "./Style/blockchain.css"

const Blockchain = () => {
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

  return (

         <div className='screen'>
        {/* <!-- Home page --> */}
        <section class="hero-gridSection">
        <div class="sectionDesc">
            <p class="sub-headline">
             
Blockchain is a decentralized digital ledger
Introduction to Blockchain Technology
Blockchain technology has revolutionized the way data
 is stored, verified, and transmitted, offering unparalleled security,
  transparency, and efficiency. Initially developed as the underlying
   technology for Bitcoin, blockchain's applications have expanded far beyond cryptocurrencies, impacting various industries,
 including finance, healthcare, supply chain, and more.

 A blockchain is a decentralized, distributed ledger that
  records transactions across multiple computers in such a way 
  that the registered transactions cannot be altered retroactively.
   This ensures transparency and security,
  making it a reliable technology for various applications.
              
            </p>
            <div class="btnContainer">
            
            </div>
        </div>
        <div class="sectionPic-bouncepic" id="sectionPic">
            <img src="https://www.ezloyalty.io/wp-content/themes/ezloyalty/assets/images/industry-detail/on-demand/introduce/image-mobile.svg" alt=""/>
        </div>
    </section>
    <div className='bitcoin'>
    </div>
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
    
            <div class="eachCarousel">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrOK06TTYdJ5p9e-LFDllmgRPnnUrbmXgsIXwnV1V0leEsFZHS" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Ethereum</h1>
                    <p class="carouselPara">Ethereum is open-source blockchain currency</p>
                    <div class="carouselPrice">
                        <h3>$25,600</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">9%</h3>
                    </div>
                    {/* <button class="btn carouselBtn">Buy & Trade</button> */}
                </article>
            </div>
    
            <div class="eachCarousel">
                <img style={{ height:"215px", width:"50%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSli5GgtoyKeRaj09htpBg9maTGsnv4R81vrqgMh1-L8gKZHlI4wd_XtJ55g&s'/>

                <article class="carouselDesc">
                    <h1 class="carouselTitle">Tether</h1>
                    <p class="carouselPara">Tether is a stable coin cryptocurrency</p>
                    <div class="carouselPrice">
                        <h3>$7,000</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">4%</h3>
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

    <div class="fundSection">
        <div class="sectionDesc">
            <h1 class="sectionHeader">Control your funds</h1>
            <p class="sectionPara">
                Our mining pool offers some of the most competitive contracts in the market.
            </p>
            <div class="fundsContainer">
                <div class="fund">
                    <img src="https://www.altassets.net/wp-content/uploads/2024/04/money-860128_1280-324x160.jpg" alt="cryptocurrency"/>
                    <h1 class="fundType">Support All Currency</h1>
                    <p class="darkPara">
                        Accept and process payments from all types of currencies.
                    </p>
                </div>

                <div class="fund">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRX52uFc0q2cZ364EoWn5kaTTH1YRDcYONp60D3GC7RxjWcBGLg" alt="cryptocurrency"/>
                    <h1 class="fundType">Block Chain System</h1>
                    <p class="darkPara">
                        How it Works, Benefits and its Deployment in Financial
                    </p>
                </div>

                <div class="fund">
                    <img src="data:image/jpeg;base64,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" alt="cryptocurrency"/>
                    <h1 class="fundType">Fund Selling</h1>
                    <p class="darkPara">
                        How to Profit in the Crypto Markets through Investing
                    </p>
                </div>

                <div class="fund">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nCUkv12AA5m0lLceOuoDFNihuj7IalG1YozqhKU0s6_DyIxY" alt="cryptocurrency"/>
                    <h1 class="fundType">Crypto Card</h1>
                    <p class="darkPara">
                        Crypto Cards and Why Cryptocurrency are the Future
                    </p>
                </div>
            </div>
        </div>
    </div>
   
   {/* ********market************** */}
   <div className='coin-wallet'>
    <div className='coin-first-div'>
     <div className='getting-strat'> 
          <h2 style={{marginRight:""}}>Getting started</h2></div>
        <div className='connent-wallet'>
            <div className='inner-div'>
                <div className='inner-div-first'>
                    <div className='boxdiv'><p>01</p></div>
                    <h2>choose your wallet</h2>
                </div>
                <p>A wallet is necessary for people wanting to use, 
                    trade, or hold Dogecoin. You can pick a wallet</p>
                    <div className='learn-more'><p>Learn More.</p></div>
            </div>
            <div className='inner-div'>
                <div className='inner-div-first'>
                    <div className='boxdiv'><p>02</p></div>
                    <h2> configure your wallet</h2>

                </div>
                <p>After downloading, you can configure your wallet according to our</p>
                    <div className='learn-more'><p>guide.</p></div>
            </div>
            <div className='inner-div'>
                <div className='inner-div-first'>
                    <div className='boxdiv'><p>03</p></div>
                    <h2> get some coin</h2>

                </div>
                <p>There’s lots of ways to get your hands on some coin.</p>
                    <div className='learn-more'><p>Learn More.</p></div>
            </div>
        </div>

 

     

      

    </div>
    <div>

    </div>

   </div>

    </div>
    
  )
}

export default Blockchain;