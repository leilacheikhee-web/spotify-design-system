import { useState } from 'react';
export default function Player() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(30);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-darkgray border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3 w-64">
          <div className="w-14 h-14 bg-spotify-green rounded flex items-center justify-center text-2xl">🎵</div>
          <div>
            <p className="text-white text-sm font-semibold">Blinding Lights</p>
            <p className="text-spotify-lightgray text-xs">The Weeknd</p>
          </div>
          <button className="text-spotify-lightgray hover:text-spotify-green ml-2">♥</button>
        </div>
        <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
          <div className="flex items-center gap-6">
            <button className="text-spotify-lightgray hover:text-white text-lg">⇄</button>
            <button className="text-spotify-lightgray hover:text-white text-2xl">⏮</button>
            <button onClick={() => setPlaying(!playing)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
              {playing ? '⏸' : '▶'}
            </button>
            <button className="text-spotify-lightgray hover:text-white text-2xl">⏭</button>
            <button className="text-spotify-lightgray hover:text-white text-lg">↻</button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-spotify-lightgray">1:23</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer" onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setProgress(Math.round(((e.clientX - rect.left) / rect.width) * 100)); }}>
              <div className="h-1 bg-white rounded-full hover:bg-spotify-green" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-spotify-lightgray">3:20</span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-48 justify-end">
          <span className="text-spotify-lightgray text-sm">🔊</span>
          <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-24 accent-spotify-green" />
        </div>
      </div>
    </div>
  );
}
