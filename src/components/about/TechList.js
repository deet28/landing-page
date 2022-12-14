import React from 'react';
const TechList = () => {

return (
    <div className = "About-tech-main">
      
      <h2 className = "About-tech-title">
        Expertise
      </h2>
    <div className = "About-tech-grid-parent">
      <div className = "About-tech-grid dev">
        <span className = "dev-title">General</span>
        <p>
          Experienced in functional as well as OOP programming. Have worked in web and mobile app development, with both client-side and server-side frameworks. Have worked with API's and databases. 
        </p>
      </div>
      <div className = "About-tech-grid frame">
        <span className = "frame-title">Languages</span>
          <p>
            Experienced with Javascript, Typescript, HTML, and CSS. 
            Proficient with React framework, as well as React-Native for mobile app development. Proficient with Redux for managing global state in web applications. Some experience using Python and Django framework. 
          </p>  
      </div>  
      <div className = "About-tech-grid">
        <span className = "other-title">Other</span>
        <p>
          A degree in Psychology, with a focus on human perception and behavioral systems. Certifications in HTML/CSS, Javascript, React/React-Native, and Python/Django. 
        </p>  
      </div>  

    </div>
  </div>
  )
}
export default React.memo (TechList)

