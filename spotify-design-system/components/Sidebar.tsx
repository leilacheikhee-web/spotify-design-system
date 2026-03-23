interface Props { darkMode?: boolean; }
export default function Sidebar({ darkMode = true }: Props) {
  const playlists = ['Liked Songs', 'Daily Mix 1', 'Top Hits 2024', 'Chill Vibes', 'Workout Playlist'];
  return (
    <div className={`w-64 ${darkMode ? 'bg-black' : 'bg-gray-200'} h-full flex flex-col p-6 gap-6 transition-colors duration-300`}>
      <div>
        <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>🎵 Spotify</div>
        <nav className="flex flex-col gap-4">
          {[['🏠','Home'],['🔍','Search'],['📚','Your Library']].map(([icon, label]) => (
            <a key={label} href="#" className="flex items-center gap-4 text-spotify-lightgray hover:text-spotify-green transition-colors font-semibold">
              <span>{icon}</span><span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div>
        <hr className={`${darkMode ? 'border-gray-800' : 'border-gray-300'} mb-4`} />
        <div className="flex flex-col gap-3">
          {playlists.map(p => (
            <a key={p} href="#" className="text-spotify-lightgray hover:text-spotify-green text-sm transition-colors">{p}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
