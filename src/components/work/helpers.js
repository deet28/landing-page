export const openSite = (e) => {
  if (e.target.id === "Note Site"){
    if (e.target.textContent === 'Visit Site'){
      window.open("https://david-turchetta-notebooks.herokuapp.com")
    } else {
      window.open("https://github.com/deet28/notes");
    }
  } else if (e.target.id === "Battle Site"){
    if (e.target.textContent === 'Visit Site'){
      window.open("https://deet28.github.io/battleship/dist/");
    } else {
      window.open("https://github.com/deet28/battleship");
    }
  } else if (e.target.id === "Read Site"){
    window.open('https://readit-10a97.web.app')
  } 
};
