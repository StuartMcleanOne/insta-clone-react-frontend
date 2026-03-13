import { useState } from "react";
import { useNavigate } from "react-router";
import { z } from "zod";
import { createPostSchema } from "../schemas/post.schema";
import api from "../services/api";

export function CreatePostForm() {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
    // ✅ Creates a temporary local URL so you can preview the image instantly
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async () => {
    setError(null);

    // ✅ Validate with Zod before touching the network
    try {
      createPostSchema.parse({ caption, image });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
        return;
      }
    }

    // ✅ FormData is how browsers send files over HTTP
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image!);

    try {
      setLoading(true);
      await api.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/profile");
    } catch {
      setError("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <h2 className="text-xl font-bold mb-6">New Post</h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 bg-red-50 border border-red-200 rounded p-2">
          {error}
        </p>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                     file:rounded file:border-0 file:text-sm file:font-semibold
                     file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-3 w-full rounded-lg object-cover max-h-72 border"
          />
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={3}
          placeholder="Write a caption..."
          className="w-full border border-gray-300 rounded-lg p-3 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50
                   text-white font-semibold py-2 rounded-lg transition-colors"
      >
        {loading ? "Sharing..." : "Share"}
      </button>
    </div>
  );
}