export default function Sidebar() {
  const playlists = ['Liked Songs', 'Daily Mix 1', 'Top Hits 2024', 'Chill Vibes', 'Workout Playlist'];
  return (
    <div className="w-64 bg-black h-full flex flex-col p-6 gap-6">
      <div>
        <div className="text-2xl font-bold text-white mb-8">🎵 Spotify</div>
        <nav className="flex flex-col gap-4">
          {[['🏠','Home'],['🔍','Search'],['📚','Your Library']].map(([icon, label]) => (
            <a key={label} href="#" className="flex items-center gap-4 text-spotify-lightgray hover:text-white transition-colors font-semibold">
              <span>{icon}</span><span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div>
        <hr className="border-gray-800 mb-4" />
        <div className="flex flex-col gap-3">
          {playlists.map(p => (
            <a key={p} href="#" className="text-spotify-lightgray hover:text-white text-sm transition-colors">{p}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
