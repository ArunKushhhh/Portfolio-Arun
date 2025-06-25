"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github } from "lucide-react";
import ProjectCard from "../components/Projects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "Pull-Quest",
      description: `PullQuest solves the major problem of unrecognized and poorly managed open-source contributions.
Contributors do not have a ranking based profile system(Like leetcode,codeforces) , Maintainers struggle to evaluate code quality and engagement due to overwhelming no of PRs(Some blatantly created with low quality).
PullQuest fixes this with a transparent, measurable, and rewarding system.
Recruiters do not have direct access to a developer's genuine contribution and quality

It thus empowers recruiters, contributors and Repository maintainers`,
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Github RestAPIs",
        "Zustand",
      ],
      images: [
        "/assets/projects/pullQuest/hero.png",
        "/assets/projects/pullQuest/repo.png",
        "/assets/projects/pullQuest/hire.png",
        "/assets/projects/pullQuest/issue.png",
        "/assets/projects/pullQuest/merge.png",
      ],
      accentColor: "bg-blue-500/20",
      githubUrl: "https://github.com/ujjuishere/PullQuestFrontEnd",
      liveUrl: "",
      year: "2025",
      projectType: "3 Developers",
      status: "Active",
    },
    {
      id: 2,
      title: "Trelloq",
      description:
        "A sleek, modern, and fully responsive project management dashboard built with React, Vite, TypeScript, Tailwind CSS v4, and Shadcn UI, backed by a Node.js + Express API backend and a MongoDB database. The app enables users to manage workspaces, projects, and tasks with full support for collaboration—including comments, mentions, reactions, and detailed activity logs. Key features include user profile management, real-time notifications, and comprehensive authentication with email verification, 2FA, and password recovery options. Users can organize archived projects and tasks, attach files or external links, and stay productive across devices thanks to a fully responsive design.",
      tags: [
        "React",
        "React Router v7",
        "Tailwind CSS v4",
        "Express.js",
        "Node.js",
        "Typescript",
        "MongoDB",
        "Shadcn UI",
      ],
      images: ["/assets/projects/trelloq/analytics.png"],
      accentColor: "bg-purple-500/20",
      githubUrl: "https://github.com/ArunKushhhh/Trelloq-Frontend",
      liveUrl: "",
      year: "2025",
      projectType: "Solo Project",
      status: "Production",
    },
    {
      id: 3,
      title: "JARVIS",
      description:
        "Inspired by Iron Man’s iconic assistants JARVIS and FRIDAY, JARVIS is a voice-enabled AI agent built with Python and powered by LiveKit, an open-source platform for real-time voice, video, and multimodal AI experiences. Leveraging the Gemini API, this intelligent assistant can browse the internet via DuckDuckGo, check real-time weather in any city, and send personalized emails on your behalf. LiveKit enables seamless audio interaction, while WebRTC powers the real-time infrastructure. JARVIS blends AI, voice control, and utility features into one smart, responsive agent—bringing sci-fi closer to real life.",
      tags: ["Python", "Livekit", "Gemini API", "Weather API", "DuckDuckGo"],
      images: [
        "/assets/projects/jarvis/code.png",
        "/assets/projects/jarvis/livekit.png",
        "/assets/projects/jarvis/dashboard.png",
        "/assets/projects/jarvis/livekitplay.png",
      ], // No images for confidential projects
      accentColor: "bg-green-500/20",
      githubUrl: "https://github.com/ArunKushhhh/JARVIS",
      liveUrl: null,
      year: "2025",
      projectType: "Solo Project",
      status: "Production",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "A feature-rich online learning platform built with Angular.js and TypeScript, backed by Firebase for real-time data and secure authentication. Users can view and manage courses, stream pre-recorded videos, read downloadable PDFs (ng2-pdf-viewer), and attempt mock quizzes with detailed performance analysis. It supports email authentication and password recovery. The app also features the MyAimate Playground—a Scratch-based, drag-and-drop coding tool where students can build interactive projects. Enhanced with Python-powered extensions like QR code scanning, text-to-speech, sentiment analysis, video sensing, and image classification, it offers a hands-on, creative approach to learning.",
      tags: [
        "Angular.js",
        "Typescript",
        "Firebase",
        "ES Lint",
        "ng2 pdf viewer",
      ],
      images: [
        "/assets/projects/myaimate/login.png",
        "/assets/projects/myaimate/dashboard.png",
        "/assets/projects/myaimate/courses.png",
        "/assets/projects/myaimate/playground.png",
        "/assets/projects/myaimate/playground2.png",
      ],
      accentColor: "bg-cyan-500/20",
      githubUrl: "https://github.com/snehasis139/myAImatePortal",
      liveUrl: "https://portal.myaimate.in/",
      year: "2025",
      projectType: "Company Project",
      status: "Production",
    },
    {
      id: 4,
      title: "CalcAI",
      description:
        "CalcAI is an intelligent calculator app that blends traditional math operations with AI-powered problem solving. Built with React, Vite, and TypeScript, it offers a fast, modern user experience with real-time computation, natural language expression parsing, and history tracking. The clean, responsive UI works seamlessly across devices. On the backend, CalcAI is powered by Python and integrates the Gemini API to handle complex AI-driven calculations. Designed with developer efficiency in mind, it features hot module replacement, ESLint for code quality, and modern styling for a smooth UX.",
      tags: [
        "React",
        "Typescript",
        "Mantine",
        "Python",
        "Gemini API",
      ],
      images: [
        "/assets/projects/calcai/frontend.png",
        "/assets/projects/calcai/eg1.png",
        "/assets/projects/calcai/sol1.png",
        "/assets/projects/calcai/backend.png",
        "/assets/projects/calcai/eg2.png",
        "/assets/projects/calcai/sol2.png",
      ],
      accentColor: "bg-cyan-500/20",
      githubUrl: "https://github.com/ArunKushhhh/CalcAI",
      liveUrl: "https://calc-ai-rosy.vercel.app/",
      year: "2025",
      projectType: "Solo Project",
      status: "Production",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cardsContainer = cardsContainerRef.current;
    const section = sectionRef.current;

    if (!container || !cardsContainer || !section) return;

    // Set up horizontal scroll
    const totalWidth = projectsData.length * window.innerWidth;

    // Set the width of the cards container
    gsap.set(cardsContainer, {
      width: totalWidth,
      display: "flex",
    });

    // Create horizontal scroll trigger
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const moveX = -progress * (totalWidth - window.innerWidth);

        gsap.set(cardsContainer, {
          x: moveX,
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projectsData.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-black flex flex-col"
    >
      {/* Section Header - Fixed */}
      <div className="relative z-20 mt-14">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-8xl text-white mb-6 font-playball">
              {">>"} Featured{" "}
              <span className="italic text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Side quests that became power moves.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative overflow-hidden my-14">
        <div
          ref={cardsContainerRef}
          className="flex"
          style={{ width: `${projectsData.length * 100}vw` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className=" w-screen flex items-center justify-center px-8"
            >
              <div className="w-full max-w-6xl">
                <ProjectCard project={project} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://github.com/ArunKushhhh?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer"
      >
        <Github size={20} />
        <p>View More Projects</p>
      </a>
    </section>
  );
};

export default Projects;
