import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import UpdateBlogPost from './pages/UpdateBlogpost';
import CreateBlogPost from './pages/CreateBlogPost';
import Contact from './pages/Contact';
import Login from './pages/Login';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function Layout() {
  const location = useLocation();

  // const hideNavRoutes = ['/login', '/blog/create', '/blog/update/:id'];
  const hideNav =
  ['/login', '/blog/create'].includes(location.pathname) ||
  location.pathname.startsWith('/blog/update/');
  // const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {!hideNav && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog/update/:id" element={<UpdateBlogPost />} />
        <Route path="/blog/create" element={<CreateBlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      {<Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <Layout />
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;