import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from "framer-motion";
import projectsData from './constants/ProjectData';
import testimonialsData from './constants/TestimonialsData';
import { ExternalLinkIcon, GithubIcon, ZoomIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './PortfolioIcons';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const normalizeText = (value = '') => value.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const truncateText = (value = '', max = 210) => {
    if (value.length <= max) return value;
    return `${value.slice(0, max).trim()}...`;
  };

  const findRelatedTestimonial = (item) => {
    const projectTitle = normalizeText(item.title);
    const projectSubtitle = normalizeText(item.secondTitle);

    return testimonialsData.find((testimonial) => {
      const company = normalizeText(testimonial.company || '');
      if (!company) return false;

      return (
        projectTitle.includes(company) ||
        company.includes(projectTitle) ||
        projectSubtitle.includes(company) ||
        company.includes(projectSubtitle)
      );
    });
  };

  const stepZoomedImage = (direction) => {
    setZoomedImage((current) => {
      if (!current || !current.shots?.length) return current;

      const nextIndex = (current.index + direction + current.shots.length) % current.shots.length;
      return {
        ...current,
        index: nextIndex,
        src: current.shots[nextIndex],
        alt: `${current.projectTitle} detail view ${nextIndex + 1}`,
      };
    });
  };

  useEffect(() => {
    if (!zoomedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setZoomedImage(null);
        return;
      }

      if (!zoomedImage.shots?.length || zoomedImage.shots.length < 2) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        stepZoomedImage(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        stepZoomedImage(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [zoomedImage]);

  return (
    <>
      {zoomedImage && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={zoomedImage.alt}
          onClick={() => setZoomedImage(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setZoomedImage(null);
            }}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image preview"
          >
            <CloseIcon />
          </button>

          {zoomedImage.shots?.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                stepZoomedImage(-1);
              }}
              className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Previous screenshot"
            >
              <ChevronLeftIcon />
            </button>
          )}

          <div
            className="max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-h-[82vh] w-full object-contain bg-white"
            />
          </div>

          {zoomedImage.shots?.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                stepZoomedImage(1);
              }}
              className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Next screenshot"
            >
              <ChevronRightIcon />
            </button>
          )}
        </motion.div>
      )}

      <motion.div
        initial={shouldReduceMotion ? false : { y: -40, opacity: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.04 }}
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
            A small set of product-minded work where I improved clarity, usability, and conversion across internal tools, education products, and service-driven websites.
          </p>
        </header>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 pb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.03 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
        >
          {projectsData.map((item) => {
            const mainImage = item.screenshots?.[0] || item.imageUrl;
            const isExpanded = expandedProject === item.title;
            const detailShots = item.screenshots?.slice(1) || [];
            const relatedTestimonial = item.featured ? findRelatedTestimonial(item) : null;
            const relatedTestimonialSnippet = relatedTestimonial ? truncateText(relatedTestimonial.quote) : '';

            return (
            <motion.article
              key={item.title}
              className={`group overflow-hidden rounded-2xl border bg-transparent shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${item.featured ? 'border-blue-200 bg-blue-50/40' : 'border-gray-200'}`}
              initial={false}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <div className="overflow-hidden rounded-2xl bg-white">
                <div className="h-1 w-full" style={{ backgroundImage: `linear-gradient(90deg, ${item.bgColors[0]}, ${item.bgColors[1]})` }} />

                {item.featured && (
                  <div className="px-5 p-2 flex justify-center md:justify-start">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-500 text-white px-4 py-1 text-[0.7em] font-semibold uppercase tracking-[0.18em]">
                      Featured
                    </span>
                  </div>
                )}

                <div className="overflow-hidden bg-gray-50">
                  <img
                    src={mainImage}
                    alt={item.title}
                    className={`h-56 w-full object-cover object-top ${shouldReduceMotion ? '' : 'transition-transform duration-300 group-hover:scale-[1.02]'}`}
                    loading="lazy"
                  />
                </div>

                <div className="p-5 text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-[-0.02em] text-slate-900 leading-snug">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.secondTitle}</p>
                      {(item.year || item.role || item.timeframe || item.teamSize) && (
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                          <span>{item.year}</span>
                          {item.role && <span className="text-slate-400">•</span>}
                          {item.role && <span>{item.role}</span>}
                          {item.timeframe && <span className="text-slate-400">•</span>}
                          {item.timeframe && <span>{item.timeframe}</span>}
                          {item.teamSize && <span className="text-slate-400">•</span>}
                          {item.teamSize && <span>{item.teamSize}</span>}
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

                  {item.featured && item.challenge && (
                    <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Challenge</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{item.challenge}</p>
                    </div>
                  )}

                  <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
                      {item.featured ? 'Solution' : 'Overview'}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{item.description}</p>
                  </div>

                  {item.featured && item.outcome && (
                    <div className="mt-2 rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-700">Outcome</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{item.outcome}</p>
                    </div>
                  )}

                  {item.featured && relatedTestimonial && (
                    <div className="mt-2 rounded-xl border border-violet-100 bg-violet-50/70 p-3">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-violet-700">Client feedback</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">"{relatedTestimonialSnippet}"</p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        {relatedTestimonial.name} • {relatedTestimonial.company}
                      </p>
                    </div>
                  )}

                  {item.featured && (
                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => setExpandedProject(isExpanded ? null : item.title)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-gray-900/80 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 transition hover:border-blue-300 hover:bg-gray-800 hover:text-white"
                        aria-expanded={isExpanded}
                          aria-controls={`case-study-${item.title}`}
                      >
                        <span>{isExpanded ? 'Hide case study' : 'View case study'}</span>
                        <span className="text-xs leading-none">{isExpanded ? '−' : '+'}</span>
                      </button>
                    </div>
                  )}

                  {item.featured && isExpanded && item.approach && (
                    <motion.div
                        id={`case-study-${item.title}`}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' }}
                        className="mt-3 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-slate-50 to-white p-3 md:p-4 shadow-inner shadow-blue-100/40"
                    >
                        <div className="flex items-center justify-between gap-3 border-b border-slate-200/80 pb-2.5 md:pb-3">
                          <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700">Case study</p>
                            <p className="mt-1 text-[13px] font-semibold leading-5 text-slate-700 md:text-sm">Thinking, decisions, and detail views behind this build.</p>
                          </div>
                          <span className="hidden rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 md:inline-flex">
                            One project open
                          </span>
                        </div>

                        {detailShots.length > 0 && (
                          <div className="mt-4">
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Screenshots</p>
                            <div className="mt-2 flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-2 md:overflow-visible">
                              {detailShots.map((shot, index) => (
                                <button
                                  key={`${item.title}-detail-${index}`}
                                  type="button"
                                  onClick={() => setZoomedImage({
                                    projectTitle: item.title,
                                    shots: detailShots,
                                    index,
                                    src: shot,
                                    alt: `${item.title} detail view ${index + 1}`,
                                  })}
                                  className="group/detail relative shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left transition hover:border-blue-300 md:shrink md:w-full"
                                  aria-label={`Open ${item.title} screenshot ${index + 1}`}
                                >
                                  <img
                                    src={shot}
                                    alt={`${item.title} screenshot ${index + 1}`}
                                    className="h-36 w-56 bg-white object-contain p-1 md:h-32 md:w-full"
                                    loading="lazy"
                                  />
                                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-slate-950/75 text-white transition group-hover/detail:bg-slate-900">
                                    <ZoomIcon />
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-4 space-y-2">
                          <div className="rounded-xl border border-slate-200 bg-white p-3">
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Approach</p>
                            <p className="mt-1 text-[13px] leading-5 text-slate-700 md:text-sm md:leading-6">{item.approach}</p>
                          </div>

                          {item.solutionWhy && (
                            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Why this solution</p>
                              <p className="mt-1 text-[13px] leading-5 text-slate-700 md:text-sm md:leading-6">{item.solutionWhy}</p>
                            </div>
                          )}

                          {item.takeaway && (
                            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3">
                              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-700">Takeaway</p>
                              <p className="mt-1 text-[13px] leading-5 text-slate-700 md:text-sm md:leading-6">{item.takeaway}</p>
                            </div>
                          )}
                        </div>
                    </motion.div>
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
            );
          })}
        </motion.div>
      </div>
      </motion.div>
    </>
  );
};

export default Projects;
