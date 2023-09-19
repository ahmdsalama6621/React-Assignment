import React from "react"
import "./Contact.css"
function Contact() {
  return (
    <div className="contact">
        <h2>CONATCT SECTION </h2>
        <i className="fa-solid fa-star"></i>
      <div className="input">
      <form >
          <input type="text" placeholder="UserName"/>
          <input className="" type="number" placeholder="UserAge"/>
          <input className="" type="email" placeholder="UserEmail"/>
          <input className="" type="password" placeholder="UserPassword"/> 
        </form>
          <button>Send Massage</button>
      </div>
    </div>
  )
}
export default Contact;