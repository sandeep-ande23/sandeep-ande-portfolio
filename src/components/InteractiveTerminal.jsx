import React, { useMemo, useState } from 'react';
import { personalInfo, projects, socialLinks } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'whoami', out: `${personalInfo.name} — Python / AI / Data / Backend` },
    { cmd: 'status', out: 'Building practical systems. Always learning. Always improving.' },
  ]);
  const commands = useMemo(() => ({
    help: 'Available: whoami · skills · projects · github · linkedin · contact · clear',
    whoami: `${personalInfo.name}\n${personalInfo.title}`,
    skills: 'Python · SQL · AI · RAG · FastAPI · APIs · Docker · Linux · AWS · Terraform · DSA · Git · React',
    projects: projects.map(p => `${p.number}  ${p.title}`).join('\n'),
    github: socialLinks.github,
    linkedin: socialLinks.linkedin,
    contact: personalInfo.emails.primary,
    status: 'Open to opportunities in software, AI, backend and data engineering.'
  }), []);
  const run = e => {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') { setHistory([]); setValue(''); return; }
    setHistory(h => [...h, { cmd, out: commands[cmd] || `Command not found: ${cmd}. Type "help".` }]);
    setValue('');
  };
  return <section className="terminal-section" id="terminal">
    <div className="terminal-copy"><span className="eyebrow">INTERACTIVE</span><h2>Ask the<br/><em>terminal.</em></h2><p>A small command-line version of my portfolio. Type <b>help</b> and explore.</p></div>
    <div className="terminal-window">
      <div className="terminal-bar"><span/><span/><span/><label>ask://portfolio</label></div>
      <div className="terminal-body">
        {history.map((item, i) => <div key={i} className="terminal-line"><div><b>ask@portfolio</b><span>:$ ~ {item.cmd}</span></div><pre>{item.out}</pre></div>)}
        <form onSubmit={run} className="terminal-input"><span>ask@portfolio:$ ~</span><input value={value} onChange={e => setValue(e.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck="false" placeholder="type a command..." /></form>
      </div>
    </div>
  </section>;
}
