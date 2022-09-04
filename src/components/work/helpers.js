export const openSite = (e) => {
  if (e.target.id === "Freelance"){
    window.open("https://shuckologist.netlify.app");
  }
  else if (e.target.id === "Note Site"){
    if (e.target.textContent === 'Visit Site'){
      window.open("https://david-turchetta-notebooks.herokuapp.com")
    } else {
      window.open("https://github.com/deet28/notes");
    }
  } 
  else if (e.target.id === "Battle Site"){
    if (e.target.textContent === 'Visit Site'){
      window.open("https://deet28.github.io/battleship/dist/");
    } else {
      window.open("https://github.com/deet28/battleship");
    }
  } 
  else if (e.target.id === "Read Site"){
    window.open('https://readit-10a97.web.app')
  } 
  else if (e.target.id === "Waldo Site"){
    if (e.target.textContent === "Visit Site"){
      window.open("https://find-waldo-2e955.web.app");
    } else {
      window.open("https://github.com/deet28/Wheres-Waldo")
    }
  } 
  else if (e.target.textContent === "View App"){
    window.open("https://apps.apple.com/us/app/language-library/id1588840688")
  }
};
