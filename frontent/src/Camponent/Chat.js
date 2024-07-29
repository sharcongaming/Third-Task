
import React, { useRef, useEffect } from 'react';
import "./Style/chat.css";

const Chat = () => {
  const openPopupBtnRef = useRef(null);
  const closePopupBtnRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const openPopup = () => {
      popupRef.current.style.display = 'block';
    };
  
    const closePopup = () => {
      popupRef.current.style.display = 'none';
    };
  
    const clickOutside = (event) => {
      if (event.target === popupRef.current) {
        popupRef.current.style.display = 'none';
      }
    };

    openPopupBtnRef.current.addEventListener('click', openPopup);
    closePopupBtnRef.current.addEventListener('click', closePopup);
    window.addEventListener('click', clickOutside);
  
    // Cleanup event listeners on component unmount
    return () => {
      openPopupBtnRef.current.removeEventListener('click', openPopup);
      closePopupBtnRef.current.removeEventListener('click', closePopup);
      window.removeEventListener('click', clickOutside);
    };
  }, []);
  
  return (
    <div className='first-div'>
      <div ref={openPopupBtnRef} id="openPopupBtn" className='chat-bot-first'>
        <i className="fa-solid fa-pen"></i>
      </div>
      <div ref={popupRef} id="popup" className="popup">
        <div className="popup-content">



          <span ref={closePopupBtnRef} id="closePopupBtn" className="close"><i class="fa-solid fa-xmark"></i></span>
          <div className='chat-first'>
            <div className='navigaton'>
            <div class="img_cont">
									<img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" class="rounded-circle user_img"/>
									<span class="online_icon"></span>
								</div>
                <div class="user_info">
									<span>ChatBot</span>
									<p>Ask me anything!</p>
								</div>

            </div>
    <div>
      
    </div>
    <div class="chat-container">
        
        <div class="chat-body" id="chatBody">
        <input type="text" id="userInput" placeholder="Type your message..."/>
        <div className='box'><i class="fas fa-location-arrow"></i></div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Chat;
