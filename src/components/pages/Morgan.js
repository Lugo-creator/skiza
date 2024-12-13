import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Morgan() {
  return (
    <div>
      <>
        <div className='pic'>
          <img src="/images/mogan.jpg" alt="Artist" className='martha' />
        </div>
        <div className='container'>
          <h1>Modest Morgan</h1>
          <ul className='list'>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="/audio/simbawayudamogan.mpeg" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6390205/"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6390205/" target="_blank" rel="noopener noreferrer">Simba wa Yuda</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6390206/"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6390206/" target="_blank" rel="noopener noreferrer">Yesu Ni Upendo</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6390201"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6390201" target="_blank" rel="noopener noreferrer">Hakuna Kama Wewe</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6390203/"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6390203/" target="_blank" rel="noopener noreferrer">Yuko Njiani</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6390202"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6390202" target="_blank" rel="noopener noreferrer">Masiah Masiah Yahwe</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6390204"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6390204" target="_blank" rel="noopener noreferrer">Naburudika</a>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Morgan;
