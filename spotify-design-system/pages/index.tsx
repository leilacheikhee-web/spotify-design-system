import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import SongCard from '../components/SongCard';
import { useState } from 'react';

const songs = [
  { title: 'Blinding Lights', artist: 'The Weeknd', emoji: '🌃', plays: '3.2B' },
  { title: 'Shape of You', artist: 'Ed Sheeran', emoji: '💚', plays: '3.5B' },
  { title: 'Stay', artist: 'Justin Bieber', emoji: '🎵', plays: '2.1B' },
  { title: 'Levitating', artist: 'Dua Lipa', emoji: '✨', plays: '1.8B' },
  { title: 'Peaches', artist: 'Justin Bieber', emoji: '🍑', plays: '1.5B' },
  { title: 'Good 4 U', artist: 'Olivia Rodrigo', emoji: '💜', plays: '1.3B' },
];

interface Props { darkMode: boolean; setDarkMode: (v: boolean) => void; }

export default function Home({ darkMode, setDarkMode }: Props) {
  const [search, setSearch] = useState('');
  const filtered = songs.filter(s => s.title.toLowerCase().includes(search.toLowerCase()) || s.artist.toLowerCase().includes(search.toLowerCase()));
  
  const bg = darkMode ? 'bg-spotify-black' : 'bg-gray-100';
  const text = darkMode ? 'text-white' : 'text-gray-900';
  const cardBg = darkMode ? 'bg-spotify-darkgray' : 'bg-white';

  return (
    <div className={`flex h-screen ${bg} overflow-hidden transition-colors duration-300`}>
      <Sidebar darkMode={darkMode} />
      <main className={`flex-1 overflow-y-auto pb-24 ${text}`}>
        <div className={`sticky top-0 z-10 ${darkMode ? 'bg-spotify-black' : 'bg-gray-100'} bg-opacity-90 px-8 py-4 flex items-center justify-between transition-colors duration-300`}>
          <div className="flex gap-2">
            <button className={`w-8 h-8 ${darkMode ? 'bg-black' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>←</button>
            <button className={`w-8 h-8 ${darkMode ? 'bg-black' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>→</button>
          </div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search songs..." value={search} onChange={e => setSearch(e.target.value)} className={`${darkMode ? 'bg-spotify-darkgray text-white' : 'bg-white text-gray-900'} px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-spotify-green w-64`}/>
            <button onClick={() => setDarkMode(!darkMode)} className={`${darkMode ? 'bg-spotify-darkgray text-white' : 'bg-gray-300 text-gray-900'} px-4 py-2 rounded-full text-sm hover:opacity-80 transition-all`}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <button className="bg-spotify-green text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105">Profile</button>
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="bg-gradient-to-r from-purple-900 via-spotify-green to-blue-900 rounded-2xl p-8 mb-8 flex items-center gap-6">
            <div className="text-8xl">🎵</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-white">Featured Playlist</p>
              <h1 className="text-5xl font-black mb-2 text-white">Today's Top Hits</h1>
              <p className="text-gray-200 mb-4">The most played songs right now</p>
              <button className="bg-spotify-green text-black px-8 py-3 rounded-full font-bold hover:scale-105">▶ Play</button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{search ? `Results for "${search}"` : 'Popular Right Now'}</h2>
            <a href="#" className="text-spotify-green text-sm font-bold">See all</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {filtered.map(song => <SongCard key={song.title} {...song} darkMode={darkMode} />)}
          </div>

          <h2 className="text-2xl font-bold mb-4">New Releases</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Flowers', artist: 'Miley Cyrus', emoji: '🌸', plays: '800M' },
              { title: 'Anti-Hero', artist: 'Taylor Swift', emoji: '🦸', plays: '900M' },
              { title: 'As It Was', artist: 'Harry Styles', emoji: '🌊', plays: '1.1B' },
              { title: 'Heat Waves', artist: 'Glass Animals', emoji: '🌊', plays: '700M' },
              { title: 'Golden Hour', artist: 'JVKE', emoji: '🌅', plays: '500M' },
              { title: 'Unholy', artist: 'Sam Smith', emoji: '🙏', plays: '600M' },
            ].map(song => <SongCard key={song.title} {...song} darkMode={darkMode} />)}
          </div>
        </div>
      </main>
      <Player />
    </div>
  );
}
