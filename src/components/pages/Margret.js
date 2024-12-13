import React from 'react';
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Margret() {
  return (
    <>
      <div className='pic'>
        <img src="/images/margret.jpg" alt="Artist" className='martha' />
      </div>
      <div className='container'>
        <h1>Margret James</h1>
        <ul className='list'>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391289/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391289/" target="_blank" rel="noopener noreferrer">Unaweza verse1</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391279/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391279/" target="_blank" rel="noopener noreferrer">Ungehesabu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391278"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391278" target="_blank" rel="noopener noreferrer">Unifundishe</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391283/"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391283/" target="_blank" rel="noopener noreferrer">Jina langu</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391286"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391286" target="_blank" rel="noopener noreferrer">Ungehesabu part 2</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391288"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391288" target="_blank" rel="noopener noreferrer">Unaweza Chorus</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391285"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391285" target="_blank" rel="noopener noreferrer">Jina langu part 2</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391287"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391287" target="_blank" rel="noopener noreferrer">Ungehesabu part 1</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="/audio/magretJamesUnaweza.mpeg" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391277"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391277" target="_blank" rel="noopener noreferrer">Unaweza</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391281"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391281" target="_blank" rel="noopener noreferrer">Wewe ni njia</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391280"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391280" target="_blank" rel="noopener noreferrer">Nimekuona Bwana</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391282"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391282" target="_blank" rel="noopener noreferrer">Umenikumbuka</a>
          </li>
          <li className='list-items'>
            <ReactAudioPlayer className='play' controls src="" />
            <button
              className='download-btn'
              onClick={() => window.location.href = "https://skizatune.com/6391284"}
            >
              <img src='/images/download.png' alt='skiza'/>
            </button>
            <a href="https://skizatune.com/6391284" target="_blank" rel="noopener noreferrer">Jina langu part 2</a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Margret;
