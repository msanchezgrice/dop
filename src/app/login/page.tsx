"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  
  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real app, you'd validate credentials with your backend
      // For demo purposes, we'll simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if there's a stored user (this is just for demo purposes)
      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        
        // Check if email matches (very simplified - in a real app, you'd check credentials properly)
        if (user.email === data.email) {
          // Set logged in status
          localStorage.setItem('isLoggedIn', 'true');
          
          // Redirect to dashboard
          router.push('/dashboard');
          return;
        }
      }
      
      // If we get here, login failed
      setError('Invalid email or password. Please try again.');
    } catch (err) {
      setError('An error occurred during login. Please try again.');
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
            <h1 className="text-2xl font-bold text-center mb-6">Sign In to CPO.AI</h1>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
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
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className={`input-field ${errors.password ? "border-red-500" : "border-slate-300"}`}
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>
            
            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <p className="text-slate-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign up
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