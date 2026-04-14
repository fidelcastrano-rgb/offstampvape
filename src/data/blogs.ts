import { blog1Content, blog2Content, blog3Content } from './blogContent';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'off-stamp-longevity-guide',
    title: 'How Long Does an Off Stamp Vape Last? The Ultimate Guide to Puff Counts',
    excerpt: 'Discover the truth behind the 16,000 puff count and how to maximize your Off Stamp device lifespan.',
    date: 'April 10, 2024',
    author: 'Vape Expert',
    image: '/1.webp',
    category: 'Guides',
    content: blog1Content
  },
  {
    id: 'off-stamp-vs-lost-mary',
    title: 'Off Stamp vs. Lost Mary: Which Disposable Vape Reigns Supreme?',
    excerpt: 'A head-to-head comparison of two industry giants. We look at flavor, battery, and value.',
    date: 'April 11, 2024',
    author: 'Tech Reviewer',
    image: '/2.webp',
    category: 'Comparison',
    content: blog2Content
  },
  {
    id: 'off-stamp-safety-and-authenticity',
    title: 'Are Off Stamp Vapes Safe? Ingredients and Authenticity Explained',
    excerpt: 'Learn how to verify your device and what goes into the premium e-liquid of an Off Stamp vape.',
    date: 'April 12, 2024',
    author: 'Safety First',
    image: '/image.webp',
    category: 'Safety',
    content: blog3Content
  }
];
