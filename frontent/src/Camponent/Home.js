import React from 'react'
import "./Style/Home.css"


const Home = () => {
  return (
    <div className='home-page-screen'>

      <div className='container-page'>
      <div class="mainDiv"></div>

      {/* Home Banner */}


      <section class="home" id="home">
            <div class="home-content">
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
                        <a href="#"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                  </div>
                  <a href="#" class="btn">Join Now</a>

            </div>
            <div class="Home-img">
                  <img src="https://wallpapers.com/images/hd/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg"/>
            </div>
        
      </section>
      {/* <div className='banner'>
        <div className='bg'>
          <div className='contenent'>
            <h2>A New Home For GameLovers</h2>
            <p>Gaming is usually played individually 
              or with multiple players locally or online
               on either a dedicated video game console,
                PC or mobile device. A video game console,
                 such as an Xbox, PlayStation or Switch is
                  commonly connected to a TV, and the player
                   uses a
               controller to interact with the game.</p>
               <p className='joinbtn'> Join Now</p>


          </div>
          <img style={{width:"50%"}} src='https://wallpapers.com/images/hd/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg'/>
        </div> */}

        {/* About home  */}

      </div>
      </div>





      
  
    










    // </div>
  )
}

export default Home