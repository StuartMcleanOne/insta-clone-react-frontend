import { useLoaderData } from "react-router";
import { PostCard } from "../components/PostCard";
import api from "../services/api";

export async function loader() {
  const response = await api.get("/tagged/grid");
  return response.data;
}

export default function TaggedGrid() {
  const tagged = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-1">
      {tagged.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}