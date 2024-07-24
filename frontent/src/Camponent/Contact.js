import React from 'react'
import ChatBox from './ChatBox'

const Contact = () => {
  return (
    <div>
 <div className='contact-section'>

<div  class="contact" id="contact">

                  <h2 class="heading" > Contact <span>Me</span></h2>
                  Say Hello..!
Fill up this form to reach our stunning Streamit team and click on send message.

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

<ChatBox/>

    </div>
  )
}

export default Contact