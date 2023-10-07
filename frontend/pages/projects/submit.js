import { useState } from "react";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    description: "",
    whitepaper: "",
    socialLink: "",
    website: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="font-bold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold">Whitepaper</label>
        <input
          type="text"
          name="whitepaper"
          value={formData.whitepaper}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold">Social Link</label>
        <input
          type="text"
          name="socialLink"
          value={formData.socialLink}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold">Website</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="">Select Category</option>
          <option value="finance">Finance</option>
          <option value="health">Health</option>
          <option value="tech">Tech</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
