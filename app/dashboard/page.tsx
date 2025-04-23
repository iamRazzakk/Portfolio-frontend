"use client";
import "../globals.css";
import { useState } from "react";
import axios from "axios";
export const baseApi = "http://10.0.70.188:6010/api/v1";
const Dashboard = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    projectImage: null, // Changed to null for file handling
    description: "",
    technologies: "",
    githubUrl: "",
    liveUrl: "",
  });

  const handleChange = (e: any) => {
    const { name, type } = e.target;
    // Handle file input separately from other inputs
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      const { value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };



  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Create FormData instance
    const formData = new FormData();

    // Append all form fields to FormData
    Object.keys(form).forEach((key) => {
      if (key === "technologies") {
        // Convert comma-separated technologies string to array
        const techArray = form[key]
          .split(",")
          .map((tech: string) => tech.trim());
        formData.append(key, JSON.stringify(techArray));
      } else {
        // @ts-ignore
        formData.append(key, form[key]);
      }
    });

    try {
      const response = await axios.post(`${baseApi}/project/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
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
            type="text"
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
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Fullstack"
            className="bg-input text-foreground px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Project Image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="projectImage" className="text-sm font-medium">
            Project Image
          </label>
          <input
            type="file"
            name="projectImage" // Ensure this matches the backend field name (projectImage)
            onChange={handleChange}
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
            type="text"
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
            type="text"
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
            type="text"
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
  );
};

export default Dashboard;
