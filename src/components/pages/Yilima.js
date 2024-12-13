import React from 'react';
import "./Martha.css";
import Footer from '../Footer';
import ReactAudioPlayer from 'react-audio-player';

function Yilima() {
  return (
    <div>
      <>
        <div className='pic'>
          <img src="/images/yilima.jpg" alt="Artist" className='martha' />
        </div>
        <div className='container'>
          <h1>Wiliam Yilima</h1>
          <ul className='list'>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6391223/"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6391223/" target="_blank" rel="noopener noreferrer">Kwamba Yesu Yukaribu</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6391224/"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6391224/" target="_blank" rel="noopener noreferrer">Ndoto yangu</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="audio/ukowapiyilima.mpeg" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6391222"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6391222" target="_blank" rel="noopener noreferrer">Uko Wapi Mungu</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6391225/"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6391225/" target="_blank" rel="noopener noreferrer">Wingu</a>
            </li>
            <li className='list-items'>
              <ReactAudioPlayer className='play' controls src="" />
              <button
                className='download-btn'
                onClick={() => window.location.href = "https://skizatune.com/6391586"}
              >
                <img src='/images/download.png' alt='skiza' />
              </button>
              <a href="https://skizatune.com/6391586" target="_blank" rel="noopener noreferrer">Jehova</a>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Yilima;
