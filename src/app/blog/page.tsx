import Link from 'next/link'
import { blogPosts } from './blogPosts'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-orange-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Time Overflow Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={post.link || `/blog/${post.id}`} 
              key={post.id}
              target={post.link ? "_blank" : undefined}
              rel={post.link ? "noopener noreferrer" : undefined}
              className="bg-white/90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <article>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold text-black">{post.title}</h2>
                  <span className="text-sm text-gray-600">{post.readTime}</span>
                </div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-gray-600">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-sky-600 hover:text-sky-700">
                    {post.link ? 'Read on Hashnode →' : 'Read more →'}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <footer className="relative z-10 mt-8 flex gap-6 flex-wrap items-center justify-center text-sm text-black bg-white/80 px-4 py-2 rounded-full max-w-fit mx-auto">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span>|</span>
        <a href="mailto:fromzerotoinfinity13@gmail.com" className="hover:text-gray-900">
          Contact
        </a>
      </footer>
    </div>
  )
}
