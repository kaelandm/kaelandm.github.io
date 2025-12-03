function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to manage state and side effects in functional components.",
      date: "2024-11-15",
      category: "React",
    },
    {
      id: 2,
      title: "Building Responsive Web Design with Tailwind CSS",
      excerpt:
        "A comprehensive guide to creating responsive layouts using Tailwind utility-first CSS.",
      date: "2024-11-10",
      category: "CSS",
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      excerpt:
        "Essential tips and patterns for building scalable and maintainable Node.js applications.",
      date: "2024-11-05",
      category: "Backend",
    },
    {
      id: 4,
      title: "Performance Optimization Tips",
      excerpt:
        "Techniques to improve web performance and create faster user experiences.",
      date: "2024-10-28",
      category: "Performance",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Blog</h1>
      <p className="section-subtitle">
        Articles about web development, coding tips, and tech insights
      </p>

      <div className="space-y-6 max-w-3xl">
        {posts.map((post) => (
          <article
            key={post.id}
            className="card cursor-pointer hover:border-accent-alt"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-black italic text-primary mb-2">
                  {post.title}
                </h2>
                <p className="text-primary/60 text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <span className="px-3 py-1 bg-accent text-primary-light text-sm rounded-full font-semibold whitespace-nowrap ml-4">
                {post.category}
              </span>
            </div>
            <p className="text-primary/70 mb-4">{post.excerpt}</p>
            <a
              href="#"
              className="text-accent font-semibold hover:text-accent-alt transition-colors"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
