import React from 'react'
import "../Camponent/Style/Navbar.css"
import Swiper from 'swiper';

import 'swiper/css';

const Home = () => {
  return (
    <div>
      <div class="home" id="home">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://t3.ftcdn.net/jpg/02/89/89/60/240_F_289896093_bnIp6I66LeQuuHr5RymKubKsCDf0u4pL.jpg" class="w-100" alt="image"/>
                <div class="content col-8">
                    <h1 class="text-white display-3">The Best <span class="text-warning">Games</span> Out There</h1>
                    <p class="text-white fs-6 fw-light py-3 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Nostrum maxime recusandae natus alias veniam quasi <br/> incidunt doloremque temporibus aperiam. Architecto, officiis </p>
                    <button class="btn btn-warning text-uppercase text-white fs-5">read more</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUvfNrOXSMSYr4eoloDE-RYi20cFmXzJhP-aPpi34QmLumDHVf" class="w-100" alt="image"/>
                <div class="content col-8">
                    <h1 class="text-white display-3">The Best <span class="text-warning">Games</span> Out There</h1>
                    <p class="text-white fs-6 fw-light py-3 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Nostrum maxime recusandae natus alias veniam quasi <br/> incidunt doloremque temporibus aperiam. Architecto, officiis </p>
                    <button class="btn btn-warning text-uppercase text-white fs-5">read more</button>
                </div>
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>


    <div class="cards py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="images">
                        <img src="https://cdn.vectorstock.com/i/1000v/38/48/gamer-gaming-logo-vector-47133848.jpg" alt="images"/>
                        <div class="content">
                            <span class="text-white bg-warning py-1 px-3 fs-6">starting</span>
                            <h4>Suspendisse ut justo tem por, rutrum</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="images">
                        <img src="https://cdn.vectorstock.com/i/1000v/38/48/gamer-gaming-logo-vector-47133848.jpg" alt="images"/>
                        <div class="content">
                            <span class="text-white bg-danger py-1 px-3 fs-6">new</span>
                            <h4>Suspendisse ut justo tem por, rutrum</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="images">
                        <img src="https://cdn.vectorstock.com/i/1000v/38/48/gamer-gaming-logo-vector-47133848.jpg" alt="images"/>
                        <div class="content">
                            <span class="text-white bg-warning py-1 px-3 fs-6">game nowe</span>
                            <h4>Suspendisse ut justo tem por, rutrum</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="images">
                        <img src="https://cdn.vectorstock.com/i/1000v/38/48/gamer-gaming-logo-vector-47133848.jpg" alt="images"/>
                        <div class="content">
                            <span class="text-white bg-danger py-1 px-3 fs-6">new</span>
                            <h4>Suspendisse ut justo tem por, rutrum</h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="games">
        <div class="container">
            <div class="row py-5">
                <div class="heading text-center">
                    <button class="btn btn-danger text-uppercase text-white fs-6">new more</button>
                    <h3>Recent Games</h3>
                </div>
            </div>
            <div class="row py-5">

                <div class="col-lg-4 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://i.pinimg.com/736x/ff/5e/a9/ff5ea9547fab0a49b4b9d658361a2bda.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Suspendisse ut justo tem por, rutrum</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div class="content d-flex justify-content-between">
                            <span class="py-1 px-3 fs-6">comment 6</span>
                            <span class="text-white bg-warning py-1 px-3 fs-6">starting</span>
                          </div>
                         
                        </div>
                      </div>
                </div>

                <div class="col-lg-4 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://i.pinimg.com/736x/ff/5e/a9/ff5ea9547fab0a49b4b9d658361a2bda.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Suspendisse ut justo tem por, rutrum</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div class="content d-flex justify-content-between">
                            <span class="py-1 px-3 fs-6">comment 6</span>
                            <span class="https://i.pinimg.com/736x/ff/5e/a9/ff5ea9547fab0a49b4b9d658361a2bda.jpg">starting</span>
                          </div>
                         
                        </div>
                      </div>
                </div>

                <div class="col-lg-4 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://i.pinimg.com/736x/ff/5e/a9/ff5ea9547fab0a49b4b9d658361a2bda.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Suspendisse ut justo tem por, rutrum</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <div class="content d-flex justify-content-between">
                            <span class="py-1 px-3 fs-6">comment 6</span>
                            <span class="text-white bg-warning py-1 px-3 fs-6">starting</span>
                          </div>
                         
                        </div>
                      </div>
                </div>


            </div>
        </div>
    </div>


{/* ***************** tour */}


<div class="tour">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8">
                    <div class="card bg-dark p-4" >
                    {/* style="max-width: 540px;" */}
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="https://t4.ftcdn.net/jpg/05/54/35/21/360_F_554352133_mHao48Li63sDaZXO1jWOfEgdkkkIzCDn.jpg" class="img-fluid" alt="image"/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">World Of WarCraft</h5>
                              <span className="text-white">
  Tournament Begins: June 20, 2024 <br />
  Tournament Ends: July 01, 2023<br />
  Participants: 10 teams <br />
  Tournament Author: Admin <br />
</span>
                              <h6>Prizes: 1st place $2000, 2nd place: $1000, 3rd place: $500</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="col-lg-6 col-md-8">
                    <div class="card bg-dark p-4" >
                    {/* style="max-width: 540px;" */}
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="https://t4.ftcdn.net/jpg/05/54/35/21/360_F_554352133_mHao48Li63sDaZXO1jWOfEgdkkkIzCDn.jpg" class="img-fluid" alt="image"/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">World Of WarCraft</h5>
                              <span className="text-white">
  Tournament Begins: June 20, 2023 <br />
  Tournament Ends: July 01, 2024 <br />
  Participants: 10 teams <br />
  Tournament Author: Admin <br />
</span>
                              <h6>Prizes: 1st place $2000, 2nd place: $1000, 3rd place: $500</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Reviews  --> */}
    <div class="reviews">
        <div class="container">
            <div class="row py-5">
                <div class="heading text-center">
                    <button class="btn btn-danger text-uppercase text-white fs-6">new more</button>
                    <h3>Reviews Games</h3>
                </div>
            </div>
            <div class="row py-5">

                <div class="col-lg-3 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://img.freepik.com/premium-vector/gamer-monster-holding-games-controller-esports-logo-vector_607286-43.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                          <h5 class="card-title">Assasin’’s Creed</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <span class="text-white bg-warning fs-6">9.5</span>
                        </div>
                      </div>
                </div>

                <div class="col-lg-3 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://img.freepik.com/premium-vector/gamer-monster-holding-games-controller-esports-logo-vector_607286-43.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                          <h5 class="card-title">Doom</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <span class="text-white bg-danger fs-6">9.2</span>
                        </div>
                      </div>
                </div>


                <div class="col-lg-3 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://img.freepik.com/premium-vector/gamer-monster-holding-games-controller-esports-logo-vector_607286-43.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                          <h5 class="card-title">Overwatch</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <span class="text-white bg-warning fs-6">8.7</span>
                        </div>
                      </div>
                </div>

                <div class="col-lg-3 col-sm-10">
                    <div class="card border-0 ">
                        <img src="https://img.freepik.com/premium-vector/gamer-monster-holding-games-controller-esports-logo-vector_607286-43.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                          <h5 class="card-title">GTA</h5>
                          <p class="card-text py-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <span class="text-white bg-danger fs-6">9.1</span>
                        </div>
                      </div>
                </div>



            </div>
        </div>
    </div>
    {/* <!-- Reviews / --> */}









    {/* <!-- footer  --> */}
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="logo">
                        <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt="images"/>
                    </div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                    {/* <div class="images">
                        <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt=""/>
                    </div> */}
                </div>

                <div class="col-lg-4">

                    <div class="content bg-dark p-4">
                        <h5 class="text-white p-3 fs-4">Latest Posts</h5>
                        

                        <div class="title d-flex justify-content-between p-3">
                            <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt=""/>
                            <div class="titles">
                                <h6>June 21, 2018</h6>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>

                        <div class="title d-flex justify-content-between p-3">
                            <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt=""/>
                            <div class="titles">
                                <h6>June 21, 2018</h6>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>

                        <div class="title d-flex justify-content-between p-3">
                            <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt=""/>
                            <div class="titles">
                                <h6>June 21, 2018</h6>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>

        
                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="content bg-dark p-4">
                        <h5 class="text-white p-3 fs-4">Top Comments</h5>
                        

                        <div class="title d-flex justify-content-between p-3">
                            <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt="" class="rounded-circle"/>
                            <div class="titles">
                                <h6>James Smith </h6>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>

                        <div class="title d-flex justify-content-between p-3">
                            <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt="" class="rounded-circle"/>
                            <div class="titles">
                                <h6>James Smith </h6>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>

                        <div class="title d-flex justify-content-between p-3">
                            <img src="https://i.pinimg.com/originals/59/64/e3/5964e3f86b6c305267b5267374c6730f.png" alt="" class="rounded-circle"/>
                            <div class="titles">
                                <h6>James Smith </h6>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>

        
                    </div>

                </div>
                
            </div>
        </div>
    </footer>

    <div class="footerCopyright">
             <p>&copy; 2024 design and developed by <a href="#" class="developedBy">BlackHole Coding Crew</a>.</p>
        </div>
    {/* <!-- footer / --> */}




















{/* tour ****** */}











    </div>
  )
}

export default Home