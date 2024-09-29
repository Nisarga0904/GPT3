import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
     <div className='gpt3__possibility-image'>
      <img src={possibilityImage} alt="possibility"></img>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>Possibility are beyond your imagination.</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing.Not thoughts all excercise blessing.Indulgence everything joy alteration boisterous the attachment.Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;