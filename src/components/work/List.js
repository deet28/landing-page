import React from 'react';

const List=()=>{

  return (
    <div className="Work-list-main">
      
      <h1 className='Work-list-title'>Personal Projects</h1>

      <div className="Work-list-nest">
        <h1>Battleship</h1>
        <div className="Work-list-item">
          <div className="Work-list-item-nest">
            <p className="Work-list-p">
              This project is Battleship made with vanilla JS, HTML, and CSS.
              Users play against a computer that randomly places its ships and
              attacks the player. Computer attacks are decided using AI, which
              has the computer choosing its subsequent attacks based on the
              outcome of previous ones. Testing is implemented using Jest.
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

      <div className="Work-list-nest">
        <h1>Battleship</h1>
        <div className="Work-list-item">
          <div className="Work-list-item-nest">
            <p className="Work-list-p">
              This project is Battleship made with vanilla JS, HTML, and CSS.
              Users play against a computer that randomly places its ships and
              attacks the player. Computer attacks are decided using AI, which
              has the computer choosing its subsequent attacks based on the
              outcome of previous ones. Testing is implemented using Jest. This
              project makes use of factory functions to build out gameplay
              design.
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
  );
}

export default React.memo(List);