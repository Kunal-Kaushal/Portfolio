"use client";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";

type FileSystemNode = { [key: string]: string | FileSystemNode };

const fileSystem: FileSystemNode = {
  "about.txt": "Kunal Kaushal\\nGenerative AI Developer focused on building RAG-based systems and backend applications,\\nwith hands-on experience in deploying LLM-powered pipelines and integrating them into real-world workflows.",
  "skills.json": `{\n  "Programming": ["Python", "C", "C++"],\n  "CS Fundamentals": ["Data Structures & Algorithms", "Operating Systems"],\n  "AI_ML": ["RAG", "FAISS", "SentenceTransformers", "LangChain", "Gemini", "LLaMA", "Agentic Workflows"],\n  "Frameworks": ["Google ADK", "Gemini Enterprise"],\n  "Backend": ["REST API", "Flask", "FastAPI"],\n  "Cloud_DevOps": ["Docker", "GCP Cloud Run", "AWS EC2/S3/IAM"],\n  "Databases": ["SQL", "NoSQL", "SQLite", "Firestore"]\n}`,
  "education.txt": "GL Bajaj Institute of Technology and Management (Greater Noida, UP)\\nB.Tech in Artificial Intelligence & Machine Learning\\nOct 2023 - 2027",
  "certifications.txt": "AWS Cloud Foundations",
  "contact.txt": "Email: kunalkaushal921h@gmail.com\\nPhone: +91 8505851821\\nLocation: Noida, Uttar Pradesh, India\\nGitHub: https://github.com/Kunal-Kaushal",
  projects: {
    "sentinel-soc.md": "# Sentinel SOC Dashboard\n**Stack**: Python, FastAPI, RAG, LLaMA 3.1, SQLite\n- Architected a RAG-based threat analysis system processing 10,000+ security log entries per session using FAISS vector search and SentenceTransformers.\n- Developed a multi-stage attack detection layer for contextual kill chain analysis.\n- Implemented persistent attack memory using SQLite to track repeat offenders across sessions.\n- Built a FastAPI backend and Streamlit dashboard for live SOC-style attack visualization.",
    "archon.md": "# Archon\n**Stack**: Python, Gemini LLM, FAISS, BM25, LangChain\n- Built a production-ready local RAG pipeline enabling chat over 500+ documents without Docker or cloud infrastructure.\n- Implemented hybrid search (dense + sparse) improving retrieval precision over standard vector search.\n- Leveraged Google Gemini 2.0 Flash for lightweight and efficient generation across technical document collections.",
    "lms.md": "# Multi-Agent Leave Management System\n**Stack**: Python, Google ADK, Firestore, SendGrid\n- Built a multi-agent workflow using 5 specialized agents orchestrated via Google ADK and Gemini 2.0 Flash.\n- Structured agent outputs for sequential execution across multiple agents.\n- Integrated SendGrid API for automated email workflows reducing manual HR processing time by ~80%."
  },
};

