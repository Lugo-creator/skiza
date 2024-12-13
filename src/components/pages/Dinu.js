import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Dinu() {
  return (
    <>
      <div className='pic'>
        <img src="/images/dinu.jpg" alt="Artist" className='martha' />
      </div>
      <div className='container'>
        <h1>Dinu Zeno</h1>
        <ul className='list'>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/kijitodinu.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390082/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390082/" target="_blank" rel="noopener noreferrer">Kijito cha Utakaso</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390089/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390089/" target="_blank" rel="noopener noreferrer">Kale Nilitembea</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390081"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390081" target="_blank" rel="noopener noreferrer">Kale Utakaso</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390080/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390080/" target="_blank" rel="noopener noreferrer">Kale Mwokozi</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390088"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390088" target="_blank" rel="noopener noreferrer">Kale Mteteeni Yesu</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390085"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390085" target="_blank" rel="noopener noreferrer">Kale Mteteeni Yesu</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390084"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390084" target="_blank" rel="noopener noreferrer">Kale Mteteeni Yesu</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390086"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390086" target="_blank" rel="noopener noreferrer">Kale Mteteeni Yesu</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390087"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390087" target="_blank" rel="noopener noreferrer">Kale Mteteeni Yesu</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390083"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390083/" target="_blank" rel="noopener noreferrer">Kale Mteteeni Yesu</a>    
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6390078/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6390078/" target="_blank" rel="noopener noreferrer">Twonane Milele</a>    
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Dinu;
