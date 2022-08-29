import React from 'react';

const WorkList=()=>{

  return (
    <>
      <h1 className="Work-list-title">Personal Projects</h1>

      <div className="Work-list-main">
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
              <div className="Work-list-tech">
                <span>Javascript</span> <span>Jest</span>
                <span>HTML</span> <span>CSS</span>
                <span>Jest</span> <span>Webpack</span>
                <span>TDD</span> <span>AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Work-list-nest">
          <div className="Work-list-nest-child">
            <h1>Notebooks</h1>
            <div className="Work-list-item">
              <div className="Work-list-item-nest">
                <p className="Work-list-p">
                  This project was built with Python using the Django framework.
                  Users can sign up, and are authenticated using Django's user
                  authentication system. After signing in, users can create
                  books and write notes into specific books. Users only have
                  access to their own notes and books; this access is restricted
                  using a hybrid of mixins and redirects. This project uses Django's build in SQLite database. It is hosted on Heroku, using white noise for configuration.
                </p>
              </div>
              <div className="Work-list-tech">
                <span>Python</span> <span>Django</span>
                <span>HTML</span> <span>CSS</span>
                <span>Whitenoise</span> <span>Gunicorn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(WorkList);