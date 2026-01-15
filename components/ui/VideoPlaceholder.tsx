'use client';

interface VideoPlaceholderProps {
  title?: string;
  thumbnail?: string;
  badge?: string;
  duration?: string;
  videoUrl?: string;
  accentColor?: 'gold' | 'purple' | 'green';
}

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

export default function VideoPlaceholder({
  title = 'Training Video',
  thumbnail,
  badge,
  duration,
  videoUrl = '#',
  accentColor = 'gold',
}: VideoPlaceholderProps) {
  const accentClasses = {
    gold: {
      badge: 'bg-gold-500 text-navy-950',
      glow: 'from-gold-500/20 to-gold-600/20',
      button: 'from-gold-400 to-gold-600',
    },
    purple: {
      badge: 'bg-purple-500 text-white',
      glow: 'from-purple-500/20 to-purple-600/20',
      button: 'from-purple-400 to-purple-600',
    },
    green: {
      badge: 'bg-cash-green text-navy-950',
      glow: 'from-cash-green/20 to-cash-emerald/20',
      button: 'from-cash-green to-cash-emerald',
    },
  };

  const accent = accentClasses[accentColor];

  const handleClick = () => {
    if (videoUrl && videoUrl !== '#') {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div
      className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-video bg-navy-800">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} flex items-center justify-center`}>
            <div className="w-40 h-40 rounded-full bg-navy-800/50 flex items-center justify-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${accent.button} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-navy-950 ml-1">
                  <PlayIcon />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full ${accent.badge} text-xs font-bold`}>
            {badge}
          </div>
        )}

        {/* Duration */}
        {duration && (
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
            {duration}
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white ml-1">
              <PlayIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
