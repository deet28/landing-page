import React from 'react';

const WorkList=()=>{

  return (
    <>
      <h1 className="Work-list-title">Personal Projects</h1>
      <div className="Work-list-main">
        <div className="Work-list-nest">
          <div className="Work-list-nest-child">
            <h1>Notebooks</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  Created a note taking app with a built-in database. This
                  project was built with Python using the Django framework.
                  Users can sign up, and are authenticated using Django's user
                  authentication system. After signing in, users can create
                  books and write notes into specific books. Users only have
                  access to their own notes and books; this access is restricted
                  using a hybrid of mixins and redirects. This project uses
                  Django's build in SQLite database. It is hosted on Heroku,
                  using white noise for configuration.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span>Visit Site</span>
                <span>View Code</span>
              </div>
              <div className="Work-list-tech">
                <span>Python</span> <span>Django</span>
                <span>HTML</span> <span>CSS</span>
                <span>Whitenoise</span>
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
                  Created a version of Battleship to keep youths in adolescent
                  psych unit busy while they had limited access to technology.
                  This project was made with vanilla JS, HTML, and CSS. Users
                  play against a computer that randomly places its ships and
                  attacks the player. Computer attacks are decided using AI,
                  which has the computer choosing its subsequent attacks based
                  on the outcome of previous ones. Testing is implemented using
                  Jest.
                </p>
              </div>
              <div className="Work-list-buttons">
                <span>Visit Site</span>
                <span>View Code</span>
              </div>
              <div className="Work-list-tech">
                <span>Javascript</span> <span>Jest</span>
                <span>HTML</span> <span>CSS</span>
                <span>Webpack</span>
                <span>TDD</span> <span>AI</span>
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
                <span>Visit Site</span>
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