import { useState } from 'react'
import { Tweet } from "./Tweet" 


export function HomePage() {
    const [tweets, setTweets] = useState([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4'
  ])


  function createTweet() {
    setTweets([...tweets, "Tweet 5"])
  }
  

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
      })}

  <button 
  onClick={createTweet}
  style={{
    backgroundColor: '#8257e6',
    border : 0,
    padding : '12px 24px',
    color: '#FFF',
    borderRadius: '20px',
  }}
  >
    Adicionar tweets
  </button>


  </div>
  )
}
