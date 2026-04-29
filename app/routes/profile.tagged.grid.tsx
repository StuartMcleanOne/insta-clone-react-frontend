import { useLoaderData } from 'react-router';
import api from '../services/api';
import { postsSchema, type Post } from '../schemas/post.schema';

export async function loader() {
  try {
    const response = await api.get('/tagged/grid');
    return postsSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load tagged posts:', error);
    throw new Response('Could not load tagged posts.', { status: 500 });
  }
}

export default function TaggedGrid() {
  const tagged = useLoaderData() as Post[];

  return (
    <div className="grid grid-cols-3 gap-0.5">
      {tagged.map((post) => (
        <div key={post.id} className="aspect-square overflow-hidden">
          <img
            src={post.img_url}
            alt={post.caption ?? 'Post'}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
