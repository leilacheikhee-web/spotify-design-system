import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
const stats = [
  { label: 'Monthly Listeners', value: '52.4M', icon: '👥', color: 'from-green-600 to-green-400' },
  { label: 'Total Streams', value: '8.2B', icon: '▶️', color: 'from-blue-600 to-blue-400' },
  { label: 'Followers', value: '12.1M', icon: '❤️', color: 'from-purple-600 to-purple-400' },
  { label: 'Playlists', value: '24.3K', icon: '🎵', color: 'from-orange-600 to-orange-400' },
];
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-spotify-black overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-24 px-8 py-6">
        <h1 className="text-3xl font-bold text-white mb-8">Artist Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6`}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-white opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-spotify-darkgray rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Top Tracks This Week</h2>
          {['Blinding Lights','Save Your Tears','Starboy','The Hills','Can\'t Feel My Face'].map((track, i) => (
            <div key={track} className="flex items-center gap-4 py-3 border-b border-gray-700 last:border-0 hover:bg-gray-700 px-2 rounded cursor-pointer group">
              <span className="text-spotify-lightgray w-4 text-sm">{i + 1}</span>
              <div className="w-10 h-10 bg-spotify-green rounded flex items-center justify-center">🎵</div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{track}</p>
                <p className="text-spotify-lightgray text-xs">The Weeknd</p>
              </div>
              <span className="text-spotify-lightgray text-sm">3:2{i}</span>
            </div>
          ))}
        </div>
        <div className="bg-spotify-darkgray rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Design Tokens</h2>
          <div className="grid grid-cols-5 gap-3">
            {[['#1DB954','Green'],['#191414','Black'],['#282828','Dark Gray'],['#535353','Gray'],['#B3B3B3','Light Gray']].map(([color, name]) => (
              <div key={name} className="text-center">
                <div className="w-full h-16 rounded-lg mb-2 border border-gray-700" style={{ backgroundColor: color }} />
                <p className="text-white text-xs font-semibold">{name}</p>
                <p className="text-spotify-lightgray text-xs">{color}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Player />
    </div>
  );
}
