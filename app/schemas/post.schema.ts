import { z } from "zod";

// First, we declare a zod schema
const postSchema = z.object({
  id: z.number(),
  img_url: z.string(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

const postsSchema = z.array(postSchema);

const createPostSchema = z.object({
  caption: z.string().min(1, "Caption is required"),
  image: z.instanceof(File, { message: " Please select an image" }),
});

// Then, we infer the TypeScript type from the Zod schema.
type Post = z.infer<typeof postSchema>;

type CreatePostInput = z.infer<typeof createPostSchema>;
export { postSchema, postsSchema };
export type { Post, CreatePostInput };