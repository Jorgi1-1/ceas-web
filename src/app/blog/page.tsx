import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-bg-light font-sans">
            {/* Banner Superior Standard */}
            <div className="relative w-full h-[250px] min-h-[250px] md:h-[350px] md:min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/Sala CEAS.JPG"
                        alt="Blog Background"
                        fill
                        className="object-cover blur-[4px] md:blur-[6px] scale-110 opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center animate-fade-in-up mt-8 md:mt-0">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='top bottom+=20%'
                        scrollEnd='bottom bottom-=20%'
                        stagger={0.03}
                        as="h1"
                        textClassName="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6"
                    >
                        Blog
                    </ScrollFloat>
                    <div className="h-1.5 w-24 bg-secondary rounded-full shadow-sm"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-8">
                {/* Main Articles Container */}
                <div className="bg-white border text-gray-800 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-sm mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">
                        Últimos Artículos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {blogPosts.map((post) => {
                            return (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col"
                                >
                                    {/* Contenedor de Imágen */}
                                    <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-gray-100 shadow-sm">
                                        {post.imagePath && (
                                            <Image
                                                src={post.imagePath}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                        {/* Overlay Sútil */}
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
                                    </div>

                                    {/* Textos: Título y Fecha */}
                                    <h3 className="text-[22px] font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2 leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-[15px] font-medium tracking-wide">
                                        {post.date}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
