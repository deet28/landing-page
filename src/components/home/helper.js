
export const changeWord = (word, setWord) => {
  if (word === 'web developer'){
    setWord('designer')
  } else if (word === 'designer'){
    setWord('problem solver')
  } else if (word === 'problem solver'){
    setWord('cat dad')
  } else {
    setWord('web developer')
  }
}