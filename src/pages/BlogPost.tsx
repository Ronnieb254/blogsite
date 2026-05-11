import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Lock, Edit, Trash2 } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
// import { useMutation } from '@apollo/client';
import { useMutation } from "@apollo/client/react";
import Swal from 'sweetalert2';
import { DELETE_BLOG_POST_MUTATION } from '../graphql/mutations';



interface DeleteBlogResponse {
  deleteBlog: {
    id: string;
    success: boolean;
    message: string;
  };
}


const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPost, getPreviewContent } = useBlog();
  const { isAuthenticated, user } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [deleteBlog, { loading: deleting }] =
  useMutation<DeleteBlogResponse>(
    DELETE_BLOG_POST_MUTATION
  );
  const post = id ? getPost(id) : undefined;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  // const handleDelete = () => {
  //   if (post) {
  //     deletePost(post.id);
  //     navigate('/blog');
  //   }
  // };
const handleDelete = async () => {
  if (!post) return;

  const result = await Swal.fire({
    title: 'Delete Post?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Yes, delete it',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
  });

  if (!result.isConfirmed) return;
      // console.log('Deleting blog with ID:', post.id);

  try {
    const { data } = await deleteBlog({
      variables: {
        deleteBlogId: post.id,
      },
    });
      // console.log('Deleting blog with ID:', data);

    if (data?.deleteBlog?.message === 'Blog deleted successfully') {
      // if (data?.deleteBlog?.id)

      await Swal.fire({
        title: 'Deleted!',
        text: 'Your post has been deleted successfully.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });

      navigate('/blog');
      window.location.reload();

    } else {

      Swal.fire({
        title: 'Failed',
        text: 'Could not delete post.',
        icon: 'error',
      });

    }

  } catch (error) {
    console.error('Error deleting blog:', error);

    Swal.fire({
      title: 'Error',
      text: 'Something went wrong while deleting the post.',
      icon: 'error',
    });
  }
};

  if (!post) return null;

  const previewContent = getPreviewContent(post.content);
  const isAuthor = user?.fullName === post.author;

  // Format content with paragraphs
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-10 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-8 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4 text-gray-700">
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(item => /^\d+\./.test(item));
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-3xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}>
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="py-12 sm:py-16">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            {/* Meta Info */}
            <div className={`flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-gray-200 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <div className="flex items-center">
                <img
                  src={post.authorAvatar || '/hero-portrait.jpg'}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <span className="block font-medium">{post.author}</span>
                  <span className="text-sm text-gray-500">Author</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            {/* Excerpt */}
            <p className={`text-xl text-gray-600 leading-relaxed mb-10 font-medium transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
              style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              {post.excerpt}
            </p>

            {/* Content */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
              style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              
              {isAuthenticated ? (
                // Full content for authenticated users
                <article className="prose prose-lg max-w-none">
                  {formatContent(post.content)}
                </article>
              ) : (
                // Preview content for guests
                <>
                  <article className="prose prose-lg max-w-none">
                    {formatContent(previewContent)}
                  </article>
                  
                  {/* Login CTA */}
                  <div className="mt-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent h-32 -top-32" />
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6 text-red-600" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">
                        Continue Reading
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Sign in to read the full article and access all our premium content. 
                        It only takes a moment!
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          to="/login"
                          state={{ from: { pathname: `/blog/${post.id}` } }}
                          className="btn-primary"
                        >
                          Sign In to Continue
                        </Link>
                        <Link
                          to="/login"
                          state={{ from: { pathname: `/blog/${post.id}` } }}
                          className="btn-secondary"
                        >
                          Create Account
                        </Link>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        Demo: alexandra@example.com / password123
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Author Actions (if authenticated and author) */}
            {isAuthenticated && isAuthor && (
              <div className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  Author Actions
                </h4>
                <div className="flex gap-4">
                  <Link
                    to={`/blog/update/${post.id}`}
                    className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Post
                  </Link>
                  {/* <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 text-sm font-medium hover:bg-red-600 hover:text-white transition-colors duration-300"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Post
                  </button> */}
                <button
    onClick={handleDelete}
    disabled={deleting}
    className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 text-sm font-medium hover:bg-red-600 hover:text-white disabled:opacity-50 transition-colors duration-300"
  >
    <Trash2 className="w-4 h-4 mr-2" />
    {deleting ? 'Deleting...' : 'Delete Post'}
  </button>
                </div>
              </div>
            )}

            {/* Share/Tags Section */}
            <div className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
              style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-expo-out)' }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-sm text-gray-500">Category:</span>
                  <Link
                    to={`/blog?category=${post.category}`}
                    className="ml-2 text-sm font-medium hover:text-red-600 transition-colors duration-300"
                  >
                    {post.category}
                  </Link>
                </div>
                
                <Link
                  to="/blog"
                  className="inline-flex items-center text-sm font-medium hover:text-red-600 transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-xl font-semibold mb-4">Delete Post?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{post.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogPost;
