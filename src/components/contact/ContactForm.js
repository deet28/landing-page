
const ContactForm = () => {

  return (
  <form className = "Contact-form-main">
    
    <div className = "Contact-form-div">
        
        <div className = "Form-nest-div">
          <label 
            htmlFor = "form" 
            className = "Form-label">
            First Name <span className = "required"> * </span> 
          </label>
          <input 
            type = "text" 
            placeholder = "First Name" 
            className = "Form-input" 
            name = "First Name"
            required/>
        </div>
      
        <div className = "Form-nest-div">
          <label 
            htmlFor = "form" 
            className = "Form-label">
            Last Name
          </label>
          <input 
            type = "text" 
            placeholder = "Last Name" 
            className = "Form-input" 
            name = "Last Name"/>
        </div>
      
        <div className = "Form-nest-div">
          <label 
            htmlFor = "form" 
            className = "Form-label">
            Email <span className = "required"> * </span> 
          </label>
          <input 
            type = "text" 
            placeholder = "Email" 
            className = "Form-input" 
            name = "Email"
            required/>
        </div>
      
        <div className = "Form-nest-div">
          <label 
            htmlFor = "form" 
            className = "Form-label">
            Phone
          </label>
          <input 
            type = "text" 
            placeholder = "Phone Number" 
            className = "Form-input" 
            name = "Phone"/>
        </div>
      </div>
      
      
      <div className = "Form-message-div">
        
        <label 
          className = "Form-label" 
          htmlFor = "textarea">
            Message <span className = "required">*</span>
        </label>
        
        <textarea 
            type = "text" 
            className = "Form-message" 
            rows = "12" 
            name = "Message"
            required
        />
      </div>

      <div className = "Form-submit-div">
          <button 
            type = "submit" 
            className = "Form-submit">
            Submit
          </button>
      </div>
    </form>
  )
}

export default ContactForm;