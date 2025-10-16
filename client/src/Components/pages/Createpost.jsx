import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Save, Eye, Lightbulb } from 'lucide-react';

const CreateArticlePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageurl: '',
    content: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const categories = [
    'Sports',
    'Technology',
    'Gossips',
    'Celebrity news',
    'World news',
    'Weather',
    'Entertainment',
    'Buisness',
    'Health',
    'Education',
    'Politics',
    'Science',
    'Travel',
    'Religion',
    'Lifestyle',
    'Food',
    'Art & Culture',
    'programming',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePublish = async (e) => {
    e?.preventDefault();
    console.log('Publishing article:', formData);

  const { title, description, content, category, imageurl } = formData;

    // Validation
    if (!title  || !description || !content || !category || !imageurl) {
      setMessage('Please fill all required fields (title, description, content, category, image)');
      return;
    }

    setLoading(true);
    setMessage('');

    // Shape payload and send JSON to server's /api/articles
    try {
      const payload = {
        title,
        description,
        author: formData.author || 'Anonymous',
        date: new Date().toISOString().split('T')[0],
        readtime: Math.max(1, Math.round((formData.content || '').split('\n').length / 50)) + ' min read',
        tag: formData.category || '',
        imageurl: formData.imageurl || '',
        content: formData.content || '',
        category: formData.category || ''
      };

      await axios.post('http://localhost:5000/api/articles', payload);

      setMessage('Article created successfully!');

      // Redirect to blog after short delay
      setTimeout(() => {
        navigate('/blog');
      }, 1200);
    } catch (error) {
      console.error('Error creating article:', error);
      setMessage('Error creating article. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    console.log('Preview article:', formData);
    alert('Opening preview...');
  };

  const characterCount = formData.description.length;
  const maxCharacters = 160;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </button>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Create New Article
            </h1>
            <p className="text-gray-600">
              Share your knowledge with the developer community
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            
            {/* Arthour */}
              <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter a compelling title..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                Article Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a compelling title..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                maxLength={maxCharacters}
                placeholder="Brief summary of your article (160 characters max)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                <span className={`text-sm ${characterCount > maxCharacters ? 'text-red-500' : 'text-gray-500'}`}>
                  {characterCount}/{maxCharacters} characters
                </span>
              </div>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-900 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                id="imageurl"
                name="imageurl"
                value={formData.imageurl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Article Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
                Article Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={12}
                placeholder="Write your article content here... (Supports HTML)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-mono text-sm"
              ></textarea>
              <p className="text-sm text-gray-500 mt-2">
                You can use HTML tags for formatting
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePublish}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                <span>Publish Article</span>
              </button>
              <button
                onClick={handlePreview}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                <span>Preview</span>
              </button>
            </div>

            {/* Status */}
            {message && (
              <div className="mt-4 text-sm text-center text-gray-700">{message}</div>
            )}
            {loading && (
              <div className="mt-2 text-sm text-center text-gray-500">Submitting...</div>
            )}

          </div>
        </div>

        {/* Writing Tips Card */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100 p-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Writing Tips</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Use clear, concise headings to structure your content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Include code examples with proper syntax highlighting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Add relevant images to illustrate your points</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Keep paragraphs short and easy to scan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Proofread before publishing</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CreateArticlePage;