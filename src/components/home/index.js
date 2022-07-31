import React, {useState, useEffect} from 'react'
import { changeWord } from './helper'
const Home = () => {

  const [word, setWord] = useState('web developer');
  
  const [changeOne, setChangeOne] = useState(true);
  const [changeTwo, setChangeTwo] = useState(false)

   useEffect(()=>{
    setTimeout(()=>{
      changeWord(word,setWord)
      setChangeOne(false)
      
    },3000)
    setChangeTwo(true)
   },[changeOne])

   useEffect(()=>{
    setTimeout(()=>{
      changeWord(word,setWord)
      setChangeTwo(false)
      
    },3000)
    setChangeOne(true)
   },[changeTwo])

  return (
    <div className = "Home-main">
      
      <div className = "Home-title-div">
        <h2 className = {"Home-title Home-name"}>
          I'm David
        </h2>
        <h2 className = "Home-title Home-typed-word">{word}</h2>
      </div>
      
    </div>
  )
}

export default Home; 