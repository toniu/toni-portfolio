import React from 'react';
import { motion } from "framer-motion";
import projectsData from './constants/ProjectData';
import { ExternalLinkIcon, GithubIcon } from './PortfolioIcons';

const Projects = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      id="projects"
      className="relative h-auto py-12 bg-white scroll-mt-28"
      style={{ scrollMarginTop: '7rem' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-8 mt-12">
          <motion.h2
            className="block text-xl uppercase tracking-widest text-blue-500 font-bold"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Selected Work
          </motion.h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-gray-600">
            A small set of work where I improved clarity, usability, and conversion across internal tools, education products, and service-driven websites.
          </p>
        </header>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 pb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {projectsData.map((item) => (
            <motion.article
              key={item.title}
              className={`group overflow-hidden rounded-2xl border bg-transparent shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${item.featured ? 'border-blue-200 bg-blue-50/40' : 'border-gray-200'}`}
              initial={false}
              whileHover={{ y: -4 }}
            >
              <div className="overflow-hidden rounded-2xl bg-white">
                <div className="h-1 w-full" style={{ backgroundImage: `linear-gradient(90deg, ${item.bgColors[0]}, ${item.bgColors[1]})` }} />

                {item.featured && (
                  <div className="px-5 pt-4">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Featured
                    </span>
                  </div>
                )}

                <div className="overflow-hidden bg-gray-50">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-[-0.02em] text-slate-900 leading-snug">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.secondTitle}</p>
                      {item.year && (
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                          <span>{item.year}</span>
                          {item.role && <span className="text-slate-400">•</span>}
                          {item.role && <span>{item.role}</span>}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {item.demoLink?.trim().length > 0 && (
                        <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-blue-500" aria-label={`Open ${item.title} demo`}>
                          <ExternalLinkIcon />
                        </a>
                      )}
                      {item.codeLink?.trim().length > 0 && (
                        <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition hover:bg-blue-100" aria-label={`Open ${item.title} code`}>
                          <GithubIcon />
                        </a>
                      )}
                    </div>
                  </div>

                  {item.context && (
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] leading-relaxed text-slate-500">
                      {item.context}
                    </p>
                  )}

                  {item.challenge && (
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      <span className="mr-1 font-extrabold uppercase tracking-[0.12em] text-slate-500">Challenge</span>
                      {item.challenge}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

                  {item.outcome && (
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      <span className="mr-1 font-extrabold uppercase tracking-[0.12em] text-blue-700">Outcome</span>
                      {item.outcome}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
