import React, { useState } from 'react';
import '../App.css';
import './HeroSection.css';
import './Cards.css';
import data from './data';
import songs from './songs';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const HeroSection = ({ setResults }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchSong = (event) => {
        setSearchTerm(event.target.value);
    };

    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
        );
    });

    let songSearch = songs.songData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
        );
    });

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className='Hbody'>
            <div className='search'>
                <input
                    type='text'
                    placeholder="Search for songs and artists"
                    value={searchTerm}
                    onChange={searchSong}
                />
                <i className='fas fa-search' />
            </div>
            <div className='heading-section'>
                <h1 className='text-2xl font-bold text-center text-gray-1000'>
                    FIND YOUR FAVOURITE SONGS TO ENTERTAIN YOUR CALLERS
                </h1>
            </div>

            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideLeft} />
                <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <h2 className='text-3xl font-bold text-left text-gray-800'>
                        Featured Artists
                    </h2>
                    {dataSearch.map((item, index) => (
                        <div className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' key={index}>
                            <div className='cards__wrapper'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to={item.path}>
                                        <figure className='cards__item__pic-wrap' data-category={item.label}>
                                            <img src={item.src} alt='Song_Item' className='cards__item__img' />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>{item.text}</h5>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideRight} />
            </div>

            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideLeft} />
                <div id="slide" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <h3 className='text-3xl font-bold text-left text-gray-800'>
                        Featured Songs
                    </h3>
                    {songSearch.map((song, index) => (
                        <div className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' key={index}>
                            <div className='cards__wrapper'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to={song.path}>
                                        <figure className='cards__item__pic-wrap' data-category={song.song}>
                                            <img src={song.src} alt='Song_Item' className='cards__item__img' />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>{song.artist}</h5>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideRight} />
            </div>

            <div className="nametunes-section py-10">
                <h3 className="text-3xl font-bold text-center text-gray-800">Explore Nametunes</h3>
                <div className="nametunes-button-container text-center mt-5">
                    <Link to="/Nametunes">
                        <img src="/images/nametunes.jpeg" alt="Nametune" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
