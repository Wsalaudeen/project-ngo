import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-slate-50" aria-label="Partner Testimonials">
      <Container>
        {/* Semantic Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide mb-4">
            Trusted stories from our partners
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real impact through lived experience
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            After sharing our programmes and impact data, testimonials add relatable proof of how ESVO's work changes lives.
          </p>
        </header>

        {/* Semantic Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch" role="region" aria-label="Testimonial stories grid">
          {/* Framed Testimonial Photo Article */}
          <article className="bg-white p-4 sm:p-5 rounded-[2.5rem] shadow-sm border border-slate-200/80 flex flex-col justify-between h-full focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 transition-all">
            <figure className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-[2rem] overflow-hidden group bg-white flex items-center justify-center p-4 sm:p-6">
              <img
                src="/photo_2026-08-11_10-54-27.jpg"
                alt="Partner testimonial highlight: Mrs. Ngozi Uche, School Principal in Enugu, sharing positive feedback on ESVO's Civility Improvement Initiative and Good Manners Toolkit"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-[1.5rem]"
                loading="lazy"
              />
              <figcaption className="sr-only">
                Testimonial poster showcasing the impact of ESVO's character education programs in schools and communities.
              </figcaption>
            </figure>
          </article>

          {/* Framed Video Testimonial Article */}
          <article className="bg-white p-4 sm:p-5 rounded-[2.5rem] shadow-sm border border-slate-200/80 flex flex-col justify-between h-full focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 transition-all">
            <figure className="relative w-full h-full min-h-[340px] sm:min-h-[380px] rounded-[2rem] overflow-hidden bg-white flex items-center justify-center p-4 sm:p-6">
              <video
                controls
                preload="metadata"
                title="Video Testimonial from ESVO Partner School"
                aria-label="Video testimonial featuring Pastor Samuel Obi, Head of Community Outreach, describing the impact of the Good Manners Toolkit and Civility Initiative"
                className="w-full h-full object-contain rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary-600"
                tabIndex={0}
              >
                <source src="/esvoTestimonialVideo1.mp4" type="video/mp4" />
                <track kind="captions" src="/esvoTestimonialVideo1.vtt" srclang="en" label="English Captions" default />
                Your browser does not support the video tag.
              </video>
              <figcaption className="sr-only">
                Video testimonial featuring partner school outreach leaders discussing ESVO's character education impact.
              </figcaption>
            </figure>

            {/* Accessible Video Transcript Accordion */}
            <details className="mt-3 bg-slate-50 border border-slate-200/90 rounded-2xl p-3 sm:p-4 text-slate-700 text-sm transition-all focus-within:ring-2 focus-within:ring-primary-600">
              <summary className="font-semibold cursor-pointer text-primary-700 hover:text-primary-800 flex items-center justify-between outline-none select-none">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-600"></span>
                  Read Video Transcript
                </span>
                <span className="text-xs text-slate-400 font-normal uppercase tracking-wider">Click to Expand</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-600 space-y-2">
                <p className="font-semibold text-slate-900">Featuring: Pastor Samuel Obi (Head of Community Outreach)</p>
                <p className="italic">
                  "Welcome to the Etiquette and Social Values Organization (ESVO) Civility Initiative. Our Good Manners and Humanity Toolkits empower students and educators to build a culture of respect and kindness. Together, we are transforming schools, institutions, and communities across Nigeria."
                </p>
              </div>
            </details>
          </article>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;




