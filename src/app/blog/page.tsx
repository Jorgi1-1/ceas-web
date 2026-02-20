import Image from "next/image";
import Link from "next/link";


import { blogPosts } from "@/data/blog";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-80 backdrop-blur-sm">
                    {/* Placeholder inspirado en la imagen provista (mujer recibiendo tratamiento/masaje en la espalda) */}
                    <Image
                        src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop"
                        alt="Blog Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/40"></div>
                </div>

                <div className="relative z-10 text-center px-4 flex items-center justify-center animate-fade-in-up">
                    <div className="h-px w-12 md:w-24 bg-[#759CB6] mr-4 hidden md:block"></div>
                    <h1 className="text-5xl md:text-7xl font-light text-[#759CB6] tracking-wide drop-shadow-sm font-sans mx-4">
                        Blog
                    </h1>
                    <div className="h-px w-12 md:w-24 bg-[#759CB6] ml-4 hidden md:block"></div>
                </div>
            </div>

            {/* Listado de Entradas del Blog */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow">
                <div className="space-y-20">
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className="flex flex-col md:flex-row gap-12 group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Contenido de texto */}
                            <div className={`flex flex-col ${post.imagePath ? 'md:w-3/5 lg:w-2/3' : 'w-full'}`}>
                                <Link href={`/blog/${post.slug}`} className="hover:opacity-80 transition-opacity w-fit">
                                    <h2 className="text-[#84a5c0] text-[28px] font-semibold mb-1 leading-tight tracking-wide">
                                        {post.title}
                                    </h2>
                                </Link>

                                <div className="text-[#d1d5db] text-[15px] font-medium tracking-wider mb-4">
                                    {post.date}
                                </div>

                                <p className="text-[#6b7280] text-[15px] leading-relaxed text-justify">
                                    {post.excerpt}
                                </p>
                            </div>

                            {/* Imágen si existe */}
                            {post.imagePath && (
                                <div className="md:w-2/5 lg:w-1/3 order-first md:order-last mb-6 md:mb-0">
                                    <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-gray-50 border border-transparent shadow-sm hover:shadow-md transition-shadow">
                                        <Image
                                            src={post.imagePath}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </Link>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* Pagination Placeholder (Premium visual detail) */}
                <div className="mt-16 flex justify-center space-x-2">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-medium shadow-md">1</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 font-medium transition-colors">2</button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 font-medium transition-colors">...</button>
                </div>
            </div>
        </div>
    );
}
