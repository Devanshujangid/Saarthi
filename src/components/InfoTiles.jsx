import React, { useEffect, useState } from "react";
export default function InfoTiles() {


  const [openIndex, setOpenIndex] = useState(null);

  const infoTiles = [
    {
      title: "Why we help",
      content:
        "Because mental health is a foundation for learning and living. We provide accessible tools, counseling links and community support to help students thrive.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.9 4.9l4.2 4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.1 19.1l-4.2-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Who we help",
      content:
        "Students from all backgrounds — whether you’re struggling, curious, or supporting someone else. We partner with college counselors to keep help local and stigma-free.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 20c1.333-4 4.667-6 6-6s4.667 2 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "How we help",
      content:
        "Digital self-help resources, anonymous screenings, peer support spaces, and referrals to qualified counselors when needed.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 21v-4h10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Our services",
      content:
        "Assessments, 1:1 counselor booking (in-house colleges), psychoeducational content, workshops, and crisis resources.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#044F4A] mb-12">
          Why · Who · How · Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* left 2/3 : expandable tiles */}
          <div className="md:col-span-2 space-y-6">
            {infoTiles.map((t, idx) => (
              <button
                key={t.title}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left bg-white rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition"
              >
                <div className="text-[#044F4A]">{t.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {t.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {openIndex === idx ? "−" : "+"}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-gray-600 text-sm leading-relaxed ${openIndex === idx ? "line-clamp-none" : "line-clamp-2"
                      }`}
                  >
                    {t.content}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* right 1/3 : quick actions + story */}
          <aside className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-[#044F4A]">Quick Actions</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a className="underline hover:text-[#044F4A]" href="#">
                    Take a quick screening
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-[#044F4A]" href="#">
                    Book a counselor
                  </a>
                </li>
                <li>
                  <a className="underline hover:text-[#044F4A]" href="#">
                    Join peer support circle
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-medium text-gray-800">Student Story</h5>
              <p className="mt-2 text-sm text-gray-600 italic">
                "MannSaarthi helped me build routines and reach out when I needed help. The resources were short and practical."
              </p>
              <div className="mt-3 text-xs text-gray-500">
                — An anonymous student
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
