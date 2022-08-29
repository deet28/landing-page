import TechList from './TechList'
import Footer from '../footer/index.js';
import { openSite } from './helpers'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="About-main">
        <div className="About-section-div">
          <div className="About-section-nest">
            <div className="About-title-div">
              <h1 className="About-title">About</h1>
            </div>
            <div className="About-section-p-div">
              <p className="About-section">
                I am a web/mobile app software engineer. In my time in software
                production I've worked on freelance projects for various
                clients. I moved into working on mobile apps more recently when
                I started working for a language learning app that is currently
                published in the app store.
              </p>
              <p className="About-section">
                I have professional experience using a hybrid of server-side and client-side languages and frameworks. I have personal experience building out and deploying mobile apps and websites. 
              </p>
              <p className="About-section">
                My journey in web development took a slight detour when I went
                to school for psychology. Here, my primary focus was to learn
                more about human perception and behavior. The knowledge that I
                picked up in university helps to guide the decisions I make when
                considering web design and software implementation. My goal is
                always to strike the perfect balance between aesthically
                pleasing and approachable.
              </p>
            </div>
            <div className="About-section-p-div">
              <TechList />
            </div>
            <div className="About-section-about-div">
              <p className="About-section">
                With several projects behind me, I am looking for new ways to
                grow in this industry.
              </p>
              <Link to="/contact" className="Link-style">
                <span className="About-talk">Let's talk!</span>
              </Link>
            </div>
            <div className="About-contact-section">
              <ul className="About-contact-links">
                <li className="About-contact-link" onClick={openSite}>
                  LinkedIn
                </li>
                <li className="About-contact-link" onClick={openSite}>
                  Github
                </li>
                <li className="About-contact-link" onClick={openSite}>
                  Codepen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default About;