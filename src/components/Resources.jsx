import React, { useState, useEffect } from "react";
import PlayerModal from "./PlayerModal";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import female_tree from "../assets/female_tree.jpg";
export default function Resources() {
  // const [filter, setFilter] = useState("all");
  // const [activeResource, setActiveResource] = useState(null);

  const resources = [
    {
      id: "r1",
      title: "Stress Management 101",
      excerpt: "Short techniques and daily routines to keep stress manageable.",
      tag: "Article",
      image: "https://media.istockphoto.com/id/1278978251/photo/stressed-and-worried-girl-durig-exam-at-school.jpg?s=612x612&w=0&k=20&c=QBhcyvehgI6ERyURUjuJhDmBIkPWMAacMgMySUr7lGQ=",
      type: "tall",
      category: "Guide",
      language: "English",
      createdAt: "2025-09-01",
      mediaUrl: null,
    },
    {
      id: "r2",
      title: "Guided Sleep Meditation",
      excerpt: "A 15-minute audio to help you wind down before bed.",
      tag: "Audio",
      image: "https://plus.unsplash.com/premium_photo-1682097534172-2bfa8aa35390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGl0YXRpb24lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      type: "wide",
      category: "Audio",
      language: "Hindi",
      createdAt: "2025-08-15",
      languages: [
        { lang: "English", url: "/media/sleep-en.mp3" },
        { lang: "Hindi", url: "/media/sleep-hi.mp3" },
        { lang: "Marathi", url: "/media/sleep-mr.mp3" },
      ],
    },
    {
      id: "r3",
      title: "Coping with Exam Anxiety",
      excerpt: "Practical tips and breathing exercises before tests.",
      tag: "Toolkit",
      image:
        "https://images.pexels.com/photos/3769995/pexels-photo-3769995.jpeg",
      type: "normal",
      category: "Guide",
      language: "English",
      createdAt: "2025-07-10",
      mediaUrl: null,
    },
    {
      id: "r4",
      title: "Time Management for Students",
      excerpt: "A simple planner and prioritization template.",
      tag: "Worksheet",
      image:
        "https://media.istockphoto.com/id/1168608995/photo/exam-and-time-management-concepts-with-male-hand-holding-pencil-and-paper-sheet-on-table.jpg?s=612x612&w=0&k=20&c=Zc-eL7iOf4yMP70guAz_8WAAfr0Y-9IXxm16-EgzsdY=",
      type: "tall",
      category: "Worksheet",
      language: "Tamil",
      createdAt: "2025-06-20",
      mediaUrl: null,
    },
    {
      id: "r5",
      title: "Mindful Walking",
      excerpt: "Short practice to bring attention back to the present.",
      tag: "Practice",
      image: female_tree,
      type: "normal",
      category: "Practice",
      language: "Marathi",
      createdAt: "2025-05-01",
      mediaUrl: null,
    },
    {
      id: "r6",
      title: "Recognizing Burnout",
      excerpt: "Early signs, prevention and when to seek help.",
      tag: "Guide",
      image:
        "https://media.istockphoto.com/id/1269532812/photo/free-woman-breathing-clean-air-in-nature-forest-happy-girl-from-the-back-with-open-arms-in.jpg?s=612x612&w=0&k=20&c=Z_WVlJZh9X23YymNT8pDu9peZXxP5g57v_g0jSWkapU=",
      type: "normal",
      category: "Guide",
      language: "Kannada",
      createdAt: "2025-09-10",
      mediaUrl: null,
    },
    {
      id: "r7",
      title: "Relaxation Yoga (Video)",
      excerpt: "10-minute guided gentle yoga for relaxation.",
      tag: "Video",
      image:
        "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      type: "wide",
      category: "Video",
      language: "Hindi",
      createdAt: "2025-09-12",
      languages: [
        { lang: "English", url: "/media/yoga-en.mp4" },
        { lang: "Hindi", url: "/media/yoga-hi.mp4" },
      ],
    },
    {
      id: "r8",
      title: "Progressive Muscle Relaxation (Audio)",
      excerpt: "A simple PMR audio for calming the body.",
      tag: "Audio",
      image:
        "https://media.istockphoto.com/id/2198684492/photo/woman-meditating-listening-audiobook-with-headphone.jpg?s=612x612&w=0&k=20&c=8WTqLuAZo_YQQSldwrQM-jyLlhAJmwIclXqJrEDLEjY=",
      type: "tall",
      category: "Audio",
      language: "Tamil",
      createdAt: "2025-08-01",
      languages: [
        { lang: "Tamil", url: "/media/pmr-ta.mp3" },
        { lang: "English", url: "/media/pmr-en.mp3" },
      ],
    },
  ];

  // const filteredResources =
  //   filter === "all"
  //     ? resources
  //     : resources.filter((r) => r.type === filter);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [sortKey, setSortKey] = useState("Newest"); // options: Newest, A-Z, Z-A

  // derive categories & languages (dynamic)
  const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];
  const languages = [
    "All",
    ...Array.from(
      new Set(
        resources.flatMap((r) => {
          const extra = (r.languages || []).map((l) => l.lang);
          return [r.language, ...extra].filter(Boolean);
        })
      )
    ),
  ];

  // filter
  const filteredResources = resources.filter((r) => {
    const catMatch = selectedCategory === "All" || r.category === selectedCategory;

    let langMatch = false;
    if (selectedLanguage === "All") langMatch = true;
    else if (r.language === selectedLanguage) langMatch = true;
    else if (Array.isArray(r.languages) && r.languages.some((x) => x.lang === selectedLanguage)) langMatch = true;

    return catMatch && langMatch;
  });

  // sort (non-mutating)
  const displayedResources = [...filteredResources].sort((a, b) => {
    if (sortKey === "A-Z") return a.title.localeCompare(b.title);
    if (sortKey === "Z-A") return b.title.localeCompare(a.title);
    // Newest: use createdAt (ISO date strings)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const [actionModes, setActionModes] = useState({}); // { id: 'stream'|'download' }

  const [playerOpen, setPlayerOpen] = useState(false);
  const [playerConfig, setPlayerConfig] = useState({
    type: "audio",
    src: "",
    title: "",
    lang: "",
    id: null,
  });

  function toggleActionMode(resourceId) {
    setActionModes((prev) => ({
      ...prev,
      [resourceId]: prev[resourceId] === "download" ? "stream" : "download",
    }));
  }

  function openPlayer(res, langObj) {
    setPlayerConfig({
      type: res.tag === "Video" ? "video" : "audio",
      src: langObj.url,
      title: res.title,
      lang: langObj.lang,
      id: res.id,
    });
    setPlayerOpen(true);
  }

  function forceDownload(url, filename) {
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || "";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      window.open(url, "_blank", "noopener");
    }
  }

  useEffect(() => {
    if (!playerOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setPlayerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playerOpen]);

  return (
    <section id="resources" className="mt-10 px-4 sm:px-6 lg:px-16">
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="w-full max-w-[90rem] mx-auto">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 pt-5 sm:text-left">
          Psychoeducational Resources
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 text-center sm:text-left">
          Curated short reads, audios, and practical tools — quick to consume and easy to apply.
        </p>


        {/* FILTER UI */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`text-xs sm:text-sm px-3 py-1 rounded-full border ${selectedCategory === c
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-200"
                    } shadow-sm hover:scale-105 transition`}
                >
                  {c}
                </button>

              ))}
            </div>
            <div className="ml-0 lg:ml-4">
              <label className="sr-only">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="text-xs sm:text-sm rounded-full px-2 sm:px-3 py-1 border bg-white"
              >
                {languages.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-500">Sort:</label>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="text-xs sm:text-sm rounded-full px-2 sm:px-3 py-1 border bg-white"
            >
              <option value="Newest">Newest</option>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[13.5rem] grid-flow-row-dense gap-3">
          {displayedResources.map((r, idx) => (
            <article
              key={r.id}
              className={`relative rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all overflow-hidden bg-gray-200 ${idx % 5 === 0 ? "sm:col-span-0" : ""
                } ${idx % 3 === 0 ? "row-span-2" : ""}`}
              style={{
                backgroundImage: r.image ? `url(${r.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 w-full px-4 pt-1 pb-3 bg-gradient-to-t from-black-900/100 via-black-800/30 to-transparent rounded-b-2xl">
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white pr-16">{r.title}</h3>

                  <div className="absolute top-2 right-0 flex items-center gap-2">
                    {r.tag && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-white/90 text-gray-800 shadow">
                        {r.tag}
                      </span>

                    )}
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/80 text-gray-800 shadow">
                      {r.language}
                    </span>
                  </div>
                </div>

                <p className="mt-1 text-white/90 text-sm leading-relaxed">{r.excerpt}</p>

                <div className="mt-3 flex flex-col gap-3">
                  {/* toggle */}
                  {(r.tag === "Audio" || r.tag === "Video") && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleActionMode(r.id)}
                        className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border ${actionModes[r.id] === "download"
                          ? "bg-white text-gray-800 border-gray-200"
                          : "bg-green-700 text-white border-green-700"
                          } shadow-sm`}
                      >
                        {actionModes[r.id] === "download" ? "Download mode" : "Stream mode"}
                      </button>

                      <div className="text-xs text-white/80 ml-2">
                        Choose a language below to {actionModes[r.id] === "download" ? "download" : "stream"}.
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(r.languages) && r.languages.length > 0 ? (
                      r.languages.map((l, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            const mode = actionModes[r.id] || "stream";
                            if (mode === "stream") openPlayer(r, l);
                            else forceDownload(l.url, `${r.title}-${l.lang}`);
                          }}
                          className="px-2 sm:px-3 py-1 rounded-lg bg-white/90 text-green-700 text-xs sm:text-sm font-semibold hover:bg-green-100 transition shadow-sm"
                        >
                          {r.tag === "Audio" ? `🎧 ${l.lang}` : `🎬 ${l.lang}`}
                        </button>

                      ))
                    ) : r.mediaUrl ? (
                      <div className="flex gap-2">
                        <a
                          href={r.mediaUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 rounded-lg bg-white/90 text-green-700 text-sm font-semibold hover:bg-green-100 transition shadow-sm"
                        >
                          Open media
                        </a>
                      </div>
                    ) : (
                      <button className="flex-1 py-2 px-4 sm:px-5 text-xs sm:text-sm rounded-xl bg-white text-green-800 font-semibold shadow-lg hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out">
                        Read
                      </button>

                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PLAYER MODAL */}
        {playerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setPlayerOpen(false)} />
            <div className="relative z-10 max-w-3xl w-full bg-white rounded-xl shadow-xl p-4">
              <div className="flex flex-col [@media(min-width:450px)]:flex-row [@media(min-width:450px)]:justify-between [@media(min-width:450px)]:items-center gap-3 mb-3">
                <div>
                  <div className="text-sm text-gray-600">{playerConfig.title}</div>
                  <div className="text-xs text-gray-500">Language: {playerConfig.lang}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => forceDownload(playerConfig.src, `${playerConfig.title}-${playerConfig.lang}`)}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border bg-white"
                  >
                    Download
                  </button>

                  <button
                    onClick={() => setPlayerOpen(false)}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border bg-white"
                  >
                    Close
                  </button>

                </div>
              </div>

              <div className="w-full">
                {playerConfig.type === "audio" ? (
                  <audio controls className="w-full" src={playerConfig.src}>
                    <source src={playerConfig.src} />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <video controls className="w-full rounded" src={playerConfig.src}>
                    <source src={playerConfig.src} />
                    Your browser does not support the video element.
                  </video>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

  );
}
