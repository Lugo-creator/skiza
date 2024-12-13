import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Danken() {
  return (
    <>
      <div className='pic'>
        <img src="/images/boaz.jpg" alt="Artist" className='martha' />
      </div>
      <div className='container'>
        <h1>Boaz Danken</h1>
        <ul className='list'>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/haufananishwiboaz.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390059/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390059/" target="_blank" rel="noopener noreferrer">Haufananishwi</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/jinaboaz.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390061/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390061/" target="_blank" rel="noopener noreferrer">Jina la Yesu Linatisha</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/kumbukumbuboaz.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390068"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390068" target="_blank" rel="noopener noreferrer">Kumbukumbu Langu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/sitaachaboaz.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390066/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390066/" target="_blank" rel="noopener noreferrer">Sitaacha Kumsubiri Mungu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/haleluhyaboaz.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390058"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390058" target="_blank" rel="noopener noreferrer">Haleluhya Mungu</a>
          </li>
          {/* Add other list items as needed */}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Danken;
