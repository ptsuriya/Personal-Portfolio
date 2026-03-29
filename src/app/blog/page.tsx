export default function BlogPage() {
  // TODO: ดึงข้อมูลจาก MDX files
  const posts: { slug: string; title: string; date: string; tags: string[]; excerpt: string }[] = [];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[#C07B2A] text-sm font-medium tracking-widest uppercase mb-2">
          Blog
        </p>
        <h1 className="text-4xl font-bold text-[#3D1F00]">บทความ</h1>
        <p className="text-[#8B5E3C] mt-3">
          เรื่องราวเกี่ยวกับ Design, Dev และชีวิต
        </p>
      </div>

      {/* Tag filter placeholder */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["ทั้งหมด", "#design", "#music", "#dev", "#life"].map((tag) => (
          <button
            key={tag}
            className="bg-[#FFF0CC] border border-[#E8C99A] text-[#8B5E3C] text-sm px-3 py-1 rounded-full hover:bg-[#F5C9A0] transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts list */}
      {posts.length === 0 ? (
        <div className="text-center py-20 text-[#8B5E3C]">
          <p className="text-4xl mb-4">📝</p>
          <p>ยังไม่มีบทความ — เร็วๆ นี้</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#FFF0CC] border border-[#E8C99A] rounded-2xl p-6"
            >
              <p className="text-xs text-[#8B5E3C] mb-2">{post.date}</p>
              <h2 className="text-xl font-bold text-[#3D1F00] mb-2">
                {post.title}
              </h2>
              <p className="text-[#8B5E3C] text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#C07B2A] bg-[#FDF6EC] px-2 py-0.5 rounded-full border border-[#E8C99A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
