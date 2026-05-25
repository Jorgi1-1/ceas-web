import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = "https://ceas.com.mx";

  // Build JSON-LD structured data for BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `${baseUrl}${item.href}` : undefined
      })).filter(item => item.item !== undefined)
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className="w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center space-x-2 text-xs md:text-sm text-[#666666] font-poppins relative z-20"
      >
        <Link 
          href="/" 
          className="hover:text-[#0098D4] flex items-center transition-colors text-gray-500 hover:scale-105"
        >
          <Home className="w-4 h-4 mr-1 shrink-0" />
          <span className="sr-only">Inicio</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-gray-800 font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="hover:text-[#0098D4] transition-colors truncate max-w-[200px] md:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
