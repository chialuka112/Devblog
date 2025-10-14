import React, { useState } from 'react';
import { Search, Calendar, Clock, User } from 'lucide-react';
import Navbar from '../Layout/Navbar';
import { Link } from 'react-router-dom';




 const Blog = () => {
      const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      description: "Learn how to set up a modern React project with TypeScript, Vite, and best practices for type-safe...",
      author: "Sarah Johnson",
      date: "2025-10-01",
      readTime: "5 min read",
      tag: "Programming",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Understanding REST APIs and Backend Integration",
      description: "A comprehensive guide to building and consuming REST APIs, handling authentication,...",
      author: "Michael Chen",
      date: "2025-09-28",
      readTime: "8 min read",
      tag: "Programming",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "The Super Eagles Road To 2026 World Cup ",
      description: "Did Nigeria make the playoffs? How did they perform in the group stages? What are their chances going forward to the World Cup in 2026",
      author: "Emily Rodriguez",
      date: "2025-09-25",
      readTime: "6 min read",
      tag: "Sports",
      image: "https://www.nairaland.com/attachments/19586551_cymera20251014222526_jpegbd536a67a0fa275a1f13c90882a325ef"
    },
    {
      id: 4,
      title: " Cameroon’s Opposition Candidate, Tchiroma, Declares Victory In Presidential Vote",
      description: "Cameroon’s opposition challenger Issa Tchiroma Bakary on Tuesday claimed election victory against incumbent President Paul Biya, who has been in power for 43 years",
      author: "Sarah Johnson",
      date: "2025-10-01",
      readTime: "5 min read",
      tag: "Politics",
      image: "https://www.nairaland.com/attachments/19586092_images20251014t182118_428_jpeg6dd4021aac587b0e2c53765308690c73"
    },
    {
      id: 5,
      title: "Skinny Jeans and Statement Necklaces ",
      description: "Skinny Jeans and Statement Necklaces Are Back—2013 Fashion Is Trending Again & Here’s How To Wear It",
      author: "Michael Chen",
      date: "2025-09-28",
      readTime: "8 min read",
      tag: "Lifestyle",
      image: "https://akns-images.eonline.com/eol_images/Entire_Site/20251014/18a714f9-04f2-47b1-983e-30241fe8c3e0_1760466230.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
    },
  ];

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-blue-600">Luka</span>
            <span className="text-blue-400">Blog</span>
            
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Read your blog click on any article to get the full content
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <Link to="/createpost">
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            Write Article
          </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link 
              to={`/blog/${article.id}`} 
              state={{ article }}
              key={article.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {article.tag}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog
   