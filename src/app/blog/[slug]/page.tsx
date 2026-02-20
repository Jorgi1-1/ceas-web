import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "@/data/blog";

// Type definition for Page props in Next.js 15
interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Determine if we should show a large hero image or just a simple header
    // We use the imagePath if it exists, otherwise a generic fallback or just color
    const heroImage = post.imagePath || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop";

    // Determine the next post in the array, or null if it's the last one
    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const nextPost = currentIndex >= 0 && currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    // Build the share URLs (using a placeholder domain for now given it's local)
    const baseUrl = "https://ceas.com.mx/blog"; // Replace with real domain when live
    const shareUrl = `${baseUrl}/${post.slug}`;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(post.title);

    // Social Share URLs
    const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    const twShare = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    const inShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Minimalist Hero Section */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex items-end pb-12 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src={heroImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Granient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full animate-fade-in-up">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-medium mb-6 backdrop-blur-sm bg-black/20 px-4 py-1.5 rounded-full"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al Blog
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                        {post.title}
                    </h1>

                    <div className="flex items-center text-white/80 font-medium">
                        <CalendarDays className="w-5 h-5 mr-2 opacity-70" />
                        <span className="tracking-wide">{post.date}</span>
                        <div className="mx-4 w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        <span className="uppercase text-xs tracking-widest font-bold text-primary-light">Quiropráctica</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow relative">

                {/* Floating Social Share (Desktop) */}
                <div className="hidden lg:block absolute left-[-4rem] top-24">
                    <div className="sticky top-32 flex flex-col space-y-4">
                        <a href={fbShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:bg-white hover:shadow-md transition-all">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href={twShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:bg-white hover:shadow-md transition-all">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href={inShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-white hover:shadow-md transition-all">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <div className="h-10 w-px bg-gray-200 mx-auto my-2"></div>
                        <a
                            href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                            className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-white hover:shadow-md transition-all"
                        >
                            <Share2 className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Article Content */}
                <article className="prose prose-lg prose-blue max-w-none hover:prose-a:text-[#5a829e] prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600">
                    {/* The content from our data source */}
                    <div className="blog-content">
                        {post.content}
                    </div>
                </article>

                {/* Mobile Social Share */}
                <div className="mt-16 pt-8 border-t border-gray-100 lg:hidden flex justify-center space-x-4">
                    <a href={fbShare} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:bg-white hover:shadow-md transition-all">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href={twShare} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:bg-white hover:shadow-md transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href={inShare} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0A66C2] hover:bg-white hover:shadow-md transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>

                {/* Next/Prev Navigation Placeholder */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 rounded-2xl">
                    <div className="mb-4 md:mb-0 text-center md:text-left flex-1">
                        {nextPost ? (
                            <>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1 block">Siguiente Artículo</span>
                                <Link href={`/blog/${nextPost.slug}`} className="text-[#84a5c0] font-medium text-lg hover:text-[#5a829e] transition-colors line-clamp-1">
                                    {nextPost.title}
                                </Link>
                            </>
                        ) : (
                            <>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1 block">Siguiente Artículo</span>
                                <Link href="/blog" className="text-[#84a5c0] font-medium text-lg hover:text-[#5a829e] transition-colors">
                                    Volver al listado principal
                                </Link>
                            </>
                        )}
                    </div>
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-white text-gray-800 font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex items-center mt-4 md:mt-0"
                    >
                        Explorar más artículos
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

// Generate static params for all known blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
