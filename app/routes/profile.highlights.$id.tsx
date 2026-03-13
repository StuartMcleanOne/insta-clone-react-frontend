import {useLoaderData } from "react-router";
import { HighlightStory } from "../components/HighlightStory";
import api from "../services/api";

export async  function loader ({ params }: { params: {id:string } }) {
  const response = await api.get(`/highlights/${params.id}`);
  return response.data;
}

export default function HighlightDetail() {
  const highlight = useLoaderData();

  return <HighlightStory highlight={highlight} />;
}