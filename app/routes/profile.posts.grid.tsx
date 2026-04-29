import { useLoaderData } from 'react-router';
import api from '~/services/api';
import { postsSchema, type Post } from '~/schemas/post.schema';

export async function loader() {
  try {
    const response = await api.get('/posts');
    return postsSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load posts:', error);
    throw new Response('Could not load posts.', { status: 500 });
  }
}

export default function PostsGrid() {
  const posts = useLoaderData() as Post[];
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {posts.map((post) => (
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
