// src/pages/Nametunes.js
import React, { useState } from 'react';
import './Nametunes.css'; // Import the CSS file

const Nametunes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const nametunes = [
        { toneCode: '6392805', songName: 'Alex', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392805' },
        { toneCode: '6392806', songName: 'Alice', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392806' },
        { toneCode: '6392844', songName: 'Amos', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392844' },
        { toneCode: '6392807', songName: 'Ann', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392807' },
        { toneCode: '6392845', songName: 'Anthony', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392845' },
        { toneCode: '6392846', songName: 'Aron', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392846' },
        { toneCode: '6392847', songName: 'Austin', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392847' },
        { toneCode: '6392848', songName: 'Barrack', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392848' },
        { toneCode: '6392849', songName: 'Benedict', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392849' },
        { toneCode: '6392808', songName: 'Betty', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392808' },
        { toneCode: '6392850', songName: 'Brian', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392850' },
        { toneCode: '6392809', songName: 'Caroline', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392809' },
        { toneCode: '6392851', songName: 'Charles', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392851' },
        { toneCode: '6392852', songName: 'Collins', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392852' },
        { toneCode: '6392853', songName: 'Cosmas', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392853' },
        { toneCode: '6392854', songName: 'Daniel', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392854' },
        { toneCode: '6392855', songName: 'David', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392855' },
        { toneCode: '6392856', songName: 'Dennis', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392856' },
        { toneCode: '6392857', songName: 'Derrick', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392857' },
        { toneCode: '6392810', songName: 'Diana', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392810' },
        { toneCode: '6392905', songName: 'Dorcas', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392905' },
        { toneCode: '6392858', songName: 'Elijah', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392858' },
        { toneCode: '6392812', songName: 'Emmanuel', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392812' },
        { toneCode: '6392859', songName: 'Ephraim', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392859' },
        { toneCode: '6392813', songName: 'Florence', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392813' },
        { toneCode: '6392860', songName: 'Francis', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392860' },
        { toneCode: '6392861', songName: 'Fred', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392861' },
        { toneCode: '6392862', songName: 'Gabriel', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392862' },
        { toneCode: '6392863', songName: 'George', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392863' },
        { toneCode: '6392866', songName: 'Jared', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392866' },
        { toneCode: '6392867', songName: 'Jesse', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392867' },
        { toneCode: '6392868', songName: 'Joel', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392868' },
        { toneCode: '6392819', songName: 'John', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392819' },
        { toneCode: '6392869', songName: 'Jonah', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392869' },
        { toneCode: '6392870', songName: 'Joshua', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392870' },
        { toneCode: '6392871', songName: 'Jude', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392871' },
        { toneCode: '6392872', songName: 'Justus', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392872' },
        { toneCode: '6392820', songName: 'Kevin', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392820' },
        { toneCode: '6392821', songName: 'Lawrence', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392812' },
        { toneCode: '6392873', songName: 'Mark', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392873' },
        { toneCode: '6392874', songName: 'Matthew', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392874' },
        { toneCode: '6392822', songName: 'Maureen', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392822' },
        { toneCode: '6392875', songName: 'Maxwell', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392875' },
        { toneCode: '6392876', songName: 'Micah', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392876' },
        { toneCode: '6392877', songName: 'Michael', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392877' },
        { toneCode: '6392878', songName: 'Nahum', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392878' },
        { toneCode: '6392925', songName: 'Nancy', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392925' },
        { toneCode: '6392926', songName: 'Naomi', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392926' },
        { toneCode: '6392823', songName: 'Nelson', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392823' },
        { toneCode: '6392879', songName: 'Nicholas', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392879' },
        { toneCode: '6392880', songName: 'Noah', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392880' },
        { toneCode: '6392881', songName: 'Oliver', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392881' },
        { toneCode: '6392882', songName: 'Owen', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392882' },
        { toneCode: '6392927', songName: 'Patricia', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392927' },
        { toneCode: '6392883', songName: 'Patrick', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392883' },
        { toneCode: '6392884', songName: 'Paul', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392884' },
        { toneCode: '6392928', songName: 'Pauline', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392928' },
        { toneCode: '6392885', songName: 'Philip', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392885' },
        { toneCode: '6392886', songName: 'Philomon', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392886' },
        { toneCode: '6392929', songName: 'Priscilla', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392929' },
        { toneCode: '6392931', songName: 'Rachael', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392931' },
        { toneCode: '6392887', songName: 'Raphael', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392887' },
        { toneCode: '6392930', songName: 'Rebecca', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392930' },
        { toneCode: '6392932', songName: 'Rose', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392932' },
        { toneCode: '6392933', songName: 'Sarah', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392933' },
        { toneCode: '6392934', songName: 'Susan', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392934' },
        { toneCode: '6392935', songName: 'Sylvia', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392935' },
        { toneCode: '6392824', songName: 'Terresa', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392824' },
        { toneCode: '6392936', songName: 'Velma', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392936' },
        { toneCode: '6392937', songName: 'Veronica', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392937' },
        { toneCode: '6392938', songName: 'Victoria', artistName: 'Best Name Tunes', link: 'https://skizatune.com/6392938' }
    ];

        // Filter nametunes based on the search query
    const filteredNametunes = nametunes.filter(
        (nametune) =>
            nametune.songName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            nametune.artistName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            nametune.toneCode.includes(searchQuery)
    );

    return (
        <div className='body'>
            <h1>Welcome to Nametunes!</h1>
            <h4>Find nametunes that match your liking here:</h4>
                        {/* Search Bar */}
            <div className="search-bar-wrapper">
                <input
                    type="text"
                    placeholder="Search by song name, artist name, or tone code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />
            </div>
            <div className="table-wrapper">
            <table className="nametune-table">
                <thead>
                    <tr>
                        <th>TONE CODE</th>
                        <th>SONG NAME</th>
                        <th>ARTIST NAME</th>
                        <th>LINK</th>
                    </tr>
                </thead>
                <tbody>
                      {filteredNametunes.length > 0 ? (
                            filteredNametunes.map((nametune, index) => (
                                <tr key={index}>
                                    <td>{nametune.toneCode}</td>
                                    <td>{nametune.songName}</td>
                                    <td>{nametune.artistName}</td>
                                    <td>
                                        <a href={nametune.link} target="_blank" rel="noopener noreferrer">
                                            {nametune.link}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="no-results">
                                    No matching nametunes found.
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Nametunes;

