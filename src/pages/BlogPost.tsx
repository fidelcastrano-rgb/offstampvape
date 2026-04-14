import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-support)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[var(--color-primary)] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                {post.author}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-8">
              {post.title}
            </h1>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full aspect-video object-cover rounded-3xl border border-gray-800"
            />
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
