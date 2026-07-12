import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  // Simple markdown-ish renderer: bold (**text**), headings (## text), paragraphs
  const renderContent = (raw: string) => {
    return raw.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-[18px] font-bold text-slate-100 mt-8 mb-3 leading-snug">
            {block.replace("## ", "")}
          </h2>
        );
      }

      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <p key={i} className="text-[15px] font-semibold text-slate-200 leading-relaxed mb-4">
            {block.replace(/\*\*/g, "")}
          </p>
        );
      }

      // Inline bold
      const parts = block.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-[15px] text-[#aaa] leading-relaxed mb-4">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="text-slate-100 font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col h-full w-full min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center gap-3 border-b border-[#181818]">
        <Link
          href="/blog"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#181818] transition-colors"
        >
          <ArrowLeft size={18} className="text-slate-100" />
        </Link>
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight truncate">Blog</h2>
      </div>

      {/* Cover Image */}
      <div className="mx-6 sm:mx-8 mt-6 h-[220px] sm:h-[300px] rounded-[24px] border border-[#181818] overflow-hidden bg-[#050505]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article */}
      <article className="px-6 sm:px-8 py-6">
        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-[#888] bg-[#181818] px-2.5 py-1 rounded-full tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-[22px] sm:text-[26px] font-bold text-slate-100 leading-snug mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#181818]">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-[#181818]">
            <img src="/profile-pict.jpg" alt="Vahri Maulana" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-semibold text-slate-100">Vahri Maulana</span>
            <div className="flex items-center gap-2 text-[#555]">
              <span className="text-[12px]">{post.date}</span>
              <span>·</span>
              <Clock size={11} />
              <span className="text-[12px]">{post.readingTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>{renderContent(post.content)}</div>
      </article>
    </div>
  );
}
