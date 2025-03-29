"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();
  
  const password = watch('password');
  
  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real app, you'd call your API to register the user
      // For demo purposes, we'll simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store user data (in a real app, this would be handled by your auth system)
      localStorage.setItem('user', JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        companyName: data.companyName,
      }));
      
      // Redirect to onboarding
      router.push('/dashboard/onboarding');
    } catch (err) {
      setError('An error occurred during signup. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main>
      <Navbar />
      
      <section className="py-16 bg-slate-50">
        <div className="max-w-md mx-auto px-6">
          <div className="card bg-white">
            <h1 className="text-2xl font-bold text-center mb-6">Create Your CPO.AI Account</h1>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className={`input-field ${errors.firstName ? "border-red-500" : "border-slate-300"}`}
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
                    className={`input-field ${errors.lastName ? "border-red-500" : "border-slate-300"}`}
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
                  className={`input-field ${errors.email ? "border-red-500" : "border-slate-300"}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
                  Company Name*
                </label>
                <input
                  id="companyName"
                  type="text"
                  className={`input-field ${errors.companyName ? "border-red-500" : "border-slate-300"}`}
                  {...register("companyName", { required: "Company name is required" })}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  className={`input-field ${errors.password ? "border-red-500" : "border-slate-300"}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    }
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">
                  Confirm Password*
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className={`input-field ${errors.confirmPassword ? "border-red-500" : "border-slate-300"}`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: value => value === password || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </form>
            
            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <p className="text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 