import React, { useState } from "react";
import Mainimg from "./R.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Valid email is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Handle form submission (e.g., send data to API)
    }
  };

  return (
    <div className="min-h-screen ">
      <img
        src={Mainimg}
        alt="Contact Banner"
        className="w-full laptop:h-[70vh] object-cover mb-6"
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-6 lg:px-20">
        {/* Form Section */}
        <form
  className="bg-gradient-to-r "
  onSubmit={handleSubmit}
>
  <h2 className="text-2xl font-extrabold text-gray-500 mb-6 text-center">
    Contact Form
  </h2>

  {/* Name Input */}
  <div className="mb-5">
    <label className="block mb-2 font-semibold text-gray-400">Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      placeholder="Enter your full name"
    />
    {errors.name && (
      <p className="text-red-500 text-sm mt-2">{errors.name}</p>
    )}
  </div>

  {/* Phone Number Input */}
  <div className="mb-5">
    <label className="block mb-2 font-semibold text-gray-400">Phone Number:</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      placeholder="Enter your phone number"
    />
    {errors.phone && (
      <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
    )}
  </div>

  {/* Email Input */}
  <div className="mb-5">
    <label className="block mb-2 font-semibold text-gray-400">Email ID:</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      placeholder="Enter your email address"
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
    )}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
  >
    Submit
  </button>
</form>


        {/* Contact Details Section */}
        <div className="w-full lg:w-[40%]  p-6 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Contact Details</h2>
          <p className="text-gray-400 mb-2">
            <span className="font-medium">Name:</span> Kannan G
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-medium">Phone:</span> +91 1234567890
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-medium">Email:</span> example@example.com
          </p>
          <p className="text-gray-400">
            <span className="font-medium">Address:</span> 123, Example Street,
            Chennai, India
          </p>
        </div>
      </div>
    </div>
  );
}