interface HistoryItem {
  id: number;
  type: "command" | "output" | "error" | "system";
  content: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: 0, type: "system", content: "Welcome to  -PortfolioOS v1.0.0" },
    { id: 1, type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<string[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cursorPos, setCursorPos] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom safely without moving the whole page
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const getDirectory = (path: string[]): FileSystemNode | null => {
    let current = fileSystem;
    for (const folder of path) {
      if (typeof current[folder] === "object") {
        current = current[folder] as FileSystemNode;
      } else {
        return null;
      }
    }
    return current;
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const args = trimmed.split(" ").filter(Boolean);
    const command = args[0].toLowerCase();
    
    // Add to history
    const commandId = Date.now();
    setHistory((prev) => [
      ...prev,
      { 
        id: commandId, 
        type: "command", 
        content: (
          <div className="flex gap-2">
            <span className="text-[#2dd4bf]">kunal@portfolio:</span>
            <span className="text-[#888888]">~{cwd.length > 0 ? "/" + cwd.join("/") : ""} $</span>
            <span className="text-white">{cmdStr}</span>
          </div>
        )
      }
    ]);

    setCmdHistory((prev) => [cmdStr, ...prev]);
    setCmdIndex(-1);

    const pushOutput = (content: React.ReactNode, isError = false) => {
      setHistory((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), type: isError ? "error" : "output", content: <span className={isError ? "text-red-400" : "text-[#f5f5f5]"}>{content}</span> }
      ]);
    };

    switch (command) {
      case "help":
        pushOutput(
          <div className="grid grid-cols-1 gap-1">
            <div><span className="text-[#2dd4bf] w-16 inline-block">ls</span> - list directory contents</div>
            <div><span className="text-[#2dd4bf] w-16 inline-block">cd</span> - change directory</div>
            <div><span className="text-[#2dd4bf] w-16 inline-block">cat</span> - print files</div>
            <div><span className="text-[#2dd4bf] w-16 inline-block">clear</span> - clear terminal</div>
            <div><span className="text-[#2dd4bf] w-16 inline-block">pwd</span> - print working directory</div>
            <div><span className="text-[#2dd4bf] w-16 inline-block">whoami</span> - print user role</div>
            <div><span className="text-[#2dd4bf] w-16 inline-block">echo</span> - print arguments</div>
          </div>
        );
        break;
      
      case "clear":
        setHistory([]);
        break;

      case "whoami":
        pushOutput("visitor");
        break;

      case "pwd":
        pushOutput(`/${cwd.join("/")}`);
        break;
        
      case "echo":
        pushOutput(args.slice(1).join(" "));
        break;

      case "ls":
        const currentDir = getDirectory(cwd);
        if (currentDir) {
          const files = Object.keys(currentDir).map(name => {
            const isDir = typeof currentDir[name] === "object";
            return (
              <span key={name} className={isDir ? "text-[#7c3aed] font-bold mr-4" : "text-[#f5f5f5] mr-4"}>
                {name}{isDir ? "/" : ""}
              </span>
            );
          });
          pushOutput(<div className="flex flex-wrap">{files}</div>);
        }
        break;

      case "cd":
        const target = args[1];
        if (!target || target === "~") {
          setCwd([]);
        } else if (target === "..") {
          setCwd((prev) => prev.slice(0, -1));
        } else {
          const dir = getDirectory(cwd);
          if (dir && typeof dir[target] === "object") {
            setCwd((prev) => [...prev, target]);
          } else {
            pushOutput(`cd: no such file or directory: ${target}`, true);
          }
        }
        break;

      case "cat":
        const fileTarget = args[1];
        if (!fileTarget) {
          pushOutput("cat: missing file operand", true);
        } else {
          const dir = getDirectory(cwd);
          if (dir && dir[fileTarget] && typeof dir[fileTarget] === "string") {
            // Check if it's a JSON file to format it nicely, otherwise pre-wrap
            pushOutput(<pre className="whitespace-pre-wrap font-mono m-0">{dir[fileTarget] as string}</pre>);
          } else if (dir && dir[fileTarget] && typeof dir[fileTarget] === "object") {
            pushOutput(`cat: ${fileTarget}: Is a directory`, true);
          } else {
            pushOutput(`cat: ${fileTarget}: No such file or directory`, true);
          }
        }
        break;

      case "sudo":
        pushOutput("Nice try. This incident will be reported.", true);
        break;

      default:
        pushOutput(`bash: ${command}: command not found. Try 'help'.`, true);
        break;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
      setCursorPos(0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdIndex < cmdHistory.length - 1) {
        const nextIndex = cmdIndex + 1;
        setCmdIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
        setTimeout(() => setCursorPos(cmdHistory[nextIndex].length), 0);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex > 0) {
        const prevIndex = cmdIndex - 1;
        setCmdIndex(prevIndex);
        setInput(cmdHistory[prevIndex]);
        setTimeout(() => setCursorPos(cmdHistory[prevIndex].length), 0);
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInput("");
        setCursorPos(0);
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      // Allow the default behavior to move the cursor, then sync state
      setTimeout(() => {
        if (inputRef.current) setCursorPos(inputRef.current.selectionStart || 0);
      }, 0);
    }
  };

  const beforeCursor = input.substring(0, cursorPos);
  const cursorChar = input.substring(cursorPos, cursorPos + 1) || " ";
  const afterCursor = input.substring(cursorPos + 1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-[400px] z-20 relative"
      onClick={handleTerminalClick}
    >
      <div className="w-full h-full rounded-[8px] border border-[#333333] bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden font-mono text-[13px] leading-[1.6] cursor-text">
        
        {/* MacOS Header */}
        <div className="flex items-center px-4 h-9 flex-shrink-0 bg-[#1a1a1a] border-b border-[#333333]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <p className="ml-4 text-[12px] font-medium text-[#888888] tracking-wide flex-1 text-center pr-12">kunal@portfolio:~</p>
        </div>
        
        {/* Terminal Body */}
        <div ref={containerRef} className="p-4 flex-1 overflow-y-auto scrollbar-hide">
          {history.map((item) => (
            <div key={item.id} className="mb-1">
              {item.type === "system" && <div className="text-[#888888]">{item.content}</div>}
              {(item.type === "output" || item.type === "error" || item.type === "command") && <div>{item.content}</div>}
            </div>
          ))}
          
          {/* Active Input Line */}
          <div className="flex items-center mt-1 relative">
            <span className="text-[#2dd4bf] whitespace-nowrap mr-2">kunal@portfolio:</span>
            <span className="text-[#888888] whitespace-nowrap mr-2">~{cwd.length > 0 ? "/" + cwd.join("/") : ""} $</span>
            
            <div className="relative flex-1 flex items-center min-w-0">
              {/* Fake input text & Block Cursor */}
              <div className="absolute inset-0 text-[#f5f5f5] font-mono whitespace-pre pointer-events-none flex items-center">
                <span>{beforeCursor}</span>
                <span className="inline-block bg-[#2dd4bf] text-[#050505] animate-pulse">{cursorChar}</span>
                <span>{afterCursor}</span>
              </div>
              
              {/* Invisible real input */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setCursorPos(e.target.selectionStart || 0);
                }}
                onSelect={(e) => setCursorPos(e.currentTarget.selectionStart || 0)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none border-none text-transparent caret-transparent focus:ring-0 focus:outline-none font-mono min-w-0 p-0 m-0 shadow-none z-10"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="h-4" />
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#2dd4bf]/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
    </motion.div>
  );
}
