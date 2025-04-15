"use client";
import { useState } from "react";

const Dashboard = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", form);
    // Submit to your backend or handle logic here
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-card text-card-foreground p-6 rounded-2xl shadow-md border border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Add New Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="E-Commerce Platform"
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="fullstack"
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Image */}
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-sm font-medium">
              Image URL
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="select image"
              type="file"
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="A complete e-commerce solution..."
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none h-24"
            />
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-2">
            <label htmlFor="technologies" className="text-sm font-medium">
              Technologies (comma separated)
            </label>
            <input
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              placeholder="Next.js, Node.js, MongoDB, Stripe"
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* GitHub URL */}
          <div className="flex flex-col gap-2">
            <label htmlFor="githubUrl" className="text-sm font-medium">
              GitHub URL
            </label>
            <input
              name="githubUrl"
              value={form.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/your-repo"
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Live URL */}
          <div className="flex flex-col gap-2">
            <label htmlFor="liveUrl" className="text-sm font-medium">
              Live URL
            </label>
            <input
              name="liveUrl"
              value={form.liveUrl}
              onChange={handleChange}
              placeholder="https://your-app.vercel.app"
              className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:opacity-90 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Dashboard;
