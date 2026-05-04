import React, { createContext, useContext } from "react";
import { useQuery } from "@apollo/client/react";
import { BLOGS_QUERY } from "../graphql/queries";

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  authorAvatar?: string;
  featured?: boolean;
  readTime: string;
}

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  deletePost: (id: string) => void;
  getPost: (id: string) => BlogPost | undefined;
  getPreviewContent: (content: string) => string;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  interface BlogsQueryData {
    blogs: any[];
  }

  const { data, loading } = useQuery<BlogsQueryData>(BLOGS_QUERY, {
    variables: {
      offset: 0,
      limit: 20,
      publishedOnly: true
    }
  });

  const posts: BlogPost[] =
    data?.blogs?.map((blog: any) => ({
      id: blog.id,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.tags?.[0] || "General",
      image: blog.featuredImage || "/blog-1.jpg",
      author: blog.author?.fullName || "Unknown",
      authorAvatar: blog.author?.avatar,
      date: new Date(blog.createdAt).toLocaleDateString(),
      featured: false,
      readTime: "5 min read"
    })) || [];

  const deletePost = (id: string) => {
    console.log("Delete post not implemented yet:", id);
  };

  const getPost = (id: string) => {
    return posts.find(post => post.id === id);
  };

  const getPreviewContent = (content: string) => {
    const paragraphs = content.split("\n\n");
    const previewParagraphs = Math.max(2, Math.ceil(paragraphs.length * 0.3));
    return paragraphs.slice(0, previewParagraphs).join("\n\n");
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        loading,
        deletePost,
        getPost,
        getPreviewContent
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within BlogProvider");
  }
  return context;
};