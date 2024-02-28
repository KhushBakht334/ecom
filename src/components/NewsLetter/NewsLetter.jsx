import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='text' placeholder='your id is'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter