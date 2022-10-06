import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./footer.css"

const Footer = () => {
    // get email input and display as element
    const [userEmail, setUserEmail] = useState({email:""})
    function handleEmails(e){
      setUserEmail({...userEmail, email: e.target.value})
    }
    function handleSubscribe(){
      console.log(userEmail)
      alert("Subscribed !!!")

    }
    function handleContact(){
      <Routes>
          <Route exact path='/contact'/>
      </Routes>
    }
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Any Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5' onClick={handleContact}>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input value={userEmail.email}  onChange={handleEmails} type='text' placeholder='Email Address' />
                <button onClick={handleSubscribe} >Subscribe</button>
              </div>
            </div>
          </div>

         
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 RealEstateApp. Designed By d@n.</span>
      </div>
    </>
  )
}

export default Footer