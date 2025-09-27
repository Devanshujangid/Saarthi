import React, { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const [visible, setVisible] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.6 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 flex items-center justify-center">
      <div className="max-w-4xl text-center px-6">
       <p
         ref={quoteRef}
         className={`flowing-text text-3xl md:text-4xl font-semibold italic tracking-wide select-none 
         ${visible ? "reveal" : "opacity-0"}`}
       >
        “Healing doesn’t mean the damage never existed.  
        It means the damage no longer controls our lives.”
      </p>
     </div>
    </section>
  );
}
