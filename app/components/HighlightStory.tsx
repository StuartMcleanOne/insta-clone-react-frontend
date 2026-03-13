interface Props {
  highlight: {
    id: number;
    cover_image_url: string;
    title: string;
  };
}

export function HighlightStory({ highlight }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="w-full max-w-sm rounded-lg object-cover"
      />
      <h2 className="text-xl font-bold">{highlight.title}</h2>
    </div>
  );
}