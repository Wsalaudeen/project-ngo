import React from 'react';
import { Play, Quote, Heart, User } from 'lucide-react';
import Section from '../common/Section';
import Container from '../common/Container';

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide mb-4">
            Trusted stories from our partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real impact through lived experience</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            After sharing our programmes and impact data, testimonials add relatable proof of how ESVO's work changes lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lg min-h-[440px]">
            <img
              src="/photo_2026-08-11_10-54-27.jpg"
              alt="Testimonial background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/50"></div>
            <div className="relative z-10 h-full p-8 sm:p-12 flex flex-col justify-end">
              <div className="max-w-2xl">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide mb-6">
                  Testimonial spotlight
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The experience that proves our impact
                </h3>
                <p className="text-lg text-slate-200 leading-relaxed mb-8">
                  "ESVO helped our students learn respect, compassion, and confidence. The toolkit is practical, engaging, and the follow-up support made the difference. The results were visible in classrooms, homes, and the broader community."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 border border-white/20">
                    <img
                      src="/photo_2026-08-11_10-54-27.jpg"
                      alt="Mrs. Ngozi Uche"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Mrs. Ngozi Uche</p>
                    <p className="text-slate-300 text-sm">School Principal, Enugu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-lg border border-slate-200 overflow-hidden">
            <div className="relative">
              <video
                controls
                poster="/testimonial_video_poster.jpg"
                className="w-full h-[320px] object-cover"
              >
                <source src="/testimonial_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-primary-700 shadow-xl">
                  <Play size={28} />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Video testimonial</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Watch how a partner school describes the transformation from the Good Manners Toolkit and the Civility Improvement Initiative.
              </p>
              <div className="flex items-center gap-4 text-slate-500">
                <User size={20} />
                <span className="text-sm">Featuring Pastor Samuel Obi, Head of Community Outreach</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
