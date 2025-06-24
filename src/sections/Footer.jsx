import {
  FileText,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MessageCircleMore,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full bg-black py-20 text-sm flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-7xl flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8 my-24 justify-center items-center">
          <div className=" text-8xl max-w-6xl text-center relative">
            <span className="absolute -top-[30%] -left-20">✨</span>
            <p className="font-playball italic inline">
              Open to new ideas, good conversations, and even better tea.
            </p>{" "}
            <span className="inline-block">☕</span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:austen.dezigns.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/70 border-t-[0.5px] border-white shadow-[inset_0px_4px_8px_rgba(255,255,255,0.6)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.6)]  text-white px-8 py-4 rounded-full font-medium cursor-pointer flex gap-2 items-center justify-center"
            >
              <Mail size={20} />
              <p>austen.dezigns.dev@gmail.com</p>
            </a>
            <a
              href="https://www.instagram.com/imwfy_a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-medium cursor-pointer flex items-center gap-2 justify-center"
            >
              <FileText size={20} />
              <p>Resume</p>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-between mt-8 items-center">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://x.com/austen_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <Twitter size={14} />
            </a>
            <a
              href="https://www.instagram.com/imwfy_a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/arun-kumar-kushwaha-b26085286/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.github.com/ArunKushhhh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <Github size={14} />
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://t.me/xD1111111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <Send size={14} />
            </a>
            <a
              href="https://wa.me/8619020789?text=Hi%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <MessageCircleMore size={14} />
            </a>
            <button
              className="p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 flex justify-start items-center gap-2 cursor-pointer text-sm"
            >
              <Phone size={14} />
              <p className="inline-block ">8619020789</p>
            </button>
          </div>
        </div>
      </div>
      {/* hr line */}
      <div className="w-full mx-auto h-px bg-white my-6 opacity-50" />
      {/* bottom */}
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          Made with{" "}
          <span>
            <Heart size={16} />
          </span>{" "}
          by Arun
        </div>
        <div>© 2025 Arun. All rights reserved</div>
      </div>
    </section>
  );
};

export default Footer;
