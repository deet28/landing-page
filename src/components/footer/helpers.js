export const openSite = (e) => {
  if (e.target.id === "Linkedin") {
    window.open("https://www.linkedin.com/in/davidturchetta/");
  } else if (e.target.id === "Github") {
    window.open("https://www.github.com/deet28");
  } else if (e.target.id === "Resume") {
    window.open("https://1drv.ms/b/s!Agq4Yt0vQFTGgQpe0U_av0E2FN2_?e=wNPKod");
  } 
  else if (e.target.id === "Code"){
    window.open("https://github.com/deet28/landing-page")
  }
};
