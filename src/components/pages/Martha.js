import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Martha() {
  return (
    <>
      <div className='pic'>
        <img src="/images/matha.jpg" alt="Artist" className='martha' />
      </div>
      <div className='container'>
        <h1>Martha Mwaipaja</h1>
        <ul className='list'>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/naionamwaipaja.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391184/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391184/" target="_blank" rel="noopener noreferrer">Naiona Kesho</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/mamboyamebadilikamwaipaja.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390120/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390120/" target="_blank" rel="noopener noreferrer">Mambo Yamebadilika</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/najulikanamwaipaja.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390653"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390653" target="_blank" rel="noopener noreferrer">Najulikana Mbinguni</a>  
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/sipiganagimwaipaja.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391205/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391205/" target="_blank" rel="noopener noreferrer">Sipiganagi Mwenyewe</a>  
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/adui-ajui-chorus.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391735"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391735" target="_blank" rel="noopener noreferrer">Adui ajui chorus</a>  
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Martha;




