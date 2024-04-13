import React, { useState } from 'react';
import Player from './Player'; 
import Playlist from './Playlist';
import song1 from '../components/Songs/song1.mp3';
import song2 from '../components/Songs/song2.mp3';
import song3 from '../components/Songs/song3.mp3';
import song4 from '../components/Songs/song4.mp3';
import song5 from '../components/Songs/song5.mp3';
import song8 from '../components/Songs/song8.mp3';
import song9 from '../components/Songs/song9.mp3';
import song11 from '../components/Songs/song11.mp3';
import song12 from '../components/Songs/song12.mp3';
import song13 from '../components/Songs/song13.mp3';
import song14 from '../components/Songs/song14.mp3';
import song15 from '../components/Songs/song15.mp3';


const MainSection = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playlistVisible, setPlaylistVisible] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const stopSong = () => {
    setIsPlaying(false);
  };

  const songs = [
    { src: song11, cover: '/untilifoundyou.jpg', description: 'Stephen Sanchez - Until I Found You', duration: '2:55' },
    { src: song2, cover: '/lover.jpg', description: 'Diljit Dosanjh - Lover', duration: '3:07' },
    { src: song12, cover: '/Bandana-1.jpg', description: 'Shub - Bandana', duration: '2:45' },
    { src: song3, cover: '/goddamn.jpg', description: 'Karan Aulja - God Damn', duration: '2:47' },
    { src: song13, cover: '/We-Rollin.jpg', description: 'One-Love', duration: '3:45' },
    { src: song4, cover: '/bato.jpg', description: 'Raghav x Asess - Teri Bato M', duration: '2:33' },
    { src: song5, cover: '/bol.jpg', description: 'Sajjan Adeeb - Mithe Bol', duration: '3:52' },
    { src: song14, cover: '/King-Shit.jpg', description: 'King-Shit', duration: '3:45' },
    { src: song8, cover: '/saal.jpg', description: 'Arjan Dhillon - Kuj Saal', duration: '3:31' },
    { src: song9, cover: '/cheri.jpg', description: 'Various Artists - Cheri Cheri', duration: '3:45' },

  ];
return (
  
  <div style={{ display: 'flex', paddingTop: '50px',paddingLeft:'20px', fontFamily: 'Roboto, sans-serif' }}>
    <div style={{marginRight:'40px',marginTop:'40px'}}className='flex flex-col gap-3'>
            <div className='font-bold text-gray-400'>Browse</div>
            <div className='flex flex-col pl-9 gap-2'>
              <li className='list-none font-semibold text-gray-700'>New Releases</li>
              <li className='list-none font-semibold text-gray-700'>Top Charts</li>
              <li className='list-none font-semibold text-gray-700'>Top Playlists</li>
              <li className='list-none font-semibold text-gray-700'>Podcasts</li>
              <li className='list-none font-semibold text-gray-700'>Top Artists</li>
              <li className='list-none font-semibold text-gray-700'>Radio</li>
            </div>
            <div className='font-bold text-gray-400'>Library</div>
            <div className='flex flex-col pl-9 gap-2'>
              <li className='list-none font-semibold text-gray-700'>History</li>
              <li className='list-none font-semibold text-gray-700'>Liked Songs</li>
              <li className='list-none font-semibold text-gray-700'>Albums</li>
              <li className='list-none font-semibold text-gray-700'>Podcasts</li>
              <li className='list-none font-semibold text-gray-700'>Artists</li>             
            </div>
          </div>
      
    <div style={{width: '20%', marginRight: '50px' }}>
      <button style={{
        marginTop:'35px',  
            marginBottom: '20px',
            width: '100%',
            padding: '10px',
            fontSize: '18px',
            backgroundColor: '#3BE4AE',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer', }} onClick={() => setPlaylistVisible(!playlistVisible)}>
        {playlistVisible ? 'Hide My Playlist' : 'My Playlist'}
      </button>
      {playlistVisible && <Playlist songs={songs} playSong={playSong} />}
    </div>
    <div style={{ width: '80%' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '40px', marginTop: '40px', fontWeight: 'bolder' }}>TRENDING NOW</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
        {songs.map((song, index) => (
          <div key={index} onClick={() => playSong(song)}>
            <img
              src={song.cover}
              alt="cover"
              style={{ width: '180px', height: '180px', cursor: 'pointer', borderRadius: '5px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{song.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Player currentSong={currentSong} isPlaying={isPlaying} stopSong={stopSong} />
  </div>
);
};

export default MainSection;
