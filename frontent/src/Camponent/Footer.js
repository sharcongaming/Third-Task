import React from 'react'
  import "../Camponent/Style/footer.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


const Footer = () => {
  return (
   
        <div className='screen'> 
<footer className='footer-page'>
<div className='firstfooter'>
    <div className='row'>
      <div className='footer-col'>
        <h4>Link</h4>
        <ul>
          <li> <a href='#'>About us</a></li>
          <li> <a href='#'>Our Service</a></li>
          <li> <a href='#'>Privacy Policy</a></li>
          <li> <a href='#'>Affliate Programe</a></li>
        </ul>

      </div>
      <div className='footer-col'>
        <h4>Contact Us</h4>
        <ul>
          <li> <a href='#'>blackhole@gmail.com</a></li>
          <li> <a href='#'>9856*******</a></li>
          <li> <a href='#'>MotilalNagar</a></li>
        </ul>

      </div>
      <div className='footer-col'>
        <h4>Company</h4>
        <ul>
          <li> <a href='#'>Faq</a></li>
          <li> <a href='#'>Shipping</a></li>
          <li> <a href='#'>return</a></li>
          <li> <a href='#'>Affliate Programe</a></li>
        </ul>

      </div>

      <div className='footer-col'>
        <h4>Fallow us</h4>
        <div className='socail-links'>
          <li> <a href='#'><i class="fab  fa-facebook-f"></i></a></li>
          <li> <a href='#'><i class="fab  fa-twitter"></i></a></li>
          <li> <a href='#'><i class="fab  fa-instagram"></i></a></li>
          <li> <a href='#'><i class="fab  fa-linkedin-in"></i></a></li>

      
        </div>
        

      </div>

    </div>

  </div>

</footer>
<div class="footerCopyright">
             <p>&copy; 2024 design and developed by <a href="#" class="developedBy">BlackHole Coding Crew</a>.</p>
             
        </div>
</div>

  




  )
}

export default Footer