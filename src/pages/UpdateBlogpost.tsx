
import { ArrowLeft, Save, Eye } from 'lucide-react';
// import { useBlog } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import { useMutation } from "@apollo/client/react";
import { UPDATE_BLOG_POST_MUTATION } from '../graphql/mutations';
import Swal from 'sweetalert2';
import { useBlog } from '../context/BlogContext';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface BlogForm {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  featured: boolean;
}
const UpdateBlogPost = () => {
  // const navigate = useNavigate();
  // const { addPost } = useBlog();
    const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { getPost } = useBlog();
  const post = id ? getPost(id) : null;

  const { user, isAuthenticated } = useAuth();
  const [updateBlog] = useMutation(UPDATE_BLOG_POST_MUTATION);
 const [formData, setFormData] = useState<BlogForm>({
    title: '',
    category: 'Strategy',
    excerpt: '',
    content: '',
    image: '/blog-1.jpg',
    readTime: '5 min read',
    featured: false,
  });
  useEffect(() => {
      if (post) {
        setFormData({
          title: post.title || '',
          category: post.category || 'Strategy',
          excerpt: post.excerpt || '',
          content: post.content || '',
          image: post.image || '/blog-1.jpg',
          readTime: post.readTime || '5 min read',
          featured: post.featured || false,
        });
      }
    }, [post]);
  
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Post not found</p>
        </div>
      );
    }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    const formDataData = new FormData();
    formDataData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formDataData,
    });

    const data = await res.json();

    setFormData(prev => ({
      ...prev,
      image: data.url, // URL from backend
    }));
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Authentication Required</h2>
          <p className="text-gray-600 mb-8">
            You need to be signed in to Update blog posts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              state={{ from: { pathname: '/blog' } }}
              className="btn-primary"
            >
              Sign In
            </Link>
            <Link to="/blog" className="btn-secondary">
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const categories = [
    'Strategy',
    'Creative',
    'Technology',
    'Business',
    'Marketing',
    'Design',
  ];

  const readTimes = [
    '3 min read',
    '5 min read',
    '7 min read',
    '10 min read',
    '15 min read',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };
const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await updateBlog({
        variables: {
          updateBlogId: post.id,
          input: {
            title: formData.title,
            content: formData.content,
            excerpt: formData.excerpt,
            featuredImage: formData.image,
            metaTitle: formData.title,
            metaDescription: formData.excerpt,
            tags: [formData.category],
            published: true,
          },
        },
      });

      if (data) {
        await Swal.fire({
          title: 'Updated!',
          text: 'Blog updated successfully.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });

        navigate(`/blog/${post.id}`);
    window.location.reload();


      } else {
        Swal.fire({
          title: 'Failed',
          text: 'Update failed',
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong',
        icon: 'error',
      });
    } finally {
    setIsSubmitting(false);
  }
  };
//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     await updateBlog({
//       variables: {
//         input: {
//           title: formData.title,
//           content: formData.content,
//           excerpt: formData.excerpt,
//           featuredImage: formData.image,
//           metaTitle: formData.title,
//           metaDescription: formData.excerpt,
//           tags: [formData.category],
//           published: true
//         }
//       }
//     });

//     navigate('/blog');
//     window.location.reload();

//   } catch (error) {
//     console.error("Error creating blog:", error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };
  const wordCount = formData.content.trim().split(/\s+/).length;
  const charCount = formData.content.length;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/blog"
                className="mr-6 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">Edit Post</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? 'Edit' : 'Preview'}
              </button>
              
              <button
                type="submit"
                form="create-post-form"
                disabled={isSubmitting || !formData.title || !formData.content}
                className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Editing...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Edit Post
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-8">
        <div className="max-w-4xl mx-auto">
          {showPreview ? (
            // Preview Mode
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                  {formData.category}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                {formData.title || 'Untitled Post'}
              </h1>
              
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <span>{user?.fullName}</span>
                <span className="mx-2">•</span>
                <span>{new Date().toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{formData.readTime}</span>
              </div>
              
              {formData.excerpt && (
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  {formData.excerpt}
                </p>
              )}
              
              <div className="prose prose-lg max-w-none">
                {formData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : (
            // Edit Mode
            <form id="create-post-form" onSubmit={handleUpdate} className="space-y-6">
              {/* Title */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Post Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter an engaging title..."
                  className="w-full text-2xl font-semibold border-0 border-b-2 border-gray-200 focus:border-black focus:ring-0 pb-2 placeholder:text-gray-300"
                />
              </div>

              {/* Settings Grid */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-black focus:ring-0"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Read Time */}
                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Read Time
                    </label>
                    <select
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-black focus:ring-0"
                    >
                      {readTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Featured */}
                  <div className="flex items-end">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleChange}
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        Feature this post
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  A brief summary that appears on the blog listing page.
                </p>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Write a compelling excerpt..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-0 resize-none"
                />
              </div>

              {/* Content */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content *
                  </label>
                  <span className="text-xs text-gray-500">
                    {wordCount} words • {charCount} characters
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Use ## for headings and separate paragraphs with blank lines.
                </p>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={20}
                  placeholder="Write your blog post content here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:ring-0 resize-none font-mono text-sm"
                />
              </div>

           {/* Image Selection / Upload */}
<div className="bg-white rounded-lg shadow-sm p-6">
  <label className="block text-sm font-medium text-gray-700 mb-4">
    Featured Image
  </label>

  {/* Upload Button */}
  <div className="mb-6">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-medium
        file:bg-black file:text-white
        hover:file:bg-gray-800"
    />
    <p className="text-xs text-gray-500 mt-2">
      Upload your own image or choose from below
    </p>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-200 my-4"></div>

  {/* Preset Images */}
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
    {[
      '/blog-1.jpg',
      '/blog-2.jpg',
      '/blog-3.jpg',
      '/hero-background.jpg',
      '/cta-background.jpg',
      '/about-portrait.jpg',
       '/designw.jpg'
    ].map((img) => (
      <button
        key={img}
        type="button"
        onClick={() =>
          setFormData(prev => ({ ...prev, image: img }))
        }
        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
          formData.image === img
            ? 'border-red-600 ring-2 ring-red-100'
            : 'border-transparent hover:border-gray-300'
        }`}
      >
        <img src={img} alt="" className="w-full h-full object-cover" />

        {formData.image === img && (
          <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </button>
    ))}
  </div>

  {/* Preview Selected Image */}
  {formData.image && (
    <div className="mt-6">
      <p className="text-sm text-gray-600 mb-2">Selected Image Preview:</p>
      <img
        src={formData.image}
        alt="Preview"
        className="w-full max-h-64 object-cover rounded-lg"
      />
    </div>
  )}
</div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Writing Tips</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Start with a compelling hook to grab readers' attention</li>
                  <li>• Use ## for section headings (e.g., ## Introduction)</li>
                  <li>• Keep paragraphs short and scannable</li>
                  <li>• Include practical takeaways readers can apply</li>
                  <li>• End with a clear conclusion or call to action</li>
                </ul>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default UpdateBlogPost;
