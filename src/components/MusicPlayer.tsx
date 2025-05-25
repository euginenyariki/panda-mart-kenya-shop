
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Music, X } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample songs (you can replace these with actual song URLs)
  const songs = [
    {
      id: 1,
      title: "Upbeat Shopping",
      artist: "Panda Beats",
      src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder - replace with actual music
    },
    {
      id: 2,
      title: "Chill Vibes",
      artist: "Kenya Sounds",
      src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder - replace with actual music
    },
    {
      id: 3,
      title: "Happy Shopping",
      artist: "Nairobi Mix",
      src: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder - replace with actual music
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSong = (songIndex: number) => {
    setCurrentSong(songIndex);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.load();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(false);
  };

  return (
    <>
      {/* Floating Music Button */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isPlayerOpen ? (
          <Button
            onClick={() => setIsPlayerOpen(true)}
            className="rounded-full w-12 h-12 bg-panda-red hover:bg-red-700 shadow-lg animate-panda-bounce"
          >
            <Music size={20} />
          </Button>
        ) : (
          <Card className="w-80 shadow-xl border-2 border-panda-red">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-xl">🐼🎵</div>
                  <h3 className="font-bold text-panda-black">Panda Music</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlayerOpen(false)}
                >
                  <X size={16} />
                </Button>
              </div>

              {/* Current Song Info */}
              <div className="mb-4">
                <h4 className="font-semibold text-panda-black">{songs[currentSong].title}</h4>
                <p className="text-sm text-gray-600">{songs[currentSong].artist}</p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <Button
                  onClick={togglePlay}
                  className="rounded-full bg-panda-red hover:bg-red-700"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Song Selection */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-panda-black">Choose a song:</p>
                {songs.map((song, index) => (
                  <button
                    key={song.id}
                    onClick={() => changeSong(index)}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      currentSong === index
                        ? 'bg-panda-red text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-panda-black'
                    }`}
                  >
                    <div className="font-medium">{song.title}</div>
                    <div className="text-sm opacity-75">{song.artist}</div>
                  </button>
                ))}
              </div>

              {/* Audio Element */}
              <audio
                ref={audioRef}
                src={songs[currentSong].src}
                loop
                onEnded={() => setIsPlaying(false)}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
