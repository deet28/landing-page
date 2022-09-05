import React from 'react';
import {openSite} from './helpers'

const WorkList=()=>{

  return (
    <>
      <h1 className="Work-list-title">Professional Experience</h1>
      <div className="Work-list-main Work-professional">
        <div className="Work-list-nest Nest-professional">
          <div className="Work-list-nest-child">
            <h1>Language Library</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  Worked as a mobile app developer for Langauge Library, a
                  Language Learning App currently available in the app store.
                  During this role I worked with a team of developers in order to
                  create, test, and deploy code. We used Github to manage workflow and 
                  software implementation. Data storage was handled using a hybrid of 
                  Firebase and AWS. State management was handled using Redux and Redux-Sagas.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span onClick={openSite} id="App Site">
                  View App
                </span>
              </div>
              <div className="Work-list-tech">
                <span>React-Native</span>
                <span>Redux</span> <span>Sagas</span>
                <span>Firebase</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Work-list-nest Nest-professional">
          <div className="Work-list-nest-child">
            <h1>Freelance Work</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  Created a landing page for a catering company using React, which is currently being hosted on 
                  Netlify. I worked with the business owner to establish their aesthetic preferences, and we workshopped a layout. I then created this website based on our ideas using React, HTML, and CSS. This website is being hosted on Netlify.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span onClick={openSite} id="Freelance">
                  View Website
                </span>
              </div>
              <div className="Work-list-tech">
                <span>React</span>
                <span>HTML</span> <span>CSS</span>
                <span>Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="Work-list-title">Personal Projects</h1>
      <div className="Work-list-main">
        <div className="Work-list-nest">
          <div className="Work-list-nest-child">
            <h1>Notebooks</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  I created a note taking app using Python and Django. Users can
                  sign up, and are authenticated using Django's built-in user
                  authentication system. After signing in, users can create
                  books and write notes into specific books. Users only have
                  access to their own notes and books; this access is restricted
                  using a hybrid of mixins and redirects. Data is stored in AWS
                  RDS with Postgresql in order to persist user data.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span onClick={openSite} id="Note Site">
                  Visit Site
                </span>
                <span onClick={openSite} id="Note Site">
                  View Code
                </span>
              </div>
              <div className="Work-list-tech">
                <span>Python</span> <span>Django</span>
                <span>Postgresql</span> <span>AWS-RDS</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Work-list-nest">
          <div className="Work-list-nest-child">
            <h1>Battleship</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  I created a version of the board game Battleship. This project was made with vanilla JS, HTML, and CSS. Users
                  play against a computer that randomly places its ships and
                  attacks the player. Computer attacks are decided using AI,
                  which has the computer choosing its subsequent attacks based
                  on the outcome of previous ones. Testing is implemented using
                  Jest.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span onClick={openSite} id="Battle Site">
                  Visit Site
                </span>
                <span onClick={openSite} id="Battle Site">
                  View Code
                </span>
              </div>
              <div className="Work-list-tech">
                <span>Javascript</span> <span>Jest</span>
                <span>Webpack</span>
                <span>TDD</span> <span>AI</span>
                <span>HTML</span> <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Work-list-nest">
          <div className="Work-list-nest-child">
            <h1>'Readit'</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  I created a replica of one of my favorite websites (Reddit)
                  using React and Firebase. Anybody can create a user and log
                  into this website to post, like, and dislike content. User
                  posts and likes are tracked, and users can see what they've
                  liked and created after they are logged in. Data is stored and
                  retrieved from Firebase. User authentication is handled
                  through Firebase. Local state management is handled using
                  Redux.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span onClick={openSite} id="Read Site">
                  Visit Site
                </span>
              </div>
              <div className="Work-list-tech">
                <span>React</span> <span>Redux</span>
                <span>Javascript</span> <span>JSX</span>
                <span>CSS</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Work-list-nest">
          <div className="Work-list-nest-child">
            <h1>Where's Waldo?</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  I created Where's Waldo, an image searching game! This game is
                  created using Javascript and React. The app's state is managed
                  using Redux, and data is stored and retreived using Firebase.
                  Users can enter their name into an input after they have
                  successfully located and clicked on Waldo. These names, along
                  with the time it took to find Waldo, are then posted to a
                  leaderboard. The data from this leaderboard can be accessed
                  and viewed from the website.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span onClick={openSite} id="Waldo Site">
                  Visit Site
                </span>
                <span onClick={openSite} id="Waldo Site">
                  View Code
                </span>
              </div>
              <div className="Work-list-tech">
                <span>React</span> <span>Redux</span>
                <span>Javascript</span> <span>JSX</span>
                <span>CSS</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(WorkList);