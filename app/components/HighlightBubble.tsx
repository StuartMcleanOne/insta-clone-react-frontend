import { Link } from 'react-router';

interface Props {
  highlight: {
    id: number;
    cover_image_url: string;
    title: string;
  };
}

export function HighlightBubble({ highlight }: Props) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center gap-1"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
        <div className="w-full h-full rounded-full bg-white p-0.5">
          <img
            src={highlight.cover_image_url}
            alt={highlight.title}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs text-center max-w-[64px] truncate">
        {highlight.title}
      </span>
    </Link>
  );
}
