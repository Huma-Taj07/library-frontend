"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function NewDiaryPage() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "travel-tips",
    featuredImage: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        featuredImage: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // API call here
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Diary submitted:", formData);
    }, 1000);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/diaries">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <FiArrowLeft size={24} className="text-gray-700" />
          </button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-dark">Create New Diary</h1>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-8 max-w-4xl"
      >
        {/* Title */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter diary title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Excerpt */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            placeholder="Brief summary of your diary"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
            required
          />
        </div>

        {/* Featured Image */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Featured Image
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
            <input
              type="file"
              name="featuredImage"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="image-input"
            />
            <label htmlFor="image-input" className="cursor-pointer">
              {formData.featuredImage ? (
                <span className="text-gray-700">
                  {formData.featuredImage.name}
                </span>
              ) : (
                <div>
                  <p className="text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            <option value="travel-tips">Travel Tips</option>
            <option value="food">Food</option>
            <option value="adventure">Adventure</option>
            <option value="photography">Photography</option>
            <option value="culture">Culture</option>
          </select>
        </div>

        {/* Content */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your amazing travel story here..."
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
            required
          />
        </div>

        {/* Form Actions */}
        <div className="flex gap-4">
          <Button type="submit" loading={isSubmitting}>
            Publish Diary
          </Button>
          <Link href="/admin/diaries">
            <Button variant="outline">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
