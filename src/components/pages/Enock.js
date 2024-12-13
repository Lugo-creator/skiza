import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Enock() {
  return (
    <>
      <div className='pic'>
        <img src="/images/jonas.jpg" alt="Artist" className='martha' />
      </div>
      <div className='container'>
        <h1>Enock Jonas</h1>
        <ul className='list'>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391128/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391128/" target="_blank" rel="noopener noreferrer">Amani ya moyo wangu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/sikuyanguenock.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391294/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391294/" target="_blank" rel="noopener noreferrer">Ipo siku yangu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391297"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391297" target="_blank" rel="noopener noreferrer">Moyo wangu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391129/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391129/" target="_blank" rel="noopener noreferrer">Bado naendelea chorus</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391133"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391133" target="_blank" rel="noopener noreferrer">Kwa uzuri wako</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391138"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391138" target="_blank" rel="noopener noreferrer">Yahweh</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls autoPlay src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391290"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391290" target="_blank" rel="noopener noreferrer">Happy Birthday Chorus</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls autoPlay src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391295"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391295" target="_blank" rel="noopener noreferrer">Kuwafunga mdomo chorus</a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Enock;
