import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Clock, ArrowRight } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="flex flex-col pt-4 pb-6 px-6 sm:px-8 border-b border-[#181818] last:border-0 group transition-colors">
        {/* Cover Image */}
        <div className="mb-4 h-[220px] sm:h-[260px] bg-[#050505] rounded-[24px] border border-[#181818] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
          />
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
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
        <h2 className="text-[16px] font-bold text-slate-100 leading-snug mb-2 group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[14px] text-[#888] leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        {/* Footer Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Author avatar */}
            <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[#181818]">
              <img
                src="/profile-pict.jpg"
                alt="Vahri Maulana"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[13px] text-[#555] font-medium">{post.date}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#555]">
            <Clock size={12} />
            <span className="text-[12px] font-medium">{post.readingTime}</span>
            <ArrowRight
              size={14}
              className="ml-1 text-[#555] group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
