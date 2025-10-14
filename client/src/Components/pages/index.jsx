import React from 'react';
import { Code, Layers, Zap, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Stack",
      description: "Built with React, TypeScript, and Tailwind CSS for a great developer experience."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Component Library",
      description: "Beautiful, accessible components from Shadcn UI, ready to customize."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Development",
      description: "Vite-powered development with hot module replacement and instant updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">get latest blogs here</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Read Your Blogs
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Get latest news, climate news, movies, celebrity gossips, jobs and interview and educational teaching 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/blog"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Read Blog</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium border-2 border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              A educational or roadmap into software engineering, or other fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Explore the blog, read articules, follow for updates need to ask a question get in touch.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Get Started</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;