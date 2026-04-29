import { useLoaderData } from 'react-router';
import { HighlightStory } from '../components/HighlightStory';
import api from '../services/api';

interface Highlight {
  id: number;
  cover_image_url: string;
  title: string;
}

export async function loader({ params }: { params: { id: string } }) {
  const response = await api.get(`/highlights/${params.id}`);
  return response.data as Highlight;
}

export default function HighlightDetail() {
  const highlight = useLoaderData() as Highlight;

  return <HighlightStory highlight={highlight} />;
}
