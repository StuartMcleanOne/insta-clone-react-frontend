import { CreatePostForm } from "../components/CreatePostForm";

export default function CreateRoute() {
  return <CreatePostForm />;
}

//This is just the route wrapper. In React Router v7, routes are thin — they don't do logic themselves, they just say "when someone lands on this URL, render this component." The real work lives in CreatePostForm.