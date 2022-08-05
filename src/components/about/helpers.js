export const openSite = (e) => {
  if (e.target.textContent === 'LinkedIn'){
     window.open("https://www.linkedin.com/in/davidturchetta/")
  } else if (e.target.textContent === 'Github'){
      window.open("https://www.github.com/deet28")
  } else if (e.target.textContent === 'Codepen'){
      window.open('https://www.codepen.io/deet28')
  } 
}