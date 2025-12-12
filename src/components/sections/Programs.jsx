import React from 'react';
import { Package, Briefcase, Globe } from 'lucide-react';
import Section from '../common/Section';
import Container from '../common/Container';

const Programs = () => {
    return (
        <Section id="programs" className="bg-white">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-slate-900 font-bold tracking-wide text-2xl mb-6 block">Our Programs</h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Comprehensive toolkits and initiatives designed to cultivate values, character, and responsible leadership
                    </p>
                </div>

                {/* Top Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Card 1: Good Manners */}
                    <div className="bg-white rounded-3xl p-10 cursor-pointer">
                        <div className="flex items-start justify-between mb-8">
                            <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center">
                                <Package size={28} strokeWidth={1.5} />
                            </div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wide">
                                Ages 7–13
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Good Manners Tool Kit</h3>
                        <p className="text-slate-500 text-sm mb-8">
                            Shaping courteous, confident, and emotionally aware children
                        </p>

                        <p className="text-slate-600 leading-relaxed text-sm">
                            An engaging toolkit that helps children embrace respect, consideration, and kindness through stories, games, roleplay, reflection, and creative expression.
                        </p>
                    </div>

                    {/* Card 2: Humanity & Refinement */}
                    <div className="bg-white rounded-3xl p-10 cursor-pointer">
                        <div className="flex items-start justify-between mb-8">
                            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                                <Briefcase size={28} strokeWidth={1.5} />
                            </div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-wide">
                                Leaders, Educators & Caregivers
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Humanity and Refinement Tool Kit</h3>
                        <p className="text-slate-500 text-sm mb-8">
                            For professionals working with minors and vulnerable persons
                        </p>

                        <p className="text-slate-600 leading-relaxed text-sm">
                            Equips teams to lead and serve with conscience, courtesy, emotional intelligence, and accountability fostering refined behaviour and positive institutional culture.
                        </p>
                    </div>
                </div>

                {/* Bottom Banner: Civility Initiative */}
                <div className="bg-primary-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                            <circle cx="300" cy="100" r="200" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                <Globe size={32} className="text-white" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">The Civility Improvement Initiative</h3>
                                <div className="text-primary-200 text-sm">Our Flagship Campaign</div>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-primary-50 max-w-3xl mb-12 leading-relaxed">
                            A transformative values campaign promoting moral education, civic responsibility, and conscience-led leadership in homes, schools, institutions, and communities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {['School Outreaches', 'Workshops & Training', 'Community Engagement'].map((item, i) => (
                                <div key={i} className="px-6 py-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-sm font-medium text-white text-center">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </Container>
        </Section>
    );
};

export default Programs;
