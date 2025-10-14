import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // All blog posts data - in a real app, import this from a shared data file
  const allPosts = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      author: "Sarah Johnson",
      date: "2025-10-01",
      readTime: "5 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
      content: `
        <h2>Introduction</h2>
        <p>React and TypeScript together provide a powerful combination for building robust, type-safe web applications. In this comprehensive guide, we'll explore how to set up a modern React project with TypeScript and follow best practices.</p>

        <h2>Why TypeScript with React?</h2>
        <p>TypeScript brings static typing to JavaScript, which helps catch errors early in the development process. When combined with React, you get:</p>
        <ul>
          <li>Better IDE support with intelligent code completion</li>
          <li>Improved code maintainability and refactoring</li>
          <li>Clear component props and state typing</li>
          <li>Reduced runtime errors through compile-time checks</li>
        </ul>

        <h2>Setting Up Your Project</h2>
        <p>The easiest way to start a React + TypeScript project is using Vite, which offers blazing fast hot module replacement and optimized builds.</p>
        
        <pre><code>npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev</code></pre>

        <h2>Component Best Practices</h2>
        <p>When creating React components with TypeScript, always define proper interfaces for your props:</p>
        
        <pre><code>interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={\`btn btn-\${variant}\`}>
      {label}
    </button>
  );
};</code></pre>

        <h2>State Management</h2>
        <p>TypeScript enhances useState hooks with proper type inference:</p>
        
        <pre><code>const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);</code></pre>

        <h2>Conclusion</h2>
        <p>React and TypeScript together create a robust foundation for building scalable web applications. Start small, gradually adopt TypeScript features, and enjoy the benefits of type safety in your development workflow.</p>
      `
    },
    {
      id: 2,
      title: "Understanding REST APIs and Backend Integration",
      author: "Michael Chen",
      date: "2025-09-28",
      readTime: "8 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      content: ""
    },
    {
    id: 5,
      title: "Skinny Jeans and Statement Necklaces ",
      author: "Michael Chen",
      date: "2025-09-28",
      readTime: "8 min read",
      category: "Lifestyle",
      image: "https://akns-images.eonline.com/eol_images/Entire_Site/20251014/18a714f9-04f2-47b1-983e-30241fe8c3e0_1760466230.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
      
      content: `To some, 2013 might feel like yesterday. However it's been over a decade and your favorite 2013 styles are practically considered vintage and are therefore stylish once more. We know, we can't believe it either!

Think dark skinny jeans under knee-high taupe boots and black skater skirts and peter pan collar tops. Remember the infamous outfits consisting of tunic tops over jeggings and turquoise statement necklaces? They're all back!

No, you don't have to wear an owl pendant necklace to make it work. It's not hard to bring the look of these iconic 2013 popular clothing pieces into the modern age, all with a 2025 twist, of course.

Keep scrolling to shop our favorite picks that will have the 2013 version of you kicking their feet with excitment. Shop trendy and timeless pieces below from Everlane, Wrangler, Free People, Old Navy, Vera Bradley, and more.`
      }
  ];

  // Find the post with matching ID
  const post = allPosts.find(p => p.id === parseInt(id));

  // Handle if post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: 'Check out this article!',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-20">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition mb-6 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-gray-700
                prose-pre:bg-gray-900 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:code:text-gray-100 prose-pre:code:bg-transparent prose-pre:code:p-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Divider */}
            <div className="my-12 border-t border-gray-200" />

            {/* Author Bio */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Full-stack developer and technical writer passionate about creating educational content 
                    for the developer community. Specializing in React, TypeScript, and modern web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">
              More articles coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;