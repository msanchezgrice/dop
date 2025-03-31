"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheckCircle } from "react-icons/fi";
import Button from "./Button";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companySize: string;
  role: string;
  techStack: string[];
  gameGenres: string[];
  message: string;
};

const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const techStackOptions = [
    "Unity",
    "Unreal Engine",
    "Custom Engine",
    "Mobile",
    "Web",
    "Console",
    "PC",
    "VR/AR",
  ];

  const gameGenreOptions = [
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
    "Sports",
    "Puzzle",
    "Casual",
    "Hyper-casual",
    "MMO",
  ];

  const roleOptions = [
    "Product Manager",
    "Product Owner",
    "Director of Product",
    "VP of Product",
    "CPO",
    "Game Producer",
    "CEO/Founder",
    "Other",
  ];

  const companySizeOptions = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "500+",
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real implementation, you would send the data to your API here
    console.log(data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheckCircle className="text-green-500" size={30} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
        <p className="text-lg text-slate-600 mb-6">
          We&apos;ve received your waitlist request and will be in touch soon with more information about GamePM AI.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
            First Name*
          </label>
          <input
            id="firstName"
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              errors.firstName ? "border-red-500" : "border-slate-300"
            }`}
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
            Last Name*
          </label>
          <input
            id="lastName"
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              errors.lastName ? "border-red-500" : "border-slate-300"
            }`}
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Work Email*
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
            errors.email ? "border-red-500" : "border-slate-300"
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
            Company Name*
          </label>
          <input
            id="companyName"
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              errors.companyName ? "border-red-500" : "border-slate-300"
            }`}
            {...register("companyName", { required: "Company name is required" })}
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-1">
            Company Size*
          </label>
          <select
            id="companySize"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
              errors.companySize ? "border-red-500" : "border-slate-300"
            }`}
            {...register("companySize", { required: "Company size is required" })}
          >
            <option value="">Select company size</option>
            {companySizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} employees
              </option>
            ))}
          </select>
          {errors.companySize && (
            <p className="mt-1 text-sm text-red-600">{errors.companySize.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">
          Your Role*
        </label>
        <select
          id="role"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
            errors.role ? "border-red-500" : "border-slate-300"
          }`}
          {...register("role", { required: "Role is required" })}
        >
          <option value="">Select your role</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.role && (
          <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Tech Stack (select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {techStackOptions.map((tech) => (
            <div key={tech} className="flex items-center">
              <input
                id={`tech-${tech}`}
                type="checkbox"
                value={tech}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                {...register("techStack")}
              />
              <label
                htmlFor={`tech-${tech}`}
                className="ml-2 text-sm font-medium text-slate-700"
              >
                {tech}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Game Genres (select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {gameGenreOptions.map((genre) => (
            <div key={genre} className="flex items-center">
              <input
                id={`genre-${genre}`}
                type="checkbox"
                value={genre}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                {...register("gameGenres")}
              />
              <label
                htmlFor={`genre-${genre}`}
                className="ml-2 text-sm font-medium text-slate-700"
              >
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          What specific PM challenges are you facing? (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Tell us about your specific product management challenges..."
          {...register("message")}
        ></textarea>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full md:w-auto"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join the Waitlist"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm; 