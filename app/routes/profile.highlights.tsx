import { useLoaderData } from "react-router";
import { HighlightBubble } from "../components/HighlightBubble";
import api from "../services/api";

export async function loader() {
  const response = await api.get("/highlights");
  return response.data;
}

export default function HighlightsList() {
  const highlights = useLoaderData();

  return (
    <div className="flex flex-row gap-4 p-4">
      {highlights.map((highlight: any) => (
        <HighlightBubble key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
}