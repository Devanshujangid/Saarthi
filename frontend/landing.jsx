// landing page
import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import logo from "./assets/MannSaarthi_Logo.png";
import bannerImage from "./assets/banner1.png";
import banner2 from "./assets/banner2.png";
import banner3 from "./assets/banner3.png";
// Default export React component (drop into src/App.jsx in a Vite+React project)
export default function App() {
  // --- Background images and quotes (rotates on page load) ---
  const bgImages = [
    // You can add more image URLs or imported image variables here.
    bannerImage, // Image 1
  ];

  const quotes = [
    "It’s okay to not be okay — healing is not linear.",
    "Small steps every day add up to big changes.",
    "You are more resilient than you think.",
    "Talking helps. Reach out — you don’t have to do it alone.",
  ];

  const [bg, setBg] = useState(bgImages[0]);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // pick a random background and quote on each mount (i.e., reload)
    const i = Math.floor(Math.random() * bgImages.length);
    const j = Math.floor(Math.random() * quotes.length);
    setBg(bgImages[i]);
    setQuote(quotes[j]);
  }, []);

  // --- Sample psych-educational resources ---
  const resources = [
    {
      title: "Stress Management 101",
      excerpt: "Short techniques and daily routines to keep stress manageable.",
      tag: "Article",
      image: banner2,
      type: "tall",
    },
    {
      title: "Guided Sleep Meditation",
      excerpt: "A 15-minute audio to help you wind down before bed.",
      tag: "Audio",
      image: banner3,
      type: "wide",
    },
    {
      title: "Coping with Exam Anxiety",
      excerpt: "Practical tips and breathing exercises before tests.",
      tag: "Toolkit",
      image:
        "https://images.pexels.com/photos/3769995/pexels-photo-3769995.jpeg?_gl=1*1p4xldn*_ga*MTg2NzI0MTMyMS4xNzU4MjIzMjM3*_ga_8JE65Q40S6*czE3NTgyMjMyMzckbzEkZzEkdDE3NTgyMjMzMzYkajM2JGwwJGgw",
      type: "normal",
    },
    {
      title: "Time Management for Students",
      excerpt: "A simple planner and prioritization template.",
      tag: "Worksheet",
      image:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?_gl=1*15t5qqs*_ga*MTg2NzI0MTMyMS4xNzU4MjIzMjM3*_ga_8JE65Q40S6*czE3NTgyMjMyMzckbzEkZzEkdDE3NTgyMjMzMTMkajU5JGwwJGgw",
      type: "tall",
    },
    {
      title: "Mindful Walking",
      excerpt: "Short practice to bring attention back to the present.",
      tag: "Practice",
      image:
        "https://images.pexels.com/photos/3228690/pexels-photo-3228690.jpeg?_gl=1*1p9bejb*_ga*MTg2NzI0MTMyMS4xNzU4MjIzMjM3*_ga_8JE65Q40S6*czE3NTgyMjMyMzckbzEkZzEkdDE3NTgyMjMzMzYkajM2JGwwJGgw",
      type: "normal",
    },
    {
      title: "Recognizing Burnout",
      excerpt: "Early signs, prevention and when to seek help.",
      tag: "Guide",
      image:
        "https://plus.unsplash.com/premium_photo-1661683527108-e34a6e664acd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "normal",
    },
  ];

  // --- Sample survey data for charts ---
  const barData = [
    { name: "Jan", stress: 60, sleep: 7 },
    { name: "Feb", stress: 55, sleep: 7.2 },
    { name: "Mar", stress: 62, sleep: 6.8 },
    { name: "Apr", stress: 50, sleep: 7.5 },
    { name: "May", stress: 48, sleep: 7.6 },
    { name: "Jun", stress: 53, sleep: 7.1 },
  ];

  const pieData = [
    { name: "Anxiety", value: 40 },
    { name: "Depression", value: 25 },
    { name: "Stress", value: 20 },
    { name: "Others", value: 15 },
  ];
  const COLORS = ["#3B7A57", "#6C8C7F", "#A3BFA8", "#88A09E"];
  // --- Interactive Info tiles data ---
  const infoTiles = [
    {
      title: "Why we help",
      content:
        "Because mental health is a foundation for learning and living. We provide accessible tools, counseling links and community support to help students thrive.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22v-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.9 4.9l4.2 4.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1 19.1l-4.2-4.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Who we help",
      content:
        "Students from all backgrounds — whether you’re struggling, curious, or supporting someone else. We partner with college counselors to keep help local and stigma-free.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="8"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6 20c1.333-4 4.667-6 6-6s4.667 2 6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "How we help",
      content:
        "Digital self-help resources, anonymous screenings, peer support spaces, and referrals to qualified counselors when needed.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 21v-4h10v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Our services",
      content:
        "Assessments, 1:1 counselor booking (in-house colleges), psychoeducational content, workshops, and crisis resources.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 11h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 15h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  // Tile open state for interactive reveal
  const [openIndex, setOpenIndex] = useState(null);
  const HERO_HEIGHT = 0.7 * window.innerHeight - 35;
  const [showGlassOverlay, setShowGlassOverlay] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowGlassOverlay(window.scrollY > HERO_HEIGHT);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      {/* Logo at top-left */}
      {showGlassOverlay && <div className="glass-overlay" />}
      <div className="fixed top-0 left-4 z-50 flex items-center gap-0">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0px] rounded-full"></div>
        <img
          src={logo}
          alt="MannSaarthi"
          className="h-22 w-22 object-contain transition-all duration-300 ease-in-out"
          style={{ filter: "drop-shadow(0 4px 3px rgba(255, 255, 255, 1))" }}
        />
        {/* <span className="font-bold text-gray-900">ManasPath</span> */}
      </div>

      {/* Minimal centered navbar */}
      {/* Centered navbar with icons and new buttons */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-100/50 backdrop-blur-sm 
rounded-full shadow-md px-6 py-2 flex items-center gap-6 z-50 text-forest-800"
      >
        {/* Nav links with icons */}
        <a
          href="#home"
          className={`flex items-center gap-1 font-semibold transition 
    ${
      showGlassOverlay ? "text-green-700" : "text-white"
    } hover:text-white transition`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 12l9-9 9 9v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9z" />
          </svg>
          Home
        </a>
        <a
          href="#resources"
          className={`flex items-center gap-1 font-semibold transition 
    ${
      showGlassOverlay ? "text-green-700" : "text-white"
    } hover:text-white transition`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M4 4h16v13H4z" />
          </svg>
          Resources
        </a>
        <a
          href="#services"
          className={`flex items-center gap-1 font-semibold transition 
    ${
      showGlassOverlay ? "text-green-700" : "text-white"
    } hover:text-white transition`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            <path d="M21 10l-6 6-3-3-6 6" />
          </svg>
          Services
        </a>
        <a
          href="#contact"
          className={`flex items-center gap-1 font-semibold transition 
    ${
      showGlassOverlay ? "text-green-700" : "text-white"
    } hover:text-white transition`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a7 7 0 0 0-14.8 0" />
          </svg>
          Contact Us
        </a>

        {/* Mann Ki Baat button */}
        <a
          href="#mann-ki-baat"
          className="ml-3 px-4 py-1.5 rounded-full bg-green-700 text-white text-sm font-semibold 
             shadow hover:bg-green-800 transition"
        >
          Mann Ki Baat
        </a>
      </nav>

      {/* Sign In button on right corner */}
      <div className="fixed top-4 right-6 z-50">
        <a
          href="#signin"
          className="px-4 py-1.5 rounded-full border !border-green-600 
               !text-green-600 font-semibold !bg-white 
               hover:bg-green-50 transition shadow-sm"
        >
          Sign In
        </a>
      </div>

      {/* HERO (70% viewport height) */}
      <header
        className="relative w-full"
        style={{ height: "70vh" }}
        aria-label="Hero section with rotating background and quote"
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-90"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

        <div className="relative z-10 max-w-[85rem] mx-auto h-full flex flex-col justify-center px-6">
          <div
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-3xl shadow-xl 
                border border-green-100/20"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              MannSaarthi — Mind's Charioteer towards Clarity
            </h1>
            <p className="mt-4 text-lg text-gray-100/90">{quote}</p>
            <div className="mt-6 flex gap-3">
              <a
                className="inline-block px-4 py-2 rounded-lg bg-green-700 text-white 
font-semibold shadow hover:bg-green-800 transition"
                href="#resources"
              >
                Explore resources
              </a>
              <a
                className="inline-block px-4 py-2 rounded-lg border border-green-200 text-green-50 
hover:bg-green-800/30 hover:border-green-400 transition"
                href="#services"
              >
                Our services
              </a>
            </div>
          </div>
        </div>

        {/* subtle overlay at bottom to visually separate next section */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
          <div className="w-16 h-1 bg-white/30 rounded-full" />
        </div>
      </header>

      <main className="max-w-8xl mx-auto px-6 -mt-6 pb-16">
        {/* RESOURCES GRID */}
        <section id="resources" className="mt-10 px-15">
          <h2 className="text-4xl font-bold mb-4 pt-5">
            Psychoeducational Resources
          </h2>
          <p className="text-gray-600 mb-6">
            Curated short reads, audios, and practical tools — quick to consume
            and easy to apply.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[13.5rem] grid-flow-row-dense gap-3">
            {resources.map((r, idx) => (
              <article
                key={idx}
                className={`
        relative rounded-2xl shadow-lg hover:shadow-xl
        transform hover:-translate-y-1 transition-all overflow-hidden
        bg-gray-200
        ${idx % 5 === 0 ? "sm:col-span-2" : ""}   /* wide card */
        ${idx % 3 === 0 ? "row-span-2" : ""}      /* tall card */
      `}
                style={{
                  backgroundImage: r.image ? `url(${r.image})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <div className="absolute bottom-0 left-0 w-full px-4 py-3
                bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                backdrop-blur-sm rounded-b-2xl"></div> */}

                <div
                  className="absolute bottom-0 left-0 w-full px-4 pt-1 pb-3
  bg-gradient-to-t from-black-900/100 via-black-800/30 to-transparent 
  backdrop-blur-sm rounded-b-2xl"
                >
                  {/* Title + Tag aligned in opposite corners */}
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-white pr-16">
                      {r.title}
                    </h3>

                    {r.tag && (
                      <span className="absolute top-2 right-0 px-2 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800 shadow">
                        {r.tag}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-white/90 text-sm leading-relaxed">
                    {r.excerpt}
                  </p>

                  <div className="mt-3 flex gap-3">
                    <button
                      className="flex-1 py-2 px-5 rounded-xl
             bg-white text-green-800 font-semibold
             shadow-lg hover:bg-green-100
             hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      Read
                    </button>

                    <button
                      className="w-10 h-10 flex items-center justify-center 
                       rounded-full bg-white text-gray-800 text-lg 
                       hover:bg-white hover:scale-110 transition-all shadow"
                    >
                      📑
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CHARTS */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="col-span-2 bg-white rounded-2xl p-4 shadow">
            <h3 className="font-semibold mb-3">Monthly survey snapshot</h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="stress"
                    name="Avg stress (0-100)"
                    fill="#3B7A57"
                  />
                  <Bar dataKey="sleep" name="Avg sleep (hrs)" fill="#88A09E" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="font-semibold mb-3">Reported concerns (survey)</h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={COLORS[idx % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Interactive Why/Who/How/Services */}
        <section id="services" className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Why · Who · How · Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {infoTiles.map((t, idx) => (
                <button
                  key={t.title}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left bg-white rounded-2xl p-4 flex items-start gap-4 shadow hover:shadow-lg transition"
                >
                  <div className="text-indigo-600">{t.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{t.title}</h3>
                      <div className="text-sm text-gray-500">
                        {openIndex === idx ? "Open" : "View"}
                      </div>
                    </div>
                    <p
                      className={`mt-2 text-gray-600 ${
                        openIndex === idx ? "line-clamp-none" : "line-clamp-2"
                      }`}
                    >
                      {t.content}
                    </p>

                    {openIndex === idx && (
                      <div className="mt-3 text-sm text-gray-700">
                        <p>
                          Want to learn more?{" "}
                          <a className="text-indigo-600 underline" href="#">
                            See detailed page
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* right column: testimonial / quick actions */}
            <aside className="bg-white rounded-2xl p-5 shadow h-full flex flex-col justify-between">
              <div>
                <h4 className="font-semibold">Quick actions</h4>
                <ul className="mt-3 space-y-3 text-sm text-gray-600">
                  <li>
                    <a className="underline" href="#">
                      Take a quick screening
                    </a>
                  </li>
                  <li>
                    <a className="underline" href="#">
                      Book a counselor (if available at your institute)
                    </a>
                  </li>
                  <li>
                    <a className="underline" href="#">
                      Join peer support circle
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Student story</h5>
                <p className="mt-2 text-sm text-gray-600">
                  "ManasPath helped me build routines and reach out when I
                  needed help. The resources were short and practical."
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  — An anonymous student
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 bg-green-950 text-green-100 rounded-2xl p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold">ManasPath</h3>
              <p className="mt-2 text-sm text-gray-300">
                Accessible mental health resources for college students.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm text-gray-300">
                Email: hello@manaspath.in
              </p>
              <p className="mt-1 text-sm text-gray-300">
                Phone: +91 98765 43210
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Quick links</h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>
                  <a href="#resources" className="underline">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#services" className="underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} ManasPath — All rights reserved
          </div>
        </footer>
      </main>
    </div>
  );
}