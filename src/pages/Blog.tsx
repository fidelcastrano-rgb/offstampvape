import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">Vape Insights & News</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay up to date with the latest trends, guides, and reviews in the world of Off Stamp vapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-[var(--color-surface)] rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all group">
              <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
