interface Props { title: string; artist: string; emoji: string; plays: string; }
export default function SongCard({ title, artist, emoji, plays }: Props) {
  return (
    <div className="bg-spotify-card hover:bg-spotify-darkgray p-4 rounded-lg cursor-pointer transition-all duration-200 group">
      <div className="relative mb-4">
        <div className="w-full aspect-square bg-gradient-to-br from-spotify-green to-blue-600 rounded-md flex items-center justify-center text-6xl">{emoji}</div>
        <button className="absolute bottom-2 right-2 w-10 h-10 bg-spotify-green rounded-full items-center justify-center text-black font-bold hidden group-hover:flex shadow-lg hover:scale-105">▶</button>
      </div>
      <p className="text-white font-semibold text-sm truncate">{title}</p>
      <p className="text-spotify-lightgray text-xs mt-1 truncate">{artist}</p>
      <p className="text-spotify-lightgray text-xs mt-1">{plays} plays</p>
    </div>
  );
}
