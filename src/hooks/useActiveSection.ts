import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      { id: "hero", element: document.getElementById("hero") },
      { id: "how-it-works", element: document.getElementById("how-it-works") },
      { id: "features", element: document.getElementById("features") },
      { id: "faq", element: document.getElementById("faq") },
      { id: "contact", element: document.getElementById("contact") },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
