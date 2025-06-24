"use client";

import { StepForward, Terminal } from "lucide-react";

const WorkflowCard = () => {
  return (
    <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl px-4 py-6 hover:border-gray-700/50 transition-all duration-300 space-y-6">
      <div className="flex items-center gap-2">
        <StepForward size={16} color="#05DF72" />
        <div className="text-green-400"> Beyond Resume</div>
      </div>
      <div className="w-full p-4 flex flex-col gap-4 items-start bg-gray-900/50 rounded-xl text-sm">
        <div className="flex gap-2 items-center">
          <Terminal size={16}/>
          <p>Flutter Lead, Google Developer Group, AIT</p>
        </div>
        <div className="flex gap-2 items-center">
          <Terminal size={16}/>
          <p>Smart AIT Contributor</p>
        </div>
        <div className="flex gap-2 items-center">
          <Terminal size={16}/>
          <p>Certificate of Merit for being in the top 0.1%</p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
