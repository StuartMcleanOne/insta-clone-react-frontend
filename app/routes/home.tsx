import { useLoaderData } from 'react-router';
import api from '../services/api';
import { postsSchema, type Post } from '../schemas/post.schema';
import { PostCard } from '../components/PostCard';

export async function loader() {
  try {
    const response = await api.get('/posts');
    return postsSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load feed:', error);
    throw new Response('Could not load feed.', { status: 500 });
  }
}

export default function Home() {
  const posts = useLoaderData() as Post[];
  return (
    <div className="flex flex-col items-center py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
