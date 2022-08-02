import Footer from '../footer/index.js'
import ContactForm from './ContactForm'

const Contact = () => {

  return (
  <>
    <div className = "Contact-main">
      <div className = "Contact-section-div">
        <div className = "Contact-section-nest">
          <div className = "Contact-title-div">
            <h1 className = "Contact-title">Let's talk!</h1>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
    
    <Footer/>
  </>
  )
}

export default Contact;