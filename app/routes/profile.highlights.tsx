import { useLoaderData } from 'react-router';
import { HighlightBubble } from '../components/HighlightBubble';
import api from '../services/api';

interface Highlight {
  id: number;
  cover_image_url: string;
  title: string;
}

export async function loader() {
  const response = await api.get('/highlights');
  return response.data as Highlight[];
}

export default function HighlightsList() {
  const highlights = useLoaderData() as Highlight[];

  return (
    <div className="flex flex-row gap-4 p-4">
      {highlights.map((highlight) => (
        <HighlightBubble key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
}
