import React from 'react';

const AboutPage = () => {
  const techStack = [
    {
      category: "Frontend",
      description: "React 18 with TypeScript for type-safe, modern component development. Vite for lightning-fast development experience."
    },
    {
      category: "Styling",
      description: "Tailwind CSS with custom design system. Shadcn UI for beautiful, accessible components."
    },
    {
      category: "Routing",
      description: "React Router v6 for client-side routing with multiple page examples."
    }
  ];

  const steps = [
    {
      number: "1.",
      text: "Explore the codebase - check out the components, pages, and structure"
    },
    {
      number: "2.",
      text: "Modify existing components to understand how they work"
    },
    {
      number: "3.",
      text: "Build your own features using the template as a foundation"
    },
    {
      number: "4.",
      text: "Deploy your project and share it with the world"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tech Stack Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Tech Stack</h1>
          
          <div className="space-y-8">
            {techStack.map((item, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.category}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Getting Started</h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600 flex-shrink-0">
                  {step.number}
                </span>
                <p className="text-gray-600 leading-relaxed pt-1">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Built for Learning
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
        This system is designed to introduce new concepts and reinforce understanding through clear, structured examples. It aims to be an accessible tool, enabling users to quickly grasp complex technical workflows. The entire design prioritizes educational clarity over production complexity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Feel free to experiment, break things, and learn from the process. That's what this template is here for!
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;