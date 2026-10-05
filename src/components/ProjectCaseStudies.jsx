import React from 'react';
import { projects } from '../data/portfolioData';

const cases = [
  {
    id: 'rag-codebase', label: '01 · AI / RAG', title: 'From codebase to grounded answers',
    flow: ['Code + docs', 'Chunk + metadata', 'Embeddings', 'ChromaDB', 'Retrieve', 'LLM answer'],
    result: 'Built a source-aware developer assistant with retrieval evaluation, tests, FastAPI, Docker and CI.'
  },
  {
    id: 'helpdesk', label: '02 · BACKEND', title: 'From support request to auditable workflow',
    flow: ['User', 'JWT auth', 'RBAC', 'Ticket API', 'MySQL', 'Audit history'],
    result: 'Built controlled ticket workflows with validation, comments, role permissions, persistence and OpenAPI docs.'
  },
  {
    id: 'sales-pipeline', label: '03 · DATA', title: 'From raw sales file to usable analytics',
    flow: ['CSV', 'Validate', 'Transform', 'MySQL', 'SQL analytics', 'Dashboard'],
    result: 'Built a repeatable Python/Pandas pipeline with duplicate protection, transactions, logging, tests and automation.'
  }
];

export default function ProjectCaseStudies() {
  return (
    <section className="case-studies bg-[#050505] text-white px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-20 case-heading">
          <div className="case-kicker"><span>Selected systems</span><i></i><span>Architecture · implementation · outcome</span></div>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-[-.04em] leading-[.95]">Engineering, <span className="text-white/30">made visible.</span></h2>
          <p className="mt-6 text-white/45 max-w-2xl leading-relaxed">Three flagship builds, shown as engineering flows so a recruiter can understand the problem, architecture and implementation in seconds.</p>
        </div>
        <div className="space-y-5">
          {cases.map((item) => {
            const project = projects.find((p) => p.id === item.id);
            return (
              <article key={item.id} className="case-card rounded-3xl border border-white/10 bg-white/[.025] p-6 md:p-9 hover:border-red-500/30 transition-colors duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-[32%]">
                    <div className="text-[10px] tracking-[.3em] text-red-400 font-black">{item.label}</div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-black tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/45">{item.result}</p>
                    <a href={project?.links?.github || '#'} target="_blank" rel="noreferrer" className="inline-flex mt-6 text-xs font-black uppercase tracking-[.18em] text-white/65 hover:text-white">View repository ↗</a>
                  </div>
                  <div className="lg:flex-1 flex flex-wrap items-center gap-2 md:gap-0">
                    {item.flow.map((step, index) => (
                      <React.Fragment key={step}>
                        <div className="case-step px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-xs font-bold text-white/75">{step}</div>
                        {index < item.flow.length - 1 && <span className="case-arrow hidden md:block px-2 text-red-400/60">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
