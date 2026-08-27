"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // We create the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optional: if we want animations to run only once
            // observer.unobserve(entry.target);
          } else {
            // If we want animations to reverse when scrolling out
            // entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes fully into view
      }
    );

    // Function to observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        observer.observe(el);
      });
    };

    // Run initially
    // We use a slight delay to ensure DOM is fully painted
    const timeout = setTimeout(() => {
      observeElements();
    }, 100);

    // Safety net: force-reveal any element the observer never resolved
    // (interrupted transition, missed intersection, disabled JS timing edge case)
    // so persuasive copy never gets stuck at a faint, seemingly-broken opacity.
    const safetyTimeout = setTimeout(() => {
      document.querySelectorAll(".scroll-animate:not(.is-visible)").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 1500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes

  return null; // This component doesn't render anything
}
