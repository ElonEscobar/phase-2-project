import React, { useEffect, useState } from "react"
import img from "../image/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const apiUrl = " http://localhost:3000/users"
  useEffect(()=>{
    fetch(apiUrl)
    .then(res => res.json())
    .then(jsonF => console.log(jsonF))
  },[])

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  function handleName(e){
    setUserDetails({...userDetails, name: e.target.value})
  }
  function handleMail(e){
    setUserDetails({...userDetails, email: e.target.value})
  }
  function handleSubject(e){
    setUserDetails({...userDetails, subject: e.target.value})
  }
  function handleMessage(e){
    setUserDetails({...userDetails, message:e.target.value})
  }

  function handleUserSubmit(e){
    e.preventDefault();
    console.log(userDetails)
    setIsSubmitted(true);
    fetch(apiUrl, {
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(userDetails)
    })

  }
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Help & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleUserSubmit}>
            {isSubmitted ? <div>{`Thank you ${userDetails.name}, Your response has been recorded. We'll get back to you in a few minutes.`}</div> : null}
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' value={userDetails.name} onChange={handleName}/>
              <input type='text' placeholder='Email' value={userDetails.email} onChange={handleMail}/>
            </div>
            <input type='text' placeholder='Subject' value={userDetails.subject} onChange={handleSubject}/>
            <textarea cols='30' rows='10'value={userDetails.message} onChange={handleMessage}></textarea>
            <button type="submit">Submit Request</button>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact