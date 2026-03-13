import { Link } from "react-router";

interface Props {
  highlight: {
    id: number;
    cover_image_url: string;
    title: string;
  };
}

export function HighlightBubble({ highlight }: Props) {
  return (
    <Link to={`/profile/highlights/${highlight.id}`}>
      <div className="flex flex-col items-center gap-1">
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className="w-16 h-16 rounded-full object-cover"
        />
        <span className="text-xs">{highlight.title}</span>
      </div>
    </Link>
  );
}