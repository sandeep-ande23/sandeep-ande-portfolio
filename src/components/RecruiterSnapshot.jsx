import React from 'react';
import { education, personalInfo } from '../data/portfolioData';

const items = [
  ['6', 'Selected Projects'],
  ['Python + SQL', 'Core Stack'],
  ['AI / RAG', 'Focus'],
];

export default function RecruiterSnapshot() {
  return (
    <section className="recruiter-snapshot bg-[#080808] text-white px-6 md:px-12 py-16 md:py-20 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <span className="text-[10px] tracking-[.35em] uppercase text-red-400 font-black">At a glance</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">An engineer who builds and explains.</h2>
          </div>
          <p className="max-w-xl text-white/45 leading-relaxed text-sm md:text-base">
            {personalInfo.title}. I combine an EEE foundation with practical software, AI, backend, data, and deployment work.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden">
          {items.map(([value, label], i) => (
            <div key={label} className={`px-5 py-7 md:px-8 md:py-9 bg-white/[.025] ${i > 0 ? 'border-l border-white/10' : ''} ${i === 2 ? 'max-lg:border-l-0 max-lg:border-t' : ''} ${i === 3 ? 'max-lg:border-t' : ''}`}>
              <div className="text-2xl md:text-3xl font-black tracking-tight">{value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[.25em] text-white/35 font-bold">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/35">
          <span>{education.degree}</span><span>{education.institution}</span><span>{personalInfo.location}</span>
        </div>
      </div>
    </section>
  );
}
